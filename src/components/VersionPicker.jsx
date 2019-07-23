import React, { Component } from "react";

class VersionPicker extends Component {
  render() {
    const lib = this.props.data;
    const versionChips = lib.versions.map(version => this.renderChip(lib, version));

    return (
      <div>
        <ul className="version-picker">{versionChips}</ul>
      </div>
    );
  }

  renderChip = (lib, version) => {
    const isStable = !version.includes("alpha") && !version.includes("beta") && !version.includes("rc");
    const colorClass = isStable ? "text-version-stable" : "text-version-not-stable";

    return (
      <li
        key={version}
        className={"version-chip " + colorClass}
        onClick={() => {
          this.props.onVersionSelected(lib, version);
        }}
      >
        {version}
      </li>
    );
  };
}

export default VersionPicker;
