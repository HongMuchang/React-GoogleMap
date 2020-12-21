import React from "react";
import SearchFrom from "./components/SearchFrom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <SearchFrom />
      </React.Fragment>
    );
  }
}

export default App;
