import React, {useState} from 'react';
import Grano from './elements/Grano';
import './elements/grano.css';
import src from '../assets/img/mascotaMini.png';
import MenuBienvenida from './MenuBienvenida';
import golpeMaiz from '../assets/golpe_plastico.wav';

const NepoBasico = () => {
  const [counter, setCounter] =useState(0);
  const [toMenu, setToMenu] = useState(false);

  function counterLogic(e){
    const audio = document.querySelector(".audio");

    audio.play();
    /*-- GRANOS GRISES SUPERIORES -- */
    //Pregunta si el grano que se presiono es el Gris de la fila y cuadrante superior
    if (e.target.classList[3] === "gUp1"){
      const gUp2 = document.querySelector(".gUp2");
      if (gUp2.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 50000000000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000000000000)
        }
      }
    }
    if (e.target.classList[3] === "gUp2"){
      const gUp1 = document.querySelector(".gUp1");
      const gUp3 = document.querySelector(".gUp3");
      if (gUp3.classList.item(4) === "flipdown-r3" && gUp1.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 50000000000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000000000000)
        }
      }
    }
    if (e.target.classList[3] === "gUp3"){
      const gUp2 = document.querySelector(".gUp2");
      if (gUp2.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 50000000000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 50000000000000)
      }
    }
    if (e.target.classList[3] === "gUp4"){
      const gUp5 = document.querySelector(".gUp5");
      if (gUp5.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 5000000000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000000000000)
        }
      }
    }
    if (e.target.classList[3] === "gUp5"){
      const gUp4 = document.querySelector(".gUp4");
      const gUp6 = document.querySelector(".gUp6");
      if (gUp6.classList.item(4) === "flipdown-r3" && gUp4.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 5000000000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000000000000)
        }
      }
    }
    if (e.target.classList[3] === "gUp6"){
      const gUp5 = document.querySelector(".gUp5");
      if (gUp5.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 5000000000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 5000000000000)
      }
    }
    /*-- GRANOS AMARILLOS SUPERIORES --*/
    if (e.target.classList[3] === "yUp1"){
      const yUp2 = document.querySelector(".yUp2");
      if (yUp2.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 500000000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500000000000)
        }
      }
    }
    if (e.target.classList[3] === "yUp2"){
      const yUp1 = document.querySelector(".yUp1");
      const yUp3 = document.querySelector(".yUp3");
      if (yUp3.classList.item(4) === "flipdown-r3" && yUp1.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 500000000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500000000000)
        }
      }
    }
    if (e.target.classList[3] === "yUp3"){
      const yUp2 = document.querySelector(".yUp2");
      if (yUp2.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 500000000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 500000000000)
      }
    }
    if (e.target.classList[3] === "yUp4"){
      const yUp5 = document.querySelector(".yUp5");
      if (yUp5.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 50000000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000000000)
        }
      }
    }
    if (e.target.classList[3] === "yUp5"){
      const yUp4 = document.querySelector(".yUp4");
      const yUp6 = document.querySelector(".yUp6");
      if (yUp6.classList.item(4) === "flipdown-r3" && yUp4.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 50000000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000000000)
        }
      }
    }
    if (e.target.classList[3] === "yUp6"){
      const yUp5 = document.querySelector(".yUp5");
      if (yUp5.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 50000000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 50000000000)
      }
    }
    if (e.target.classList[3] === "yUp7"){
      const yUp8 = document.querySelector(".yUp8");
      if (yUp8.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 5000000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000000000)
        }
      }
    }
    if (e.target.classList[3] === "yUp8"){
      const yUp7 = document.querySelector(".yUp7");
      const yUp9 = document.querySelector(".yUp9");
      if (yUp9.classList.item(4) === "flipdown-r3" && yUp7.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 5000000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000000000)
        }
      }
    }
    if (e.target.classList[3] === "yUp9"){
      const yUp8 = document.querySelector(".yUp8");
      if (yUp8.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 5000000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 5000000000)
      }
    }
    /*-- GRANOS AZULES SUPERIORES --*/
    if (e.target.classList[3] === "bUp1"){
      const bUp2 = document.querySelector(".bUp2");
      if (bUp2.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 500000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500000000)
        }
      }
    }
    if (e.target.classList[3] === "bUp2"){
      const bUp1 = document.querySelector(".bUp1");
      const bUp3 = document.querySelector(".bUp3");
      if (bUp3.classList.item(4) === "flipdown-r3" && bUp1.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 500000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500000000)
        }
      }
    }
    if (e.target.classList[3] === "bUp3"){
      const bUp2 = document.querySelector(".bUp2");
      if (bUp2.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 500000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 500000000)
      }
    }
    if (e.target.classList[3] === "bUp4"){
      const bUp5 = document.querySelector(".bUp5");
      if (bUp5.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 50000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000000)
        }
      }
    }
    if (e.target.classList[3] === "bUp5"){
      const bUp4 = document.querySelector(".bUp4");
      const bUp6 = document.querySelector(".bUp6");
      if (bUp6.classList.item(4) === "flipdown-r3" && bUp4.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 50000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000000)
        }
      }
    }
    if (e.target.classList[3] === "bUp6"){
      const bUp5 = document.querySelector(".bUp5");
      if (bUp5.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 50000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 50000000)
      }
    }
    if (e.target.classList[3] === "bUp7"){
      const bUp8 = document.querySelector(".bUp8");
      if (bUp8.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 5000000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000000)
        }
      }
    }
    if (e.target.classList[3] === "bUp8"){
      const bUp7 = document.querySelector(".bUp7");
      const bUp9 = document.querySelector(".bUp9");
      if (bUp9.classList.item(4) === "flipdown-r3" && bUp7.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 5000000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000000)
        }
      }
    }
    if (e.target.classList[3] === "bUp9"){
      const bUp8 = document.querySelector(".bUp8");
      if (bUp8.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 5000000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 5000000)
      }
    }
    /*-- GRANOS ROJOS SUPERIORES --*/
    if (e.target.classList[3] === "rUp1"){
      const rUp2 = document.querySelector(".rUp2");
      if (rUp2.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 500000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500000)
        }
      }
    }
    if (e.target.classList[3] === "rUp2"){
      const rUp1 = document.querySelector(".rUp1");
      const rUp3 = document.querySelector(".rUp3");
      if (rUp3.classList.item(4) === "flipdown-r3" && rUp1.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 500000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500000)
        }
      }
    }
    if (e.target.classList[3] === "rUp3"){
      const rUp2 = document.querySelector(".rUp2");
      if (rUp2.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 500000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 500000)
      }
    }
    if (e.target.classList[3] === "rUp4"){
      const rUp5 = document.querySelector(".rUp5");
      if (rUp5.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 50000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000)
        }
      }
    }
    if (e.target.classList[3] === "rUp5"){
      const rUp4 = document.querySelector(".rUp4");
      const rUp6 = document.querySelector(".rUp6");
      if (rUp6.classList.item(4) === "flipdown-r3" && rUp4.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 50000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50000)
        }
      }
    }
    if (e.target.classList[3] === "rUp6"){
      const rUp5 = document.querySelector(".rUp5");
      if (rUp5.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 50000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 50000)
      }
    }
    if (e.target.classList[3] === "rUp7"){
      const rUp8 = document.querySelector(".rUp8");
      if (rUp8.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 5000)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000)
        }
      }
    }
    if (e.target.classList[3] === "rUp8"){
      const rUp7 = document.querySelector(".rUp7");
      const rUp9 = document.querySelector(".rUp9");
      if (rUp9.classList.item(4) === "flipdown-r3" && rUp7.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 5000)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5000)
        }
      }
    }
    if (e.target.classList[3] === "rUp9"){
      const rUp8 = document.querySelector(".rUp8");
      if (rUp8.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 5000)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 5000)
      }
    }
    /*-- GRANOS VERDES SUPERIORES --*/
    if (e.target.classList[3] === "greenUp1"){
      const greenUp2 = document.querySelector(".greenUp2");
      if (greenUp2.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 500)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500)
        }
      }
    }
    if (e.target.classList[3] === "greenUp2"){
      const greenUp1 = document.querySelector(".greenUp1");
      const greenUp3 = document.querySelector(".greenUp3");
      if (greenUp3.classList.item(4) === "flipdown-r3" && greenUp1.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 500)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 500)
        }
      }
    }
    if (e.target.classList[3] === "greenUp3"){
      const greenUp2 = document.querySelector(".greenUp2");
      if (greenUp2.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 500)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 500)
      }
    }
    if (e.target.classList[3] === "greenUp4"){
      const greenUp5 = document.querySelector(".greenUp5");
      if (greenUp5.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 50)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50)
        }
      }
    }
    if (e.target.classList[3] === "greenUp5"){
      const greenUp4 = document.querySelector(".greenUp4");
      const greenUp6 = document.querySelector(".greenUp6");
      if (greenUp6.classList.item(4) === "flipdown-r3" && greenUp4.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 50)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 50)
        }
      }
    }
    if (e.target.classList[3] === "greenUp6"){
      const greenUp5 = document.querySelector(".greenUp5");
      if (greenUp5.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 50)
      }
      if (e.target.classList.length === 4){
          setCounter(counter - 50)
      }
    }
    if (e.target.classList[3] === "greenUp7"){
      const greenUp8 = document.querySelector(".greenUp8");
      if (greenUp8.classList.item(4) === "flipdown-r2"){
        e.target.classList.toggle("flipdown-r1");
        setCounter(counter + 5)
        console.log(e.target.classList)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5)
        }
      }
    }
    if (e.target.classList[3] === "greenUp8"){
      const greenUp7 = document.querySelector(".greenUp7");
      const greenUp9 = document.querySelector(".greenUp9");
      if (greenUp9.classList.item(4) === "flipdown-r3" && greenUp7.classList.length === 4){
        e.target.classList.toggle("flipdown-r2");
        setCounter(counter + 5)
        
        if (e.target.classList.length === 4){
          setCounter(counter - 5)
        }
      }
    }
    if (e.target.classList[3] === "greenUp9"){
      const greenUp8 = document.querySelector(".greenUp8");
      if (greenUp8.classList.length === 4){
        e.target.classList.toggle("flipdown-r3");
        setCounter(counter + 5)
      }
      if (e.target.classList.length === 4){
        setCounter(counter - 5)
      }
    }
    /*-- GRANOS GRISES INFERIORES --*/
    if (e.target.classList[2] === "gDown1"){
      const gDown2 = document.querySelector(".gDown2");
      if (gDown2.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 10000000000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 10000000000000)
      }
    }
    if (e.target.classList[2] === "gDown2"){
      const gDown1 = document.querySelector(".gDown1");
      const gDown3 = document.querySelector(".gDown3");
      if (gDown3.classList.length === 3 && gDown1.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 10000000000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 10000000000000)
        }
      }
    }
    if (e.target.classList[2] === "gDown3"){
      const gDown2 = document.querySelector(".gDown2");
      const gDown4 = document.querySelector(".gDown4");
      if (gDown4.classList.length === 3 && gDown2.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 10000000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000000000000)
        }
      }
    }
    if (e.target.classList[2] === "gDown4"){
      const gDown3 = document.querySelector(".gDown3");
      if (gDown3.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 10000000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000000000000)
        }
      }
    }
    if (e.target.classList[2] === "gDown5"){
      const gDown6 = document.querySelector(".gDown6");
      if (gDown6.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 1000000000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 1000000000000)
      }
    }
    if (e.target.classList[2] === "gDown6"){
      const gDown5 = document.querySelector(".gDown5");
      const gDown7 = document.querySelector(".gDown7");
      if (gDown7.classList.length === 3 && gDown5.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 1000000000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 1000000000000)
        }
      }
    }
    if (e.target.classList[2] === "gDown7"){
      const gDown6 = document.querySelector(".gDown6");
      const gDown8 = document.querySelector(".gDown8");
      if (gDown8.classList.length === 3 && gDown6.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 1000000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000000000000)
        }
      }
    }
    if (e.target.classList[2] === "gDown8"){
      const gDown7 = document.querySelector(".gDown7");
      if (gDown7.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 1000000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000000000000)
        }
      }
    }
    /*-- GRANOS AMARILLOS INFERIORES --*/
    if (e.target.classList[2] === "yDown1"){
      const yDown2 = document.querySelector(".yDown2");
      if (yDown2.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 100000000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 100000000000)
      }
    }
    if (e.target.classList[2] === "yDown2"){
      const yDown1 = document.querySelector(".yDown1");
      const yDown3 = document.querySelector(".yDown3");
      if (yDown3.classList.length === 3 && yDown1.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 100000000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 100000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown3"){
      const yDown2 = document.querySelector(".yDown2");
      const yDown4 = document.querySelector(".yDown4");
      if (yDown4.classList.length === 3 && yDown2.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 100000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 100000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown4"){
      const yDown3 = document.querySelector(".yDown3");
      if (yDown3.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 100000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 100000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown5"){
      const yDown6 = document.querySelector(".yDown6");
      if (yDown6.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 10000000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 10000000000)
      }
    }
    if (e.target.classList[2] === "yDown6"){
      const yDown5 = document.querySelector(".yDown5");
      const yDown7 = document.querySelector(".yDown7");
      if (yDown7.classList.length === 3 && yDown5.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 10000000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 10000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown7"){
      const yDown6 = document.querySelector(".yDown6");
      const yDown8 = document.querySelector(".yDown8");
      if (yDown8.classList.length === 3 && yDown6.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 10000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown8"){
      const yDown7 = document.querySelector(".yDown7");
      if (yDown7.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 10000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown9"){
      const yDown10 = document.querySelector(".yDown10");
      if (yDown10.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 1000000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 1000000000)
      }
    }
    if (e.target.classList[2] === "yDown10"){
      const yDown9 = document.querySelector(".yDown9");
      const yDown11 = document.querySelector(".yDown11");
      if (yDown11.classList.length === 3 && yDown9.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 1000000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 1000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown11"){
      const yDown10 = document.querySelector(".yDown10");
      const yDown12 = document.querySelector(".yDown12");
      if (yDown12.classList.length === 3 && yDown10.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 1000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000000000)
        }
      }
    }
    if (e.target.classList[2] === "yDown12"){
      const yDown11 = document.querySelector(".yDown11");
      if (yDown11.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 1000000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000000000)
        }
      }
    }
    /*-- GRANOS AZULES INFERIORES --*/
    if (e.target.classList[2] === "bDown1"){
      const bDown2 = document.querySelector(".bDown2");
      if (bDown2.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 100000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 100000000)
      }
    }
    if (e.target.classList[2] === "bDown2"){
      const bDown1 = document.querySelector(".bDown1");
      const bDown3 = document.querySelector(".bDown3");
      if (bDown3.classList.length === 3 && bDown1.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 100000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 100000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown3"){
      const bDown2 = document.querySelector(".bDown2");
      const bDown4 = document.querySelector(".bDown4");
      if (bDown4.classList.length === 3 && bDown2.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 100000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 100000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown4"){
      const bDown3 = document.querySelector(".bDown3");
      if (bDown3.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 100000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 100000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown5"){
      const bDown6 = document.querySelector(".bDown6");
      if (bDown6.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 10000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 10000000)
      }
    }
    if (e.target.classList[2] === "bDown6"){
      const bDown5 = document.querySelector(".bDown5");
      const bDown7 = document.querySelector(".bDown7");
      if (bDown7.classList.length === 3 && bDown5.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 10000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 10000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown7"){
      const bDown6 = document.querySelector(".bDown6");
      const bDown8 = document.querySelector(".bDown8");
      if (bDown8.classList.length === 3 && bDown6.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 10000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown8"){
      const bDown7 = document.querySelector(".bDown7");
      if (bDown7.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 10000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown9"){
      const bDown10 = document.querySelector(".bDown10");
      if (bDown10.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 1000000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 1000000)
      }
    }
    if (e.target.classList[2] === "bDown10"){
      const bDown9 = document.querySelector(".bDown9");
      const bDown11 = document.querySelector(".bDown11");
      if (bDown11.classList.length === 3 && bDown9.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 1000000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 1000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown11"){
      const bDown10 = document.querySelector(".bDown10");
      const bDown12 = document.querySelector(".bDown12");
      if (bDown12.classList.length === 3 && bDown10.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 1000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000000)
        }
      }
    }
    if (e.target.classList[2] === "bDown12"){
      const bDown11 = document.querySelector(".bDown11");
      if (bDown11.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 1000000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000000)
        }
      }
    }
    /**-- GRANOS ROJOS INFERIORES --*/
    if (e.target.classList[2] === "rDown1"){
      const rDown2 = document.querySelector(".rDown2");
      if (rDown2.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 100000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 100000)
      }
    }
    if (e.target.classList[2] === "rDown2"){
      const rDown1 = document.querySelector(".rDown1");
      const rDown3 = document.querySelector(".rDown3");
      if (rDown3.classList.length === 3 && rDown1.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 100000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 100000)
        }
      }
    }
    if (e.target.classList[2] === "rDown3"){
      const rDown2 = document.querySelector(".rDown2");
      const rDown4 = document.querySelector(".rDown4");
      if (rDown4.classList.length === 3 && rDown2.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 100000)

        if (e.target.classList.length === 3){
          setCounter(counter - 100000)
        }
      }
    }
    if (e.target.classList[2] === "rDown4"){
      const rDown3 = document.querySelector(".rDown3");
      if (rDown3.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 100000)

        if (e.target.classList.length === 3){
          setCounter(counter - 100000)
        }
      }
    }
    if (e.target.classList[2] === "rDown5"){
      const rDown6 = document.querySelector(".rDown6");
      if (rDown6.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 10000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 10000)
      }
    }
    if (e.target.classList[2] === "rDown6"){
      const rDown5 = document.querySelector(".rDown5");
      const rDown7 = document.querySelector(".rDown7");
      if (rDown7.classList.length === 3 && rDown5.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 10000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 10000)
        }
      }
    }
    if (e.target.classList[2] === "rDown7"){
      const rDown6 = document.querySelector(".rDown6");
      const rDown8 = document.querySelector(".rDown8");
      if (rDown8.classList.length === 3 && rDown6.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 10000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000)
        }
      }
    }
    if (e.target.classList[2] === "rDown8"){
      const rDown7 = document.querySelector(".rDown7");
      if (rDown7.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 10000)

        if (e.target.classList.length === 3){
          setCounter(counter - 10000)
        }
      }
    }
    if (e.target.classList[2] === "rDown9"){
      const rDown10 = document.querySelector(".rDown10");
      if (rDown10.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 1000)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 1000)
      }
    }
    if (e.target.classList[2] === "rDown10"){
      const rDown9 = document.querySelector(".rDown9");
      const rDown11 = document.querySelector(".rDown11");
      if (rDown11.classList.length === 3 && rDown9.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 1000)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 1000)
        }
      }
    }
    if (e.target.classList[2] === "rDown11"){
      const rDown10 = document.querySelector(".rDown10");
      const rDown12 = document.querySelector(".rDown12");
      if (rDown12.classList.length === 3 && rDown10.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 1000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000)
        }
      }
    }
    if (e.target.classList[2] === "rDown12"){
      const rDown11 = document.querySelector(".rDown11");
      if (rDown11.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 1000)

        if (e.target.classList.length === 3){
          setCounter(counter - 1000)
        }
      }
    }
    if (e.target.classList[2] === "greenDown1"){
      const greenDown2 = document.querySelector(".greenDown2");
      if (greenDown2.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 100)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 100)
      }
    }
    if (e.target.classList[2] === "greenDown2"){
      const greenDown1 = document.querySelector(".greenDown1");
      const greenDown3 = document.querySelector(".greenDown3");
      if (greenDown3.classList.length === 3 && greenDown1.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 100)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 100)
        }
      }
    }
    if (e.target.classList[2] === "greenDown3"){
      const greenDown2 = document.querySelector(".greenDown2");
      const greenDown4 = document.querySelector(".greenDown4");
      if (greenDown4.classList.length === 3 && greenDown2.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 100)

        if (e.target.classList.length === 3){
          setCounter(counter - 100)
        }
      }
    }
    if (e.target.classList[2] === "greenDown4"){
      const greenDown3 = document.querySelector(".greenDown3");
      if (greenDown3.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 100)

        if (e.target.classList.length === 3){
          setCounter(counter - 100)
        }
      }
    }
    if (e.target.classList[2] === "greenDown5"){
      const greenDown6 = document.querySelector(".greenDown6");
      if (greenDown6.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 10)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 10)
      }
    }
    if (e.target.classList[2] === "greenDown6"){
      const greenDown5 = document.querySelector(".greenDown5");
      const greenDown7 = document.querySelector(".greenDown7");
      if (greenDown7.classList.length === 3 && greenDown5.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 10)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 10)
        }
      }
    }
    if (e.target.classList[2] === "greenDown7"){
      const greenDown6 = document.querySelector(".greenDown6");
      const greenDown8 = document.querySelector(".greenDown8");
      if (greenDown8.classList.length === 3 && greenDown6.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 10)

        if (e.target.classList.length === 3){
          setCounter(counter - 10)
        }
      }
    }
    if (e.target.classList[2] === "greenDown8"){
      const greenDown7 = document.querySelector(".greenDown7");
      if (greenDown7.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 10)

        if (e.target.classList.length === 3){
          setCounter(counter - 10)
        }
      }
    }
    if (e.target.classList[2] === "greenDown9"){
      const greenDown10 = document.querySelector(".greenDown10");
      if (greenDown10.classList.length === 3){
        e.target.classList.toggle("flipup-r1")
        setCounter(counter + 1)
      }
      if (e.target.classList.length === 3){
        setCounter(counter - 1)
      }
    }
    if (e.target.classList[2] === "greenDown10"){
      const greenDown9 = document.querySelector(".greenDown9");
      const greenDown11 = document.querySelector(".greenDown11");
      if (greenDown11.classList.length === 3 && greenDown9.classList.item(3) === "flipup-r1"){
        e.target.classList.toggle("flipup-r2")
        setCounter(counter + 1)
        
        if (e.target.classList.length === 3){
          setCounter(counter - 1)
        }
      }
    }
    if (e.target.classList[2] === "greenDown11"){
      const greenDown10 = document.querySelector(".greenDown10");
      const greenDown12 = document.querySelector(".greenDown12");
      if (greenDown12.classList.length === 3 && greenDown10.classList.item(3) === "flipup-r2"){
        e.target.classList.toggle("flipup-r3")
        setCounter(counter + 1)

        if (e.target.classList.length === 3){
          setCounter(counter - 1)
        }
      }
    }
    if (e.target.classList[2] === "greenDown12"){
      const greenDown11 = document.querySelector(".greenDown11");
      if (greenDown11.classList.item(3) === "flipup-r3"){
        e.target.classList.toggle("flipup-r4")
        setCounter(counter + 1)

        if (e.target.classList.length === 3){
          setCounter(counter - 1)
        }
      }
    }
  }

  return (
    <div className='main-nepo'>
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
                <a href='https://www.youtube.com/watch?v=eK1ePA6oyoM&t=1s'><h4>¿Cómo se usa?</h4></a>
              </li>
              <li>
                <a href='https://nepohual-tzintzin.com.mx/moodle/'><h4>Iniciar sesión</h4></a>
              </li>
            </ul>
          </nav>
        </div>     
      </header>
      <audio className='audio' src={golpeMaiz}/>
      <div className='nepo'>
        <div className='quadrant-1'>
          <div className='column-1'>
            
            <Grano onClick={event => {counterLogic(event)}} gray r1 className='grayUp gUp1' />
            <Grano onClick={event => {counterLogic(event)}} gray r2 className='grayUp gUp2' />
            <Grano onClick={event => {counterLogic(event)}} gray r3 className='grayUp gUp3' />

          </div>
          <div className='column-2'>

            <Grano onClick={event => {counterLogic(event)}} gray r1 className='grayUp gUp4' />
            <Grano onClick={event => {counterLogic(event)}} gray r2 className='grayUp gUp5' />
            <Grano onClick={event => {counterLogic(event)}} gray r3 className='grayUp gUp6' />
            
          </div>
        </div>
        <div className='quadrant-2'>
          <div className='column-1'>
            
            <Grano onClick={event => {counterLogic(event)}} yellow r1 className='yellowUp yUp1' />
            <Grano onClick={event => {counterLogic(event)}} yellow r2 className='yellowUp yUp2' />
            <Grano onClick={event => {counterLogic(event)}} yellow r3 className='yellowUp yUp3' />

          </div>
          <div className='column-2'>

            <Grano onClick={event => {counterLogic(event)}} yellow r1 className='yellowUp yUp4' />
            <Grano onClick={event => {counterLogic(event)}} yellow r2 className='yellowUp yUp5' />
            <Grano onClick={event => {counterLogic(event)}} yellow r3 className='yellowUp yUp6' />

          </div>
          <div className='column-3'>
            
            <Grano onClick={event => {counterLogic(event)}} yellow r1 className='yellowUp yUp7' />
            <Grano onClick={event => {counterLogic(event)}} yellow r2 className='yellowUp yUp8' />
            <Grano onClick={event => {counterLogic(event)}} yellow r3 className='yellowUp yUp9' />

          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} blue r1 className='blueUp bUp1' />
            <Grano onClick={event => {counterLogic(event)}} blue r2 className='blueUp bUp2' />
            <Grano onClick={event => {counterLogic(event)}} blue r3 className='blueUp bUp3' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} blue r1 className='blueUp bUp4' />
            <Grano onClick={event => {counterLogic(event)}} blue r2 className='blueUp bUp5' />
            <Grano onClick={event => {counterLogic(event)}} blue r3 className='blueUp bUp6' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} blue r1 className='blueUp bUp7' />
            <Grano onClick={event => {counterLogic(event)}} blue r2 className='blueUp bUp8' />
            <Grano onClick={event => {counterLogic(event)}} blue r3 className='blueUp bUp9' />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} red r1 className='blueUp rUp1' />
            <Grano onClick={event => {counterLogic(event)}} red r2 className='blueUp rUp2' />
            <Grano onClick={event => {counterLogic(event)}} red r3 className='blueUp rUp3' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} red r1 className='blueUp rUp4' />
            <Grano onClick={event => {counterLogic(event)}} red r2 className='blueUp rUp5' />
            <Grano onClick={event => {counterLogic(event)}} red r3 className='blueUp rUp6' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} red r1 className='blueUp rUp7' />
            <Grano onClick={event => {counterLogic(event)}} red r2 className='blueUp rUp8' />
            <Grano onClick={event => {counterLogic(event)}} red r3 className='blueUp rUp9' />
          </div>
        </div>
        <div className='quadrant-2'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} green r1 className='blueUp greenUp1' />
            <Grano onClick={event => {counterLogic(event)}} green r2 className='blueUp greenUp2' />
            <Grano onClick={event => {counterLogic(event)}} green r3 className='blueUp greenUp3' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} green r1 className='blueUp greenUp4' />
            <Grano onClick={event => {counterLogic(event)}} green r2 className='blueUp greenUp5' />
            <Grano onClick={event => {counterLogic(event)}} green r3 className='blueUp greenUp6' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} green r1 className='blueUp greenUp7' />
            <Grano onClick={event => {counterLogic(event)}} green r2 className='blueUp greenUp8' />
            <Grano onClick={event => {counterLogic(event)}} green r3 className='blueUp greenUp9' />
          </div>
        </div>
        
        <div className='pantalla-basico'>
          {counter}
        </div>
        
        <div className='quadrant-3 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} gray r1 className='gDown8' />
            <Grano onClick={event => {counterLogic(event)}} gray r2 className='gDown7' />
            <Grano onClick={event => {counterLogic(event)}} gray r3 className='gDown6' />
            <Grano onClick={event => {counterLogic(event)}} gray r4 className='gDown5' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} gray r1 className='gDown4' />
            <Grano onClick={event => {counterLogic(event)}} gray r2 className='gDown3' />
            <Grano onClick={event => {counterLogic(event)}} gray r3 className='gDown2'/>
            <Grano onClick={event => {counterLogic(event)}} gray r4 className='gDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} yellow r1 className='yDown12' />
            <Grano onClick={event => {counterLogic(event)}} yellow r2 className='yDown11' />
            <Grano onClick={event => {counterLogic(event)}} yellow r3 className='yDown10' />
            <Grano onClick={event => {counterLogic(event)}} yellow r4 className='yDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} yellow r1 className='yDown8' />
            <Grano onClick={event => {counterLogic(event)}} yellow r2 className='yDown7' />
            <Grano onClick={event => {counterLogic(event)}} yellow r3 className='yDown6' />
            <Grano onClick={event => {counterLogic(event)}} yellow r4 className='yDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} yellow r1 className='yDown4' />
            <Grano onClick={event => {counterLogic(event)}} yellow r2 className='yDown3' />
            <Grano onClick={event => {counterLogic(event)}} yellow r3 className='yDown2' />
            <Grano onClick={event => {counterLogic(event)}} yellow r4 className='yDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} blue r1 className='bDown12' />
            <Grano onClick={event => {counterLogic(event)}} blue r2 className='bDown11' />
            <Grano onClick={event => {counterLogic(event)}} blue r3 className='bDown10' />
            <Grano onClick={event => {counterLogic(event)}} blue r4 className='bDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} blue r1 className='bDown8' />
            <Grano onClick={event => {counterLogic(event)}} blue r2 className='bDown7' />
            <Grano onClick={event => {counterLogic(event)}} blue r3 className='bDown6' />
            <Grano onClick={event => {counterLogic(event)}} blue r4 className='bDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} blue r1 className='bDown4' />
            <Grano onClick={event => {counterLogic(event)}} blue r2 className='bDown3' />
            <Grano onClick={event => {counterLogic(event)}} blue r3 className='bDown2' />
            <Grano onClick={event => {counterLogic(event)}} blue r4 className='bDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} red r1 className='rDown12' />
            <Grano onClick={event => {counterLogic(event)}} red r2 className='rDown11' />
            <Grano onClick={event => {counterLogic(event)}} red r3 className='rDown10' />
            <Grano onClick={event => {counterLogic(event)}} red r4 className='rDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} red r1 className='rDown8' />
            <Grano onClick={event => {counterLogic(event)}} red r2 className='rDown7' />
            <Grano onClick={event => {counterLogic(event)}} red r3 className='rDown6' />
            <Grano onClick={event => {counterLogic(event)}} red r4 className='rDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} red r1 className='rDown4' />
            <Grano onClick={event => {counterLogic(event)}} red r2 className='rDown3' />
            <Grano onClick={event => {counterLogic(event)}} red r3 className='rDown2' />
            <Grano onClick={event => {counterLogic(event)}} red r4 className='rDown1' />
          </div>
        </div>
        <div className='quadrant-4 bottom'>

          <div className='column-1'>
            <Grano onClick={event => {counterLogic(event)}} green r1 className='greenDown12' />
            <Grano onClick={event => {counterLogic(event)}} green r2 className='greenDown11' />
            <Grano onClick={event => {counterLogic(event)}} green r3 className='greenDown10' />
            <Grano onClick={event => {counterLogic(event)}} green r4 className='greenDown9' />
          </div>
          <div className='column-2'>
            <Grano onClick={event => {counterLogic(event)}} green r1 className='greenDown8' />
            <Grano onClick={event => {counterLogic(event)}} green r2 className='greenDown7' />
            <Grano onClick={event => {counterLogic(event)}} green r3 className='greenDown6' />
            <Grano onClick={event => {counterLogic(event)}} green r4 className='greenDown5' />
          </div>
          <div className='column-3'>
            <Grano onClick={event => {counterLogic(event)}} green r1 className='greenDown4' />
            <Grano onClick={event => {counterLogic(event)}} green r2 className='greenDown3' />
            <Grano onClick={event => {counterLogic(event)}} green r3 className='greenDown2' />
            <Grano onClick={event => {counterLogic(event)}} green r4 className='greenDown1' />
          </div>
        </div>
      </div>
    </>
    : <MenuBienvenida/>}
    </div>
  );
};
export default NepoBasico;