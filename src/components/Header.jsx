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
      <header className="has-text-centered">
        <h1>Android Repository Search</h1>
        <h2>
          Source: <a href="https://dl.google.com/dl/android/maven2/index.html">Google's Maven Repository</a>
        </h2>
        <input type="text" placeholder="e.g. paging" onChange={this.onSearchChanged} />
      </header>
    );
  }
}

export default Footer;
