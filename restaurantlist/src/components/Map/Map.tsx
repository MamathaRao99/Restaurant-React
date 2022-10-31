import React from "react";
import "./map.css";
const Map = () => {
  return (
    <div className="map">
      <img
        src={require("../../assets/maps.png")}
        alt="mapImage"
        className="mapImage"
      />
    </div>
  );
};

export default Map;
