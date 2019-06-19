import React, { Component } from "react";
import ResultItem from "./ResultItem";

class SearchResults extends Component {
  state = {};

  render() {
    console.log(this.props.results.length);
    const results = this.props.results;
    const resultItems = results.map(lib => <ResultItem key={lib.name} data={lib} />);
    return <ul>{resultItems}</ul>;
  }
}

export default SearchResults;
