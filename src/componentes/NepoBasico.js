import React, {useState} from 'react';
import Grano from './elements/Grano';
import './elements/grano.css';

const NepoBasico = () => {

  const [counter, setCounter] =useState(0);

  function counterLogic(e){
    if (e.target.classList[2] === "gray"){
      if(e.target.classList[3] === "flip-r1"){
        setCounter(counter + 10)
      }else{
        setCounter(counter - 10)
      }
    }else if(e.target.classList[2] === "frio"){
      if(e.target.classList[3] === "flip-r2"){
        setCounter(counter + 5)
      }else{
        setCounter(counter - 5);
      }
    }
      
    }
    
    
    //e.target.classList[2] === "frio" ? setCounter(counter + 1000) : setCounter(counter - 1000);
    //e.target.classList[3] === "flip-r2" && e.target.classList[2] === "frio" ? setCounter(counter + 5) : setCounter(counter - 5);
    
  

  return (
    
    <div className='main'>
      <h1>Suma y Resta</h1>
      
      <div className='nepo'>
        <div className='quadrant-1'>
          
          <div className='column-1'>
            <Grano onClick={event => {
              event.target.classList.toggle("flip-r1");
              counterLogic(event);
            }} gray r1 className="gray" />

            <Grano onClick={event => {
              event.target.classList.toggle("flip-r2")
              counterLogic(event);
              }} gray r2 className="frio"/>

            <Grano onClick={event => {event.target.classList.toggle("flip-r3")}} gray r3 />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {event.target.classList.toggle("rotate")}} gray r1 />
            <Grano onClick={event => {event.target.classList.toggle("rotate")}} gray r2 />
            <Grano onClick={event => {event.target.classList.toggle("rotate")}} gray r3 /> 
            
            
          </div>
        
        </div>
        <div className='quadrant-2'>
          
          <div className='column-1'>
            <Grano yellow r1 />
            <Grano yellow r2 />
            <Grano yellow r3 />
          </div>
          <div className='column-2'>
            <Grano yellow r1 />
            <Grano yellow r2 />
            <Grano yellow r3 />
          </div>
          <div className='column-3'>
            <Grano yellow r1 />
            <Grano yellow r2 />
            <Grano yellow r3 />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano blue r1 />
            <Grano blue r2 />
            <Grano blue r3 />
          </div>
          <div className='column-2'>
            <Grano blue r1 />
            <Grano blue r2 />
            <Grano blue r3 />
          </div>
          <div className='column-3'>
            <Grano blue r1 />
            <Grano blue r2 />
            <Grano blue r3 />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano red r1 />
            <Grano red r2 />
            <Grano red r3 />
          </div>
          <div className='column-2'>
            <Grano red r1 />
            <Grano red r2 />
            <Grano red r3 />
          </div>
          <div className='column-3'>
            <Grano red r1 />
            <Grano red r2 />
            <Grano red r3 />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano green r1 />
            <Grano green r2 />
            <Grano green r3 />
          </div>
          <div className='column-2'>
            <Grano green r1 />
            <Grano green r2 />
            <Grano green r3 />
          </div>
          <div className='column-3'>
            <Grano green r1 />
            <Grano green r2 />
            <Grano green r3 />
          </div>
        </div>

        <div className='quadrant-3'>

          <div className='column-1'>
            <Grano gray r1 className='rotate z4' />
            <Grano gray r2 className='rotate z3' />
            <Grano gray r3 className='rotate z2' />
            <Grano gray r4 className='rotate z1' />
          </div>
          <div className='column-2'>
            <Grano gray r1 className='rotate z4' />
            <Grano gray r2 className='rotate z3' />
            <Grano gray r3 className='rotate z2' />
            <Grano gray r4 className='rotate z1' />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano yellow r1 className='rotate z4' />
            <Grano yellow r2 className='rotate z3' />
            <Grano yellow r3 className='rotate z2' />
            <Grano yellow r4 className='rotate z1' />
          </div>
          <div className='column-2'>
            <Grano yellow r1 className='rotate z4' />
            <Grano yellow r2 className='rotate z3' />
            <Grano yellow r3 className='rotate z2' />
            <Grano yellow r4 className='rotate z1' />
          </div>
          <div className='column-3'>
            <Grano yellow r1 className='rotate z4' />
            <Grano yellow r2 className='rotate z3' />
            <Grano yellow r3 className='rotate z2' />
            <Grano yellow r4 className='rotate z1' />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano blue r1 className='rotate z4' />
            <Grano blue r2 className='rotate z3' />
            <Grano blue r3 className='rotate z2' />
            <Grano blue r4 className='rotate z1' />
          </div>
          <div className='column-2'>
            <Grano blue r1 className='rotate z4' />
            <Grano blue r2 className='rotate z3' />
            <Grano blue r3 className='rotate z2' />
            <Grano blue r4 className='rotate z1' />
          </div>
          <div className='column-3'>
            <Grano blue r1 className='rotate z4' />
            <Grano blue r2 className='rotate z3' />
            <Grano blue r3 className='rotate z2' />
            <Grano blue r4 className='rotate z1' />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano yellow r1 className='rotate z4' />
            <Grano yellow r2 className='rotate z3' />
            <Grano yellow r3 className='rotate z2' />
            <Grano yellow r4 className='rotate z1' />
          </div>
          <div className='column-2'>
            <Grano yellow r1 className='rotate z4' />
            <Grano yellow r2 className='rotate z3' />
            <Grano yellow r3 className='rotate z2' />
            <Grano yellow r4 className='rotate z1' />
          </div>
          <div className='column-3'>
            <Grano yellow r1 className='rotate z4' />
            <Grano yellow r2 className='rotate z3' />
            <Grano yellow r3 className='rotate z2' />
            <Grano yellow r4 className='rotate z1' />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano green r1 className='rotate z4' />
            <Grano green r2 className='rotate z3' />
            <Grano green r3 className='rotate z2' />
            <Grano green r4 className='rotate z1' />
          </div>
          <div className='column-2'>
            <Grano green r1 className='rotate z4' />
            <Grano green r2 className='rotate z3' />
            <Grano green r3 className='rotate z2' />
            <Grano green r4 className='rotate z1' />
          </div>
          <div className='column-3'>
            <Grano green r1 className='rotate z4' />
            <Grano green r2 className='rotate z3' />
            <Grano green r3 className='rotate z2' />
            <Grano green r4 className='rotate z1' />
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default NepoBasico;