import React, {useState} from 'react';
import NepoBasico from './NepoBasico';
import videoBg from '../assets/nepohualli.mp4'

const MenuBienvenida = () => {

  const [sesion, abrirNepoBasico] = useState(true);
  return (
    <>
      {sesion === false ?
        
        <div className='main'>
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />

          <div className='content'>
            <div className='mascota'></div>
            <h1 className='titulo-bienvenida'>Bienvenido a Nepohualtzintzin</h1>
            <button className='btn-bienvenida' onClick={() => abrirNepoBasico(true)}>Suma y Resta</button>
            <button className='btn-bienvenida'>Multiplicacion y Division</button>
          </div>
        </div>
        :
        <NepoBasico/>
      }        
    
    </>
  );
};
export default MenuBienvenida