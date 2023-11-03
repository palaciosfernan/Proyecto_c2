import { useEffect, useState } from 'react';
import { database2 } from '../../db/Data';
import "./Titulo.css";

function Titulo() {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const obtenerHoraActual = () => {
      const fecha = new Date();
      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();
      const segundos = fecha.getSeconds();
      setHora(`${hora}:${minutos}:${segundos}`);
    };
    const interval = setInterval(obtenerHoraActual, 1000);
    return () => clearInterval(interval);
  }, []);

  const obtenerHoraAmPm = () => {
    const fecha = new Date();
    const opciones = { hour: 'numeric', minute: 'numeric', hour12: true };
    return fecha.toLocaleTimeString(undefined, opciones);
  };

  return (
    <div className='contenedor'>
      <div className='titulo'>
        <h2 className='texto'>{database2.titulo[0].nombre}</h2>
        <div className='hora'>{obtenerHoraAmPm()}</div>
      </div>
    </div>
  );
}

export default Titulo;
