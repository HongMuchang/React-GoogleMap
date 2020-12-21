import React from "react";

import SearchFrom from "./components/SearchFrom";
import GeocodeResult from "./components/GeocodeResult";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "winwin",
    };
  }

  handlePlaceSubmit(place) {
    console.log(place);
  }

  render() {
    return (
      <div className="main">
        <h1>GoogleMap</h1>
        <SearchFrom onSubmit={(place) => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default App;
