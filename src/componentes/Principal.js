import React from 'react';
import styles from './Principal.module.css';
import logoNepo from '../assets/img/logo_nepo.png'
const Principal = () => {
  return ( 
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    
      <header className={styles.encabezado}>
        <div className={styles.contentHeader}>
          
          <img src={logoNepo} className={styles.logoNepo}></img>
          
          <nav className={styles.menu}>
            <ul className={styles.column}>
              <li className={styles.row}>
                <a href='#' className={styles.link}>INICIO</a>
              </li>
              <li className={styles.row}>
                <a href='#' className={styles.link}>ACERCA DE</a>
              </li>
              <li className={styles.row}>
                <a href='#' className={styles.link}>COMO SE USA</a>
              </li>
              <li className={styles.row}>
                <a href='#' className={styles.link}>BENEFICIOS</a>
              </li>
              <li className={styles.row}>
                <a href='#' className={styles.link}>NOSOTROS</a>
              </li>
              <li className={styles.row}>
                <a href='#' className={styles.link}>CONTACTO</a>
              </li>
              <li className={styles.row}>
                <a href='#' className={styles.link}>EDUNEPO</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles.inicio}>
        <div className={styles.contentInicio}>
          <p className={styles.bienvenida}>BIENVENIDOS</p>
          <h1>Nepohualtzintzin</h1>
          <p className={styles.descripcion}>
          «Ne», que significa «persona», «pohual o pohualli», que significa «cuenta» y «tzintzin», que significa «trascender». 
          El significado de la palabra nepohualtzintzin entonces es «la persona que tiene el conocimiento de la cuenta de la 
          simplicidad para trascender».
          </p>
          <a href='#'>Ir a Nepohualtzintzin</a>
        </div>
      </div>
      <div className={styles.acercade}>
        <div className={styles.contentAcercade}>
          <h2>ACERCA DE</h2>
          <h3>NEPOHUALTZINTZIN</h3>
          <h4>Un abaco maya</h4>
          <p>
          Es un instrumento de cálculo de origen prehispánico cuya creación se atribuye al mundo maya, aunque se han encontrado instrumentos similares en las culturas olmeca y mexica. 
          En origen, la cuadrícula podía dibujarse en el suelo, utilizando pequeñas piedras o semillas. El número de cuentas (91) remite a los ciclos agrícolas ya que equivalen
          aproximadamente a una estación (la cuarta parte del año solar) y corresponde exactamente a la mitad del ciclo del maíz, cuyo grano emula la forma de las cuentas. Las cuentas correspondientes a 
          las cuatro filas de la parte inferior tienen valor de una unidad mientras que las tres filas superiores representan cinco unidades cada una. De derecha a izquierda, las varillas representas las unidades, decenas, centenas, unidades de millar... y así sucesivamente.
          </p>
          <div className={styles.containerVideo}>
            <iframe 
              src="https://www.youtube.com/embed/hAguW0j1pbE?autoplay=1&muted=1" title="México: El ombligo de la Luna | cortometraje completo | Gabriel Retes" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <p> Cortometraje "México: El ombligo de la luna" por Gabriel Retes. Extraído de: https://youtu.be/hAguW0j1pbE</p> 
          </div>
        </div>
        
      </div>
      <div className={styles.comoseusa}>
        <div className={styles.row1}>
          <h1>¿CÓMO SE USA?</h1>
          <p>En está galería de videos se encuentra toda la ayuda que necesitas para aprender a sumar, restar, multiplicar y dividir con el Nepohualtzintzin.</p>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            <h4><i class="fa-solid fa-plus"></i> Suma</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/2aijAaT-jXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/gqZFPyQUmB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/N4GJxXh0PNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.title}>
            <h4><i class="fa-solid fa-minus"></i> Resta</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/3937ufmAYNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/tWcTX4xKPqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/5jMJlDltaJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className={styles.row4}>
          <div className={styles.title}>
            <h4><i class="fa-solid fa-xmark"></i> Multiplicación</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/zoHjhHa5tXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/2CINBskt2sI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/KGmOyZz3FXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.title}>
            <h4><i class="fa-solid fa-divide"></i> División</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/26tL8CpbDek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/LJf0wJG5JV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/bdSOYGOytvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;