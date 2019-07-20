import React, { Component } from "react";
import ResultItem from "./ResultItem";

class SearchResults extends Component {
  state = {};

  render() {
    console.log(this.props.results.length);
    const results = this.props.results.slice(0, 50);
    const resultItems = results.map(lib => (
      <ResultItem key={lib.name} data={lib} onCopyClicked={this.props.onCopyClicked} />
    ));

    return (
      <div className="content-container">
        <ul className="result-list">{resultItems}</ul>
      </div>
    );
  }
}

export default SearchResults;
