import React, { Component } from "react";

class Footer extends Component {
  state = {
    searchString: ""
  };

  onSearchChanged = event => {
    const value = event.target.value;
    this.setState({ searchString: value });
    this.props.onSearch(value);
  };

  render() {
    return (
      <div>
        <h1>Google Android Repository</h1>
        <input
          type="text"
          placeholder="e.g. paging"
          onChange={this.onSearchChanged}
        />
      </div>
    );
  }
}

export default Footer;
