import React, {useState} from 'react';
import videoBg from '../assets/nepohualli.mp4';
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const NepoBasico = lazy(() => import("./NepoBasico")) ;
const NepoAvanzado = lazy(() => import ("./NepoAvanzado")) ;
const NepoMultDiv  = lazy(() => import ("./NepoMultDiv"));

function Loading() {
  return <h2 style={{margin: "0 auto"}}>⌛ Cargando Nepohualtzintzin...</h2>
}
const MenuBienvenida = () => {

  const [showMenu, hideMenu] = useState(false);
  const [sesion, abrirNepoBasico] = useState(false);
  const [sesion2, abrirNepoAvanzado] = useState(false);
  const [sesion3, abrirNepoMult] = useState(false);
  return (
    <Suspense fallback={<Loading/>}>
      {showMenu === false ?
        
        <motion.div 
          className='main'
          variants={{
            initial: { opacity: 0, x: -1000 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 1, x: 1000}
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />

          <div className='content'>
          
            <div className='mascota'></div>
            <h1 className='titulo-bienvenida'>Bienvenido a Nepohualtzintzin</h1>
            <button className='btn-bienvenida' onClick={() => {hideMenu(true); abrirNepoBasico(true)}}>Suma y Resta Básico</button>
            <button className='btn-bienvenida' onClick={() => {hideMenu(true); abrirNepoAvanzado(true)}}>Suma y Resta Avanzado</button>
            <button className='btn-bienvenida'  onClick={() => {hideMenu(true); abrirNepoMult(true)}}>Multiplicacion y División</button>
          
          </div>
        </motion.div>
      
        :
          ''
      }
      {sesion === false ? '' : <NepoBasico/>}
      {sesion2 === false ? '' : <NepoAvanzado/>}
      {sesion3 === false ? '' : <NepoMultDiv/>}
    </Suspense>
  );
};
export default MenuBienvenida;