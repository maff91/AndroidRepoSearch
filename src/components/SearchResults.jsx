import React, { Component } from "react";
import ResultItem from "./ResultItem";

class SearchResults extends Component {
  state = {};

  render() {
    const results = this.props.results;

    const resultItems = results.map(packageName => (
      <ResultItem key={packageName} data={packageName} />
    ));

    return <ul>{resultItems}</ul>;
  }
}

export default SearchResults;
