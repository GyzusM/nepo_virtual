import React, {useState} from 'react';
import Select from 'react-select';
import '../App.css';

const operations= [
  { label: 'Suma', value: 'Suma'},
  { label: 'Resta', value: 'Resta'},
  { label: 'Multiplicacion', value: 'Multiplicacion'},
  { label: 'Division', value: 'Division'}
]

const digits= [
  { label: '2 Cifras', value: 2},
  { label: '3 Cifras', value: 3},
  { label: '4 Cifras', value: 4},
  { label: '5 Cifras', value: 5}
]

const GenAleatorio = () => {

  const [selectedOperation, setSelectedOperation] = useState();
  const [selectedDigits, setSelectedDigits] = useState();

  const handleSelectChange = ( {value} ) => {
    setSelectedOperation(value);
  }

  const handleSelectDigits = ( {value} ) => {
    setSelectedDigits(value);
  }

  const generaNum = (min, max) => {
    return Math.floor(Math.random() * (max-min)) + min;
  }
  //

  function setNum(){
    let sign = '';
    let max = 0;
    let min = 0;
    switch(selectedOperation) {
      case 'Suma':
        sign = ' +';
        break;
      case 'Resta':
        sign = ' -';
        break;
      case 'Multiplicacion':
        sign = ' x';
        break;
      case 'Division':
        sign = ' ÷';
      break; 
      default:
    }
    switch (selectedDigits) {
      case 2:
        min = 10;
        max = 101;
        break;
      case 3:
        min = 10;
        max = 1001;
        break;
      case 4:
        min = 10;
        max = 10001;
        break;
      case 5:
        min = 10;
        max = 100001;
        break;
      default:
        console.log(selectedDigits); 
    }
    if ( sign!== '' && min !== 0 && max !== 0) {
      document.getElementById('num1-top').textContent = generaNum(min, max);
      document.getElementById('num2-top').textContent = generaNum(min, max);
      document.getElementById('num3-top').textContent = generaNum(min, max);
      document.getElementById('num4-top').textContent = generaNum(min, max);
      document.getElementById('num5-top').textContent = generaNum(min, max);
      document.getElementById('num1-bottom').textContent = generaNum(min, max) + sign;
      document.getElementById('num2-bottom').textContent = generaNum(min, max) + sign;
      document.getElementById('num3-bottom').textContent = generaNum(min, max) + sign;
      document.getElementById('num4-bottom').textContent = generaNum(min, max) + sign;
      document.getElementById('num5-bottom').textContent = generaNum(min, max) + sign;
    }
    else {
      alert('Selecciona un tipo de operación y el número de cifras')
    }
  }

  return (
    <div className='gen'>
      <h3>Generador de operaciones</h3>
      <span className='border-title'></span>
      <h4>Operacion: {selectedOperation} </h4>
      <div className='contain-menuOp'>
        <Select
          className='menu-op'
          options = {operations}
          onChange= {handleSelectChange}
        />

        <Select
          className='menu-op'
          options = {digits}
          onChange= {handleSelectDigits}
        />
        <button className='button-gen' onClick={setNum}>Generar</button>
      </div>
      
      <div className='op-top'>
        <span>1.-</span><p id='num1-top' className='num-top'></p>
        <span>2.-</span><p id='num2-top' className='num-top'></p>
        <span>3.-</span><p id='num3-top' className='num-top'></p>
        <span>4.-</span><p id='num4-top' className='num-top'></p>
        <span>5.-</span><p id='num5-top' className='num-top'></p>
      </div>
      <div className='op-bottom'>
        <p id='num1-bottom' className='num-bottom'></p>
        <p id='num2-bottom' className='num-bottom'></p>
        <p id='num3-bottom' className='num-bottom'></p>
        <p id='num4-bottom' className='num-bottom'></p>
        <p id='num5-bottom' className='num-bottom'></p>
      </div>
      
    </div>
  );
}
export default GenAleatorio;