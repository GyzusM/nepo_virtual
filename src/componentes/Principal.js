import React, {useState} from 'react';
import styles from './Principal.module.css';
import '../App.css';
import logoNepo from '../assets/img/logo_nepo.png';
import jesus from '../assets/img/jesus.jpg';
import estefania from '../assets/img/estefania.jpg';
import gaspar from '../assets/img/gaspar.jpg';
import mex from '../assets/img/mexico_flag.png';
import usa from '../assets/img/usa_flag.png';
import MenuBienvenida from './MenuBienvenida';
import { useTranslation } from 'react-i18next';

const Principal = () => {
  const [t, i18n] = useTranslation("global");
  const [showMain, hideMain] =useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
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
                <a href='#inicio' className="link">{t("menu.inicio")}</a>
              </li>
              <li className="row">
                <a href='#acercade' className="link">{t("menu.acercade")}</a>
              </li>
              <li className="row">
                <a href='#comoseusa' className="link">{t("menu.comoseusa")}</a>
              </li>
              <li className="row">
                <a href='#beneficios' className="link">{t("menu.beneficios")}</a>
              </li>
              <li className="row">
                <a href='#nosotros' className="link">{t("menu.nosotros")}</a>
              </li>
              <li className="row">
                <a href='#contacto' className="link">{t("menu.contacto")}</a>
              </li>
              <li className="row">
                <a href='https://nepohual-tzintzin.com.mx/moodle/' className="link">EDUNEPO</a>
              </li>
              <li className="row">
                <button onClick={() => handleChangeLanguage("en")} className='btn-idioma'><img src={usa} alt='USA flag'/></button>
                <button onClick={() => handleChangeLanguage("es")} className='btn-idioma'><img src={mex} alt='MX flag'/></button>
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
          <p className={styles.bienvenida}>{t("inicio.bienvenida")}</p>
          <h1>Nepohualtzintzin</h1>
          <p className={styles.descripcion}>
          {t("inicio.significado")}
          </p>
          <button onClick={() => hideMain(true)}>{t("inicio.boton")}</button>
        </div>
      </section>

      <section className={styles.acercade} id='acercade'>
        <div className={styles.contentAcercade}>
          <h2>{t("acercade.titulo")}</h2>
          <h3>NEPOHUALTZINTZIN</h3>
          <h4>{t("acercade.subtitulo")}</h4>
          <p>
          {t("acercade.contenido")}
          </p>
          <div className={styles.containerVideo}>
            <iframe 
              src="https://www.youtube.com/embed/hAguW0j1pbE?autoplay=1&muted=1" loading="lazy" title="México: El ombligo de la Luna | cortometraje completo | Gabriel Retes" 
              frameborder="0" llow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen>
            </iframe>
            <p>{t("acercade.pievideo")}</p> 
          </div>
        </div>
      </section>

      <section className={styles.comoseusa} id='comoseusa'>
        <div className={styles.row1}>
          <h1>{t("comoseusa.titulo")}</h1>
          <p>{t("comoseusa.contenido")}</p>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-plus"></i>{t("comoseusa.suma")}</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/2aijAaT-jXo" title="Video de suma con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/gqZFPyQUmB0" title="Video de suma con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/N4GJxXh0PNc" title="Video de suma con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-minus"></i>{t("comoseusa.resta")}</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/ZcsI7k3oPIU" title="Resta Indirecta nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/tWcTX4xKPqk" title="Video de resta con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/5jMJlDltaJA" title="Video de resta con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-xmark"></i>{t("comoseusa.multiplicacion")}</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/zoHjhHa5tXY" title="Video de Multiplicacion con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/2CINBskt2sI" title="Video de Multiplicacion con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/KGmOyZz3FXY" title="Video de Multiplicacion con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.title}>
            <h4><i className="fa-solid fa-divide"></i>{t("comoseusa.division")}</h4>
          </div>
          <div className={styles.contentvideos}>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/26tL8CpbDek" title="Video de division con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/LJf0wJG5JV8" title="Video de division con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width={460} height={215} src="https://www.youtube.com/embed/bdSOYGOytvU" title="Video de division con el Nepohualtzintzin" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className={styles.beneficios} id='beneficios'>
        <h3 className={styles.titleBeneficios}>{t("beneficios.titulo")}</h3>
        <div className={styles.rowBeneficios}>
          <div className={styles.boxBeneficio}>
            <h4>{t("beneficios.subtitulo1")}</h4>
            <hr/>
              <ul clasName="servicios-tag"></ul>   
              <p>{t("beneficios.contenido1")}</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>{t("beneficios.subtitulo2")}</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>{t("beneficios.contenido2")}</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>{t("beneficios.subtitulo3")}</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>{t("beneficios.contenido3")}</p>
          </div>
        </div>
        <div className={styles.rowBeneficios}>
          <div className={styles.boxBeneficio}>
            <h4>{t("beneficios.subtitulo4")}</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>{t("beneficios.contenido4")}</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>{t("beneficios.subtitulo5")}</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>{t("beneficios.contenido5")}</p>
          </div>
          <div className={styles.boxBeneficio}>
            <h4>{t("beneficios.subtitulo6")}</h4>
            <hr/>
            <ul className="servicios-tag"></ul>
            <p>{t("beneficios.contenido6")}</p>
          </div>
        </div>
      </section>

      <section className={styles.nosotros} id='nosotros'>
        <h1>{t("nosotros.titulo")}</h1>
        <div className={styles.rowTeam}>
          <div className={styles.member}>
            <img src={jesus} alt="Programador de Nepo App para la Web"/>
            <h2>Jesús Morán</h2>
            <p>{t("nosotros.descripcion1")}</p>
          </div>
          <div className={styles.member}>
            <img src={estefania} alt="Diseñadora para la web Nepohualtzintzin"/>
            <h2>Paola Estefanía</h2>
            <p>{t("nosotros.descripcion2")}</p>
          </div>
          <div className={styles.member}>
            <img src={gaspar} alt="Asesor de Proyecto para la Web y Nepohualtzintzin Digital"/>
            <h2>Dr. Gaspar García</h2>
            <p>{t("nosotros.descripcion3")}</p>
          </div>
        </div>
      </section>
      
      <section className={styles.contacto} id='contacto'>
        <h3>{t("contacto.titulo")}</h3>
        <div className={styles.contentForm}>
          <form action="https://formsubmit.co/nepohualtzintzin91@gmail.com" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
            <div className={styles.rowForm1}>
            <input type="text" name="name" class="form-control" id="name" placeholder={t("contacto.input1")} data-rule="minlen:4" data-msg="Introduce al menos 4 caracteres."/>
            <input type="email" class="form-control" name="email" id="email" placeholder={t("contacto.input2")} data-rule="email" data-msg="Ingresa un correo valido."/>
            </div>
            <div className={styles.rowForm2}>
              <input type="text" class="form-control" name="phone" id="phone" placeholder={t("contacto.input3")} data-rule="minlen:4" data-msg="Introduce al menos 4 caracteres,"/>
            </div>
            <div className={styles.rowForm2}>
              <input type="text" class="form-control" name="message" id="mesagge" placeholder={t("contacto.input4")} data-rule="minlen:4" data-msg="Escribe un mensaje, recomendación o duda."/>
            </div>
          </form>
          <button className={styles.btnEnviar} type="submit">{t("contacto.boton")}</button>
        </div>
      </section>
      </>
    : <MenuBienvenida/>
    }
    </>
  );
}

export default Principal;