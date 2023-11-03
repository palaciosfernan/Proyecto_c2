import React, { useEffect, useState } from 'react';
import Informacion from '../atoms/Informacion';
import Titulo from '../atoms/Titulo';
import Carta from '../molecules/Carta';
import Predefinidos from '../molecules/predefinidos';
import "../organismes/aplicacion.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataLondon, setWeatherDataLondon] = useState(null);
  const [weatherDataParis, setWeatherDataParis] = useState(null);

  const apiKey = 'fa6e0e4f730705a28629e97e34cf8acf'; // Reemplaza 'TU_API_KEY' con tu clave de OpenWeatherMap
  const language = 'es'; // Idioma de traducción (si tu API lo admite)

  const weatherDescriptions = {
    'Clear': 'Despejado',
    'Clouds': 'Nublado',
    'Rain': 'Lluvia',
    'Snow': 'Nieve',
    'Broken clouds': 'Nubes rotas', // Agrega esta traducción
    // Agrega más condiciones según tus necesidades
  };

  const fetchWeatherData = async (cityName, setData) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=${language}`);
      if (response.ok) {
        const data = await response.json();

        // Traduce las descripciones del clima y otras partes relevantes del objeto de datos
        if (data.weather && data.weather.length > 0) {
          data.weather[0].description = weatherDescriptions[data.weather[0].description] || data.weather[0].description;
        }

        // Traduce el pronóstico del tiempo (si existe)
        if (data.weather[0].main) {
          data.weather[0].main = weatherDescriptions[data.weather[0].main] || data.weather[0].main;
        }

        setData(data);
      } else {
        console.error('Error al obtener datos del clima');
        setData(null);
      }
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
      setData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData('Suchiapa', setWeatherDataLondon);
    fetchWeatherData('Tuxtla', setWeatherDataParis);
  }, [apiKey]);

  return (
    <div className='pagina'>
      <Titulo />
      <Predefinidos
        weatherData={weatherData}
        weatherDataLondon={weatherDataLondon}
        weatherDataParis={weatherDataParis}
        sameBackgroundColor={true}
      />
      <div className='centered-content'>
        <div className='carta'>
          <Carta fetchWeatherData={fetchWeatherData} setWeatherData={setWeatherData} />
          {weatherData && (
            <div>
              <Informacion weatherData={weatherData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
