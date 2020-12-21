import React from "react";
import PropTypes from "prop-types";

const GeocodeResult = ({ address, lat, lng }) => (
  <ul>
    <li>住所：{address}</li>
    <li>緯度：{lat}</li>
    <li>経度：{lng}</li>
  </ul>
);

//デフォルト値
GeocodeResult.defaultProps = {
  address: "",
  lat: 0,
  lng: 0,
};

//バリデーション
GeocodeResult.propTypes = {
  name: PropTypes.string,
};

export default GeocodeResult;
