import React, {useState} from 'react';
import styles from './Principal.module.css';
import '../App.css';
import logoNepo from '../assets/img/logo_nepo.png'
import jesus from '../assets/img/jesus.jpg'
import estefania from '../assets/img/estefania.jpg'
import gaspar from '../assets/img/gaspar.jpg'
import MenuBienvenida from './MenuBienvenida';

const Principal = () => {
  const [showMain, hideMain] =useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <>
    {showMain === false ?
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    
      <header className="encabezado">
        <div className="contentHeader">
          
          <img src={logoNepo} className="logoNepo" alt="Logo Nepo App"></img>
          
          <nav className="menu">
            <ul className={`column ${isOpen && "open"}`}>
              <li className="row">
                <a href='#inicio' className="link">INICIO</a>
              </li>
              <li className="row">
                <a href='#acercade' className="link">ACERCA DE</a>
              </li>
              <li className="row">
                <a href='#comoseusa' className="link">COMO SE USA</a>
              </li>
              <li className="row">
                <a href='#beneficios' className="link">BENEFICIOS</a>
              </li>
              <li className="row">
                <a href='#nosotros' className="link">NOSOTROS</a>
              </li>
              <li className="row">
                <a href='#contacto' className="link">CONTACTO</a>
              </li>
              <li className="row">
                <a href='https://nepohual-tzintzin.com.mx/moodle/' className="link">EDUNEPO</a>
              </li>
            </ul>

            <div className={`navToggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          
        </div>
      </header>
      <section className={styles.inicio} id='inicio'>
        <div className={styles.contentInicio}>
          <p className={styles.bienvenida}>BIENVENIDOS</p>
          <h1>Nepohualtzintzin</h1>
          <p className={styles.descripcion}>
          «Ne», que significa «persona», «pohual o pohualli», que significa «cuenta» y «tzintzin», que significa «trascender». 
          El significado de la palabra nepohualtzintzin entonces es «la persona que tiene el conocimiento de la cuenta de la 
          simplicidad para trascender».
          </p>
          <button onClick={() => hideMain(true)}>Ir a Nepohualtzintzin</button>
        </div>
      </section>

      <section className={styles.acercade} id='acercade'>
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
              src="https://www.youtube.com/embed/hAguW0j1pbE?autoplay=1&muted=1" loading="lazy" title="México: El ombligo de la Luna | cortometraje completo | Gabriel Retes" 
              frameborder="0" llow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen>
            </iframe>
            <p> Cortometraje "México: El ombligo de la luna" por Gabriel Retes. Extraído de: https://youtu.be/hAguW0j1pbE</p> 
          </div>
        </div>
      </section>

      <section className={styles.comoseusa} id='comoseusa'>
        <div className={styles.row1}>
          <h1>¿CÓMO SE USA?</h1>
          <p>En está galería de videos se encuentra toda la ayuda que necesitas para aprender a sumar, restar, multiplicar y dividir con el Nepohualtzintzin.</p>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-plus"></i> Suma</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/2aijAaT-jXo" title="Video de suma con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/gqZFPyQUmB0" title="Video de suma con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/N4GJxXh0PNc" title="Video de suma con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-minus"></i> Resta</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/ZcsI7k3oPIU" title="Resta Indirecta nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/tWcTX4xKPqk" title="Video de resta con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/5jMJlDltaJA" title="Video de resta con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-xmark"></i> Multiplicación</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/zoHjhHa5tXY" title="Video de Multiplicacion con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/2CINBskt2sI" title="Video de Multiplicacion con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/KGmOyZz3FXY" title="Video de Multiplicacion con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-divide"></i> División</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/26tL8CpbDek" title="Video de division con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/LJf0wJG5JV8" title="Video de division con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/bdSOYGOytvU" title="Video de division con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className={styles.beneficios} id='beneficios'>
        <h3 className={styles.titleBeneficios}>BENEFICIOS</h3>
        <div className={styles.rowBeneficios}>
          <div className={styles.boxBeneficio}>
            <h4>Razonamiento lógico-matemático</h4>
            <hr/>
              <ul clasName="servicios-tag"></ul>   
              <p>Es la capacidad que se tiene, o no, de mirar los números, entenderlos y saber cómo poder hacer operaciones con ellos.</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>Habilidades del pensamiento</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>Es la capacidad y disposición para el desarrollo de procesos mentales, que contribuyan a la resolución de problemas de la cotidianidad.</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>Coordinación oculo-manual</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>Es la capacidad de coordinar el movimiento de las manos con la información visual.</p>
          </div>
        </div>
        <div className={styles.rowBeneficios}>
          <div className={styles.boxBeneficio}>
            <h4>Coordinación motriz-fina</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>Es la coordinación de músculos, huesos y nervios para producir movimientos pequeños y precisos. </p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>Resolución de problemas</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>La capacidad para identificar un problema, tomar medidas lógicas para encontrar una solución deseada, y supervisar y evaluar la implementación de tal solución.</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>Memoria</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>La memoria es la capacidad mental que posibilita a un sujeto registrar, conservar y evocar las experiencias (ideas, imágenes, acontecimientos, sentimientos, etc. ).</p>
          </div>
        </div>
      </section>

      <section className={styles.nosotros} id='nosotros'>
        <h1>Nosotros</h1>
        <div className={styles.rowTeam}>
          <div className={styles.member}>
            <img src={jesus} alt="Programador de Nepo App para la Web"/>
            <h2>Jesús Morán</h2>
            <p>Programador</p>
          </div>
          <div className={styles.member}>
            <img src={estefania} alt="Diseñadora para la web Nepohualtzintzin"/>
            <h2>Paola Estefanía</h2>
            <p>Diseñador web</p>
          </div>
          <div className={styles.member}>
            <img src={gaspar} alt="Asesor de Proyecto para la Web y Nepohualtzintzin Digital"/>
            <h2>Dr. Gaspar García</h2>
            <p>Asesor de proyecto</p>
          </div>
        </div>
      </section>
      
      <section className={styles.contacto} id='contacto'>
        <h3>Contáctanos ahora</h3>
        <div className={styles.contentForm}>
          <form action="https://formsubmit.co/nepohualtzintzin91@gmail.com" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
            <div className={styles.rowForm1}>
            <input type="text" name="name" class="form-control" id="name" placeholder="Nombre completo" data-rule="minlen:4" data-msg="Introduce al menos 4 caracteres."/>
            <input type="email" class="form-control" name="email" id="email" placeholder="Correo electronico" data-rule="email" data-msg="Ingresa un correo valido."/>
            </div>
            <div className={styles.rowForm2}>
              <input type="text" class="form-control" name="phone" id="phone" placeholder="Número de telefono" data-rule="minlen:4" data-msg="Introduce al menos 4 caracteres,"/>
            </div>
            <div className={styles.rowForm2}>
              <input type="text" class="form-control" name="message" id="mesagge" placeholder="Mensaje..." data-rule="minlen:4" data-msg="Escribe un mensaje, recomendación o duda."/>
            </div>
          </form>
          <button className={styles.btnEnviar} type="submit">Enviar</button>
        </div>
      </section>
      </>
    : <MenuBienvenida/>
    }
    </>
  );
}

export default Principal;