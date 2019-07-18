import React, { Component } from "react";
import "./App.scss";

import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    allData: [],
    searchResults: [],
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    this.fetchData();
  }

  onSearch = searchString => {
    if (searchString) {
      this.setState({
        searchResults: this.state.allData.filter(lib => lib.name.includes(searchString.toLowerCase()))
      });
    } else {
      this.setState({ searchResults: this.state.allData });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header onSearch={this.onSearch} />
        <section id="content">
          <SearchResults results={this.state.searchResults} />
        </section>
        <Footer />
      </React.Fragment>
    );
  }

  async fetchData() {
    const response = await fetch("http://localhost:3000/fakeData.json");
    const json = await response.json();

    this.setState({ allData: json, searchResults: json });
    // const response = await fetch("http://localhost:3000/libIndex.xml");
    // const xmlData = await response.text();
    // const parser = new DOMParser().parseFromString(xmlData, "application/xml");
    // const libList = [];
  }

  async parseLib(groupPackage) {
    const libUrl = groupPackage.split(".").join("/");
    const libRequest = await fetch(`https://dl.google.com/dl/android/maven2/${libUrl}/group-index.xml`);
    const libXml = await libRequest.text();
    const libParser = new DOMParser().parseFromString(libXml, "application/xml");

    const subLibs = [];

    for (let node of libParser.getRootNode().firstChild.children) {
      const libObj = {};
      libObj.name = groupPackage + "." + node.nodeName;
      libObj.versions = node
        .getAttribute("versions")
        .split(",")
        .reverse();
      libObj.latestMostStable = libObj.versions.length - 1;

      // Find latest stable version.
      for (const [index, version] of libObj.versions.entries()) {
        const isStable = !version.includes("alpha") && !version.includes("beta") && !version.includes("rc");

        if (isStable) {
          libObj.latestMostStable = index;
          break;
        }
      }

      subLibs.push(libObj);
    }

    return subLibs;
  }
}

export default App;
