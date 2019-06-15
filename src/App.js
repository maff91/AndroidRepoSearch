import React, { Component } from "react";
import "./App.css";

import { libIndex } from "./fakeData/libIndex";

import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    allData: libIndex.metadata,
    searchResults: libIndex.metadata
  };

  componentDidMount() {
    console.log("App mounted");
  }

  onSearch = searchString => {
    if (searchString) {
      this.setState({
        searchResults: this.state.allData.filter(lib =>
          lib.includes(searchString.toLowerCase())
        )
      });
    } else {
      this.setState({ searchResults: this.state.allData });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header onSearch={this.onSearch} />
        <SearchResults results={this.state.searchResults} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
