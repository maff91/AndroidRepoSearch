import React, { Component } from "react";

class ResultItem extends Component {
  render() {
    const lib = this.props.data;
    const latestStableVersion = lib.versions[lib.latestMostStable];
    return (
      <li>
        <div class="lib-text">
          <span class="text-code-comment">"{lib.name}:</span>
          <span class="text-code-purple">{latestStableVersion}</span>
          <span class="text-code-comment">"</span>
        </div>

        <div class="copy-container">
          <span class="btn-link">Copy</span> / <span class="btn-link">V</span>
        </div>
      </li>
    );
  }
}

export default ResultItem;
