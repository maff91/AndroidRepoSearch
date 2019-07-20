import React, { Component } from "react";

class ResultItem extends Component {
  render() {
    const lib = this.props.data;
    const latestStableVersion = lib.versions[lib.latestMostStable];
    return (
      <li>
        <div className="lib-text">
          <span className="text-code-comment">"{lib.group}:</span>
          <span className="text-code-orange">{lib.name}:</span>
          <span className="text-code-purple">{latestStableVersion}</span>
          <span className="text-code-comment">"</span>
        </div>

        <div className="copy-container">
          <span className="btn-link" onClick={() => this.props.onCopyClicked(lib, latestStableVersion)}>
            Copy
          </span>
          {/* / <span className="btn-link">V</span> */}
        </div>
      </li>
    );
  }
}

export default ResultItem;
