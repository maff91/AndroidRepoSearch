import React from "react";
import "./App.css";

import SearchResults from "./components/SearchResults";

function App() {
  return (
    <React.Fragment>
      <h1>Google Android Repository</h1>
      <input type="text" placeholder="e.g. paging" />
      <SearchResults />
    </React.Fragment>
  );
}

export default App;
