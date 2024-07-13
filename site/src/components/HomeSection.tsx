import React from 'react';
import imageSrc from '../assets/images/ubicacionGeograficaHSC.jpg'; 

function HomeSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">El Hospital Santa Clotilde</h2>
        <p className="text-lg">
          A seis horas en barco de Iquitos, se encuentra el pueblo de Santa Clotilde en la rivera del río Napo. Este pueblo cuenta con un pequeño hospital, el Hospital Santa Clotilde, que es el único hospital a lo largo de los más de 500 kilómetros de río. 
        </p>
        <p className='text-lg mt-4'>
          El Hospital Santa Clotilde es parte de la Micro Red de Salud Santa Clotilde, que incluye 15 establecimientos de salud del primer nivel de atención y un buque de la Marina de Guerra del Perú (PIAS - Río Napo). Esta red tiene como área de influencia la cuenca del Río Napo, cubriendo una población de aproximadamente 30 mil habitantes distribuidos en 112 comunidades nativas amazónicas. A pesar de su importancia, enfrenta graves desafíos que limitan su capacidad para proporcionar una atención médica adecuada. La amplia dispersión geográfica y la escasez de recursos dificultan una cobertura de salud efectiva para todos los habitantes.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={imageSrc} alt="Descripción de la imagen" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default HomeSection;
