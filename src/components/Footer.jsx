import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="has-text-centered">
        <p>
          Made by{" "}
          <a href="https://www.linkedin.com/in/mshtutman/" target="_blank" rel="noopener noreferrer">
            Michael Shtutman
          </a>{" "}
          | Project on{" "}
          <a href="https://github.com/maff91/AndroidRepoSearch" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
