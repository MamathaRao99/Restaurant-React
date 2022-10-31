import React from "react";
import "./App.css";
import HotelList from "./components/hotelList/HotelList";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <HotelList />
      <Map/>
    </div>
  );
}

export default App;
