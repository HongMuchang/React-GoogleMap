import React from "react";
import PropTypes from "prop-types";

class SearchFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "東京",
    };
  }

  //受け取った値に変更する
  handlePlaceChange(place) {
    this.setState({ place });
  }

  //送信ボタン
  handleSubmit(e) {
    e.preventDefault(); //再レンダリングの止め
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.place}
            onChange={(e) => this.handlePlaceChange(e.target.value)}
          />
          <input type="submit" value="検索" />
        </form>
      </React.Fragment>
    );
  }
}

//バリデーション
SearchFrom.propTypes = {
  name: PropTypes.string,
};

export default SearchFrom;
