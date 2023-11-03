import React from 'react';
import Informacion from '../atoms/Informacion';
import './predefinidos.css';

function Predefinidos({ weatherData, weatherDataLondon, weatherDataParis, sameBackgroundColor }) {
    const containerClass = sameBackgroundColor ? 'contenedor redBackground' : 'contenedor blueBackground';

    return (
        <div className={containerClass}>
            {weatherDataLondon && (
                <div className="Suchiapa">
                    <Informacion weatherData={weatherDataLondon} />
                </div>
            )}

            {weatherDataParis && (
                <div className="Tuxtla">
                    <Informacion weatherData={weatherDataParis} />
                </div>
            )}
        </div>
    );
}

export default Predefinidos;
