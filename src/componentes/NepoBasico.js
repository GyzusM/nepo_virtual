import React, {useState} from 'react';
import Grano from './elements/Grano';

const NepoBasico = () => {
  const [clickedUp, flipDown] = useState(false);
  /*const [clickedDown, flipUp] = useState(false);*/

  return (
    
    <div className='main'>
      <h1>Suma y Resta</h1>
      
      <div className='nepo'>
        <div className='quadrant-1'>
          
          <div className='column-1'>
            <Grano gray r1 />
            <Grano gray r2 />
            <Grano gray r3 />
          </div>
          <div className='column-2'>
            <Grano gray r1 />
            <Grano gray r2 />
            {clickedUp === false ?
              <Grano gray r3 onClick={() => flipDown(true)} />
              :
              <Grano grayDown r3 onClick={() => flipDown(false)} />
            }
            
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
            <Grano grayDown r1 z4 />
            <Grano grayDown r2 z3 />
            <Grano grayDown r3 z2 />
            <Grano grayDown r4 z1 />
          </div>
          <div className='column-2'>
            <Grano grayDown r1 z4 />
            <Grano grayDown r2 z3 />
            <Grano grayDown r3 z2 />
            <Grano grayDown r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano yellowDown r1 z4 />
            <Grano yellowDown r2 z3 />
            <Grano yellowDown r3 z2 />
            <Grano yellowDown r4 z1 />
          </div>
          <div className='column-2'>
            <Grano yellowDown r1 z4 />
            <Grano yellowDown r2 z3 />
            <Grano yellowDown r3 z2 />
            <Grano yellowDown r4 z1 />
          </div>
          <div className='column-3'>
            <Grano yellowDown r1 z4 />
            <Grano yellowDown r2 z3 />
            <Grano yellowDown r3 z2 />
            <Grano yellowDown r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano blueDown r1 z4 />
            <Grano blueDown r2 z3 />
            <Grano blueDown r3 z2 />
            <Grano blueDown r4 z1 />
          </div>
          <div className='column-2'>
            <Grano blueDown r1 z4 />
            <Grano blueDown r2 z3 />
            <Grano blueDown r3 z2 />
            <Grano blueDown r4 z1 />
          </div>
          <div className='column-3'>
            <Grano blueDown r1 z4 />
            <Grano blueDown r2 z3 />
            <Grano blueDown r3 z2 />
            <Grano blueDown r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano redDown r1 z4 />
            <Grano redDown r2 z3 />
            <Grano redDown r3 z2 />
            <Grano redDown r4 z1 />
          </div>
          <div className='column-2'>
            <Grano redDown r1 z4 />
            <Grano redDown r2 z3 />
            <Grano redDown r3 z2 />
            <Grano redDown r4 z1 />
          </div>
          <div className='column-3'>
            <Grano redDown r1 z4 />
            <Grano redDown r2 z3 />
            <Grano redDown r3 z2 />
            <Grano redDown r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano greenDown r1 z4 />
            <Grano greenDown r2 z3 />
            <Grano greenDown r3 z2 />
            <Grano greenDown r4 z1 />
          </div>
          <div className='column-2'>
            <Grano greenDown r1 z4 />
            <Grano greenDown r2 z3 />
            <Grano greenDown r3 z2 />
            <Grano greenDown r4 z1 />
          </div>
          <div className='column-3'>
            <Grano greenDown r1 z4 />
            <Grano greenDown r2 z3 />
            <Grano greenDown r3 z2 />
            <Grano greenDown r4 z1 />
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default NepoBasico;
