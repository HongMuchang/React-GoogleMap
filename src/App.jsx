import React from "react";
import SearchFrom from "./components/SearchFrom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "東京",
    };
  }

  handlePlaceSubmit(place) {
    console.log(place);
  }

  render() {
    return (
      <div>
        <h1>GoogleMap</h1>
        <SearchFrom onSubmit={(place) => this.handlePlaceSubmit(place)} />
      </div>
    );
  }
}

export default App;
