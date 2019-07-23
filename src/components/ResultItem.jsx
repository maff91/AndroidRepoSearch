import React, { Component } from "react";
import VersionPicker from "./VersionPicker";

class ResultItem extends Component {
  state = {
    isShowVersions: false
  };

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
          <span className="btn-link" onClick={() => this.toggleVersionPicker()}>
            V
          </span>
        </div>
        <div className="clear-both" />
        {this.renderVersionPicker(lib)}
      </li>
    );
  }

  renderVersionPicker = lib => {
    if (!this.state.isShowVersions) {
      return null;
    }
    return <VersionPicker data={lib} onVersionSelected={this.selectAlternativeVersion} />;
  };

  toggleVersionPicker = lib => {
    this.setState({ isShowVersions: !this.state.isShowVersions });
  };

  selectAlternativeVersion = (lib, version) => {
    this.props.onCopyClicked(lib, version);
  };
}

export default ResultItem;
