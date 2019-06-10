import React, { Component } from "react";
import ResultItem from "./ResultItem";

import { libIndex } from "../fakeData/libIndex";

class SearchResults extends Component {
  state = {
    libs: libIndex.metadata
  };

  render() {
    const resultItems = this.state.libs.map(packageName => (
      <ResultItem key={packageName} data={packageName} />
    ));

    return <ul>{resultItems}</ul>;
  }
}

export default SearchResults;
