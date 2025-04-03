import {useState} from 'react';
import Grano from './Grano';
import './Grano.css';
import src from '../assets/img/mascotaMini.png';
import MenuBienvenida from './MenuBienvenida';
import { useCounter } from "../hooks/useCounter";
import golpeMaiz from '../assets/golpe_plastico.wav';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GenAleatorio from './GenAleatorio';

const NepoAvanzado = () => {
  const [t] = useTranslation("global");
  const [toMenu, setToMenu] = useState(false);
  const {updateValue} = useCounter();

  return (
    <motion.div  
      className='main-nepo' 
      variants={{
        initial: { opacity: 0, x: -1000 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: 1000}
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    {toMenu === false ?
    <>
      <header>
        <div className='content-header'>
          <div className='logo' onClick={() => setToMenu(true)}>
            <img src={src} className='mascota-logo' alt='Mascota de Nepohualtzintzin digital'></img>
            <h3 className='title'>Nepohualtzintzin</h3>
          </div>
      
          <nav>
            <ul>
              <li>
                <a href='https://www.youtube.com/watch?v=eK1ePA6oyoM&t=1s'><h4>{t("nepo.comoseusa")}</h4></a>
              </li>
              <li>
                <a href='https://nepohual-tzintzin.com.mx/moodle/'><h4>{t("nepo.sesion")}</h4></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <audio className='audio' src={golpeMaiz}/>
      <div className='nepo'>
        <div className='quadrant-1'>
          <div className='column-1'>
            
            <Grano onClick={event => {updateValue(event)}} blue r1 className='grayUp gUp1' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='grayUp gUp2' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='grayUp gUp3' />

          </div>
          <div className='column-2'>

            <Grano onClick={event => {updateValue(event)}} green r1 className='grayUp gUp4' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='grayUp gUp5' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='grayUp gUp6' />
            
          </div>
        </div>
        <div className='quadrant-2'>
          <div className='column-1'>
            
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='yellowUp yUp1' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='yellowUp yUp2' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='yellowUp yUp3' />

          </div>
          <div className='column-2'>

            <Grano onClick={event => {updateValue(event)}} blue r1 className='yellowUp yUp4' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='yellowUp yUp5' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='yellowUp yUp6' />

          </div>
          <div className='column-3'>
            
            <Grano onClick={event => {updateValue(event)}} green r1 className='yellowUp yUp7' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='yellowUp yUp8' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='yellowUp yUp9' />

          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='blueUp bUp1' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='blueUp bUp2' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='blueUp bUp3' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='blueUp bUp4' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='blueUp bUp5' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='blueUp bUp6' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='blueUp bUp7' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='blueUp bUp8' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='blueUp bUp9' />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='redUp rUp1' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='redUp rUp2' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='redUp rUp3' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='redUp rUp4' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='redUp rUp5' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='redUp rUp6' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='redUp rUp7' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='redUp rUp8' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='redUp rUp9' />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='yellowUp greenUp1' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='yellowUp greenUp2' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='yellowUp greenUp3' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='blueUp greenUp4' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='blueUp greenUp5' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='blueUp greenUp6' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='greenUp greenUp7' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='greenUp greenUp8' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='greenUp greenUp9' />
          </div>
        </div>
        
        <div className='pantalla-basico'>
        </div>
        
        <div className='quadrant-3 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='gDown8' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='gDown7' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='gDown6' />
            <Grano onClick={event => {updateValue(event)}} green r4 className='gDown5' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='gDown4' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='gDown3' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='gDown2'/>
            <Grano onClick={event => {updateValue(event)}} blue r4 className='gDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='yDown12' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='yDown11' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='yDown10' />
            <Grano onClick={event => {updateValue(event)}} green r4 className='yDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='yDown8' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='yDown7' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='yDown6' />
            <Grano onClick={event => {updateValue(event)}} blue r4 className='yDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='yDown4' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='yDown3' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='yDown2' />
            <Grano onClick={event => {updateValue(event)}} yellow r4 className='yDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='bDown12' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='bDown11' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='bDown10' />
            <Grano onClick={event => {updateValue(event)}} green r4 className='bDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='bDown8' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='bDown7' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='bDown6' />
            <Grano onClick={event => {updateValue(event)}} blue r4 className='bDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='bDown4' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='bDown3' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='bDown2' />
            <Grano onClick={event => {updateValue(event)}} yellow r4 className='bDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='rDown12' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='rDown11' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='rDown10' />
            <Grano onClick={event => {updateValue(event)}} green r4 className='rDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='rDown8' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='rDown7' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='rDown6' />
            <Grano onClick={event => {updateValue(event)}} blue r4 className='rDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='rDown4' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='rDown3' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='rDown2' />
            <Grano onClick={event => {updateValue(event)}} yellow r4 className='rDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {updateValue(event)}} green r1 className='greenDown12' />
            <Grano onClick={event => {updateValue(event)}} green r2 className='greenDown11' />
            <Grano onClick={event => {updateValue(event)}} green r3 className='greenDown10' />
            <Grano onClick={event => {updateValue(event)}} green r4 className='greenDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {updateValue(event)}} blue r1 className='greenDown8' />
            <Grano onClick={event => {updateValue(event)}} blue r2 className='greenDown7' />
            <Grano onClick={event => {updateValue(event)}} blue r3 className='greenDown6' />
            <Grano onClick={event => {updateValue(event)}} blue r4 className='greenDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {updateValue(event)}} yellow r1 className='greenDown4' />
            <Grano onClick={event => {updateValue(event)}} yellow r2 className='greenDown3' />
            <Grano onClick={event => {updateValue(event)}} yellow r3 className='greenDown2' />
            <Grano onClick={event => {updateValue(event)}} yellow r4 className='greenDown1' />
          </div>
        </div>
      </div>
      <GenAleatorio/>
    </>
    : <MenuBienvenida/>}
    </motion.div>
  );
};
export default NepoAvanzado;