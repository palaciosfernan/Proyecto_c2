import React from "react";
import Buscador from "../atoms/Buscador";
import "./Carta.css";

function Carta({ fetchWeatherData, setWeatherData }) {
  return (
    <div className="buscador">
      <Buscador fetchWeatherData={fetchWeatherData} setWeatherData={setWeatherData} />
    </div>
  );
}

export default Carta;
