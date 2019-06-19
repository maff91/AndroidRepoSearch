import React, { Component } from "react";

class ResultItem extends Component {
  render() {
    const lib = this.props.data;
    const latestStabeVersion = lib.versions[lib.latestMostStable];
    return (
      <li>
        {lib.name} -> {latestStabeVersion}
      </li>
    );
  }
}

export default ResultItem;
