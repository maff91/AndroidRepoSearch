import React, { Component } from "react";
import "./App.scss";

import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    allData: [],
    searchResults: [],
    searchString: ""
  };

  componentDidMount() {
    this.fetchData();
  }

  onSearch = searchString => {
    if (searchString) {
      this.setState({
        searchResults: this.state.allData.filter(lib => lib.name.includes(searchString.toLowerCase())),
        searchString: searchString
      });
    } else {
      this.setState({ searchString: "", searchResults: this.state.allData });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header onSearch={this.onSearch} />
        <section id="content">
          <SearchResults results={this.state.searchResults} onCopyClicked={this.onCopyClicked} />
        </section>
        <Footer />

        <ToastContainer
          position={toast.POSITION.TOP_CENTER}
          autoClose={1500}
          transition={Slide}
          hideProgressBar={true}
          closeButton={false}
          toastClassName="notification-body"
          bodyClassName="notification-body"
        />

        <input type="text" id="fake-copy-input" />
      </React.Fragment>
    );
  }

  onCopyClicked = lib => {
    // Copy to clipboard.
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = lib.name;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show toast, prevent duplication.
    const toastId = "copyToast";
    if (!toast.isActive(toastId)) {
      toast("Copied to Clipboard", { toastId: toastId });
    }
  };

  async fetchData() {
    // const response = await fetch("/fakeData.json");
    // const json = await response.json();
    // this.setState({ allData: json, searchResults: json });

    const response = await fetch("https://dl.google.com/dl/android/maven2/master-index.xml");
    const xmlData = await response.text();
    const parser = new DOMParser().parseFromString(xmlData, "application/xml");

    for (let group of parser.getRootNode().firstChild.children) {
      const groupName = group.nodeName;
      this.getRepositoryGroup(groupName);
    }
  }

  async getRepositoryGroup(groupPackage) {
    const libUrl = groupPackage.split(".").join("/");
    const libRequest = await fetch(`https://dl.google.com/dl/android/maven2/${libUrl}/group-index.xml`);
    const libXml = await libRequest.text();
    const libParser = new DOMParser().parseFromString(libXml, "application/xml");

    const subLibs = [];

    for (let node of libParser.getRootNode().firstChild.children) {
      const libObj = {};
      libObj.name = node.nodeName;
      libObj.group = groupPackage;
      libObj.fullName = groupPackage + "." + libObj.name;
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

    this.setState({ allData: this.state.allData.concat(subLibs) });

    // Refresh search if needed.
    this.onSearch(this.state.searchString);
  }
}

export default App;
