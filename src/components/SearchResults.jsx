import React, { Component } from "react";
import ResultItem from "./ResultItem";

class SearchResults extends Component {
  state = {};

  render() {
    console.log(this.props.results.length);
    const results = this.props.results.slice(0, 50);
    const resultItems = results.map(lib => <ResultItem key={lib.name} data={lib} />);

    return (
      <div class="content-container">
        <ul class="result-list">{resultItems}</ul>
      </div>
    );
  }
}

export default SearchResults;
