import { useNavigate } from 'react-router-dom';
import {useEffect } from 'react';
import logo from '../assets/img/labastilla-logo.png';

export default function VideoConfirmation() {
  const navigate = useNavigate();
  useEffect(() => {console.log("Navigating to Video Confirmation page")}, []);
  
  return (
    <div className="flex flex-col items-center justify-center w-[90%] h-[80vh] bg-[#F7F4F1] opacity-90">
      {/*<img src={logo} alt="Logo La Bastilla" className="w-30 mb-6" />*/}
      <h1 className="text-4xl mb-6 font-bold">¡Ya está!</h1>
      <h2 className="text-2xl mb-2">Dentro de nada recibirás en tu email el vídeo generado.</h2>
      <p className='mb-8'>Aprovecha y reserva la fecha de tus invitados</p>
      <button
        className="px-10 py-3 bg-[#AD5752] text-white rounded-lg text-lg hover:bg-[#661B17] transition"
        onClick={() => navigate('/')}
      >
        Generar nuevo vídeo
      </button>
    </div>
  );
}
