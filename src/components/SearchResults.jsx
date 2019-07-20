import React, { Component } from "react";
import ResultItem from "./ResultItem";

class SearchResults extends Component {
  state = {};

  render() {
    var results = this.props.results;
    var hiddenItemsCount = 0;

    if (results.length > 50) {
      hiddenItemsCount = results.length - 50;
      results = this.props.results.slice(0, 50);
    }

    return <div className="content-container">{this.renderResultsOrEmpty(results, hiddenItemsCount)}</div>;
  }

  renderResultsOrEmpty = (results, hiddenItemsCount) => {
    if (results.length === 0) {
      return <p className="empty-view">No matches found</p>;
    } else {
      const resultItems = results.map(lib => (
        <ResultItem key={lib.name} data={lib} onCopyClicked={this.props.onCopyClicked} />
      ));

      return (
        <ul className="result-list">
          {resultItems}
          {this.renderMoreItems(hiddenItemsCount)}
        </ul>
      );
    }
  };

  renderMoreItems = hiddenItemsCount => {
    if (hiddenItemsCount > 0) {
      return <p className="more-results-available">{hiddenItemsCount} more results</p>;
    } else {
      return null;
    }
  };
}

export default SearchResults;
