import React, {useState} from 'react';
import Grano from './elements/Grano';


const NepoBasico = () => {

  const [btnState, setBtnState] = useState(false);
  
  
  function handleClick(e){
    setBtnState(btnState => !btnState);
    
    if (btnState === false){
      e.target.style.transform = 'rotate(0)';
    }else{
      e.target.style.transform = 'rotate(180deg)';
    }
    
    //function logic (){
    //  const grano = e.target;
    //  const elementStyle = window.getComputedStyle(grano);
    //  const elementTransform = elementStyle.getPropertyValue('transform','rotate');
    //  return(console.log(elementTransform));
    //}

    
    return(
      console.log(btnState))    
    
  }

  //let gray1 = btnState ? 'grayup' : 'graydown';
  //let gray2 = btnState ? 'grayup' : 'graydown';
  //let gray3 = btnState ? 'grayup' : 'graydown';
  //let gray4 = btnState ? 'grayup' : 'graydown';
  //let gray5 = btnState ? 'grayup' : 'graydown';
  //let gray6 = btnState ? 'grayup' : 'graydown';
    //e.target.style.transform = 'rotate(180deg)';
    //console.log(props);
  
  return (
    
    <div className='main'>
      <h1>Suma y Resta</h1>
      
      <div className='nepo'>
        <div className='quadrant-1'>
          
          <div className='column-1'>
            <Grano color='grayup' onClick={handleClick} r1 />
            <Grano color='grayup' onClick={handleClick} r2 />
            <Grano color='grayup' onClick={handleClick} r3 />
          </div>
          <div className='column-2'>
            <Grano color='grayup' onClick={handleClick} r1 />
            <Grano color='grayup' onClick={handleClick} r2 />
            <Grano color='grayup' onClick={handleClick} r3 />  
            
            
          </div>
        
        </div>
        <div className='quadrant-2'>
          
          <div className='column-1'>
            <Grano color='yellowup' r1 />
            <Grano color='yellowup' r2 />
            <Grano color='yellowup' r3 />
          </div>
          <div className='column-2'>
            <Grano color='yellowup' r1 />
            <Grano color='yellowup' r2 />
            <Grano color='yellowup' r3 />
          </div>
          <div className='column-3'>
            <Grano color='yellowup' r1 />
            <Grano color='yellowup' r2 />
            <Grano color='yellowup' r3 />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano color='blueup' r1 />
            <Grano color='blueup' r2 />
            <Grano color='blueup' r3 />
          </div>
          <div className='column-2'>
            <Grano color='blueup' r1 />
            <Grano color='blueup' r2 />
            <Grano color='blueup' r3 />
          </div>
          <div className='column-3'>
            <Grano color='blueup' r1 />
            <Grano color='blueup' r2 />
            <Grano color='blueup' r3 />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano color='redup' r1 />
            <Grano color='redup' r2 />
            <Grano color='redup' r3 />
          </div>
          <div className='column-2'>
            <Grano color='redup' r1 />
            <Grano color='redup' r2 />
            <Grano color='redup' r3 />
          </div>
          <div className='column-3'>
            <Grano color='redup' r1 />
            <Grano color='redup' r2 />
            <Grano color='redup' r3 />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano color='greenup' r1 />
            <Grano color='greenup' r2 />
            <Grano color='greenup' r3 />
          </div>
          <div className='column-2'>
            <Grano color='greenup' r1 />
            <Grano color='greenup' r2 />
            <Grano color='greenup' r3 />
          </div>
          <div className='column-3'>
            <Grano color='greenup' r1 />
            <Grano color='greenup' r2 />
            <Grano color='greenup' r3 />
          </div>
        </div>

        <div className='quadrant-3'>

          <div className='column-1'>
            <Grano color='graydown' r1 z4 />
            <Grano color='graydown' r2 z3 />
            <Grano color='graydown' r3 z2 />
            <Grano color='graydown' r4 z1 />
          </div>
          <div className='column-2'>
            <Grano color='graydown' r1 z4 />
            <Grano color='graydown' r2 z3 />
            <Grano color='graydown' r3 z2 />
            <Grano color='graydown' r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano color='yellowdown' r1 z4 />
            <Grano color='yellowdown' r2 z3 />
            <Grano color='yellowdown' r3 z2 />
            <Grano color='yellowdown' r4 z1 />
          </div>
          <div className='column-2'>
            <Grano color='yellowdown' r1 z4 />
            <Grano color='yellowdown' r2 z3 />
            <Grano color='yellowdown' r3 z2 />
            <Grano color='yellowdown' r4 z1 />
          </div>
          <div className='column-3'>
            <Grano color='yellowdown' r1 z4 />
            <Grano color='yellowdown' r2 z3 />
            <Grano color='yellowdown' r3 z2 />
            <Grano color='yellowdown' r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano color='bluedown' r1 z4 />
            <Grano color='bluedown' r2 z3 />
            <Grano color='bluedown' r3 z2 />
            <Grano color='bluedown' r4 z1 />
          </div>
          <div className='column-2'>
            <Grano color='bluedown' r1 z4 />
            <Grano color='bluedown' r2 z3 />
            <Grano color='bluedown' r3 z2 />
            <Grano color='bluedown' r4 z1 />
          </div>
          <div className='column-3'>
            <Grano color='bluedown' r1 z4 />
            <Grano color='bluedown' r2 z3 />
            <Grano color='bluedown' r3 z2 />
            <Grano color='bluedown' r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano color='reddown' r1 z4 />
            <Grano color='reddown' r2 z3 />
            <Grano color='reddown' r3 z2 />
            <Grano color='reddown' r4 z1 />
          </div>
          <div className='column-2'>
            <Grano color='reddown' r1 z4 />
            <Grano color='reddown' r2 z3 />
            <Grano color='reddown' r3 z2 />
            <Grano color='reddown' r4 z1 />
          </div>
          <div className='column-3'>
            <Grano color='reddown' r1 z4 />
            <Grano color='reddown' r2 z3 />
            <Grano color='reddown' r3 z2 />
            <Grano color='reddown' r4 z1 />
          </div>
        </div>
        <div className='quadrant-4'>

          <div className='column-1'>
            <Grano color='greendown' r1 z4 />
            <Grano color='greendown' r2 z3 />
            <Grano color='greendown' r3 z2 />
            <Grano color='greendown' r4 z1 />
          </div>
          <div className='column-2'>
            <Grano color='greendown' r1 z4 />
            <Grano color='greendown' r2 z3 />
            <Grano color='greendown' r3 z2 />
            <Grano color='greendown' r4 z1 />
          </div>
          <div className='column-3'>
            <Grano color='greendown' r1 z4 />
            <Grano color='greendown' r2 z3 />
            <Grano color='greendown' r3 z2 />
            <Grano color='greendown' r4 z1 />
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default NepoBasico;