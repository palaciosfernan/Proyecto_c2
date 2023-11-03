import { database } from '../../db/Data';

function Informacion({ weatherData }) {
    return (
      <>
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>{database.informacion[0].solsal}: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>{database.informacion[0].solpues}: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
          <p>{database.informacion[0].pron}: {weatherData.weather[0].description}</p>
          <p>{database.informacion[0].presion}: {weatherData.main.pressure} hPa</p>
          <p>{database.informacion[0].Humedad}: {weatherData.main.humidity}%</p>
          <p>{database.informacion[0].condiciones}: {weatherData.weather[0].main}</p>
          <p>{database.informacion[0].temperatura}: {weatherData.main.temp}°C</p>
        </div>
      </>
    );
  }
export default Informacion;