import React, {useState} from 'react';
import NepoBasico from './NepoBasico';
import NepoAvanzado from './NepoAvanzado';
import NepoMultDiv from './NepoMultDiv';
import videoBg from '../assets/nepohualli.mp4'


const MenuBienvenida = () => {

  const [showMenu, hideMenu] = useState(false);
  const [sesion, abrirNepoBasico] = useState(false);
  const [sesion2, abrirNepoAvanzado] = useState(false);
  const [sesion3, abrirNepoMult] = useState(false);
  return (
    <>
      {showMenu === false ?
        
        <div className='main'>
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />

          <div className='content'>
            <div className='mascota'></div>
            <h1 className='titulo-bienvenida'>Bienvenido a Nepohualtzintzin</h1>
            <button className='btn-bienvenida' onClick={() => {hideMenu(true); abrirNepoBasico(true)}}>Suma y Resta Básico</button>
            <button className='btn-bienvenida' onClick={() => {hideMenu(true); abrirNepoAvanzado(true)}}>Suma y Resta Avanzado</button>
            <button className='btn-bienvenida'  onClick={() => {hideMenu(true); abrirNepoMult(true)}}>Multiplicacion y División</button>
          </div>
        </div>
      
        :
          ''
      }
      {sesion === false ? '' : <NepoBasico/>}
      {sesion2 === false ? '' : <NepoAvanzado/>}
      {sesion3 === false ? '' : <NepoMultDiv/>}
    </>
  );
};
export default MenuBienvenida