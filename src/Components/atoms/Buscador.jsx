import React, { useState } from "react";
import './Buscador.css';
function Buscador({ fetchWeatherData, setWeatherData }) {
  const [city, setCity] = useState('');

  const buscarClima = () => {
    if (city) {
      fetchWeatherData(city, setWeatherData);
    }
  };

  return (
    <>
    <div>
      <input
        type="text"
        className="input"
        placeholder="Ingrese una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      
      <button className="boton" onClick={buscarClima}>Buscar</button>
      </div>
    </>
  );
}

export default Buscador;
