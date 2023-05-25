import styled, {css} from 'styled-components';
import grayUp from '../../assets/img/grisArriba.svg';
import yellowUp from '../../assets/img/amarilloArriba.svg';
import blueUp from '../../assets/img/azulArriba.svg';
import redUp from '../../assets/img/rojoArriba.svg';
import greenUp from '../../assets/img/verdeArriba.svg';
import grayMobile from '../../assets/img/grisArribaMovil.svg';
import yellowMobile from '../../assets/img/amarilloArribaMovil.svg';
import blueMobile from '../../assets/img/azulArribaMovil.svg';
import redMobile from '../../assets/img/rojoArribaMovil.svg';
import greenMobile from '../../assets/img/verdeArribaMovil.svg';
import grayVertical from '../../assets/img/grisVertical.svg';
import yellowVertical from '../../assets/img/amarilloVertical.svg';
import blueVertical from '../../assets/img/azulVertical.svg';
import redVertical from '../../assets/img/rojoVertical.svg';
import greenVertical from '../../assets/img/verdeVertical.svg';



const Grano = styled.div`
  width: 56px;
  height: 67px;
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;

  ${props =>  props.gray && css`background: url(${grayUp});

  @media (max-width: 420px) {
    background: url(${grayVertical});
    width: 21px;
    height: 26px;
  }

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${grayMobile});
    width: 35px;
    height: 42px;
  }

  @media (min-width: 768px) and (orientation: portrait ) {
    background: url(${grayMobile});
    width: 35px;
    height: 42px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    background: url(${grayMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.yellow && css`background: url(${yellowUp});

  @media (max-width: 420px) {
    background: url(${yellowVertical});
    width: 21px;
    height: 25px;
  }

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${yellowMobile});
    width: 35px;
    height: 42px;
  }

  @media (min-width: 768px) and (orientation: portrait ){
    background: url(${yellowMobile});
    width: 35px;
    height: 42px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    background: url(${yellowMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.blue && css`background: url(${blueUp});
  
  @media (max-width: 420px) {
    background: url(${blueVertical});
    width: 20px;
    height: 26px;
  }

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${blueMobile});
    width: 35px;
    height: 42px;
  }

  @media (min-width: 768px) and (orientation: portrait ){
    background: url(${blueMobile});
    width: 35px;
    height: 42px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    background: url(${blueMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.red && css`background: url(${redUp});

  @media (max-width: 420px) {
    background: url(${redVertical});
    width: 21px;
    height: 26px;
  }

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${redMobile});
    width: 35px;
    height: 42px;
  }

  @media (min-width: 768px) and (orientation: portrait ){
    background: url(${redMobile});
    width: 35px;
    height: 42px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    background: url(${redMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.green && css`background: url(${greenUp});
  
  @media (max-width: 420px) {
    background: url(${greenVertical});
    width: 21px;
    height: 26px;
  }
  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${greenMobile});
    width: 35px;
    height: 42px;
  }

  @media (min-width: 768px) and (orientation: portrait ){
    background: url(${greenMobile});
    width: 35px;
    height: 42px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    background: url(${greenMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.r1 && css` position: absolute; top: 15px;
  
  @media (max-width: 420px) {
    top: 10px;
  }

    @media (max-width: 916px) and (orientation: landscape ) {
      top: 5px;
    }

    @media (min-width: 768px) and (orientation: portrait ) {
      top: 5px;
    }

    @media (max-width: 1024px) and (orientation:landscape) {
      top: 5px;
    }
  `};

  ${props =>  props.r2 && css`
    position: absolute;
    top: 63px;
    
    @media (max-width: 420px) {
      top: 30px;
    }

    @media (max-width: 916px) and (orientation: landscape ) {
      top: 34px;
    }

    @media (min-width: 768px) and (orientation: portrait ) {
      top: 34px;
    }

    @media (max-width: 1024px) and (orientation:landscape) {
      top: 34px;
    }
  `};

  ${props =>  props.r3 && css`
    position: absolute;
    top: 111px;
    
    @media (max-width: 420px) {
      top: 52px;
    }

    @media (max-width: 916px) and (orientation: landscape ) {
      top: 62px;
    }

    @media (min-width: 768px) and (orientation: portrait ) {
      top: 62px;
    }

    @media (max-width: 1024px) and (orientation:landscape) {
      top: 62px;
    }
  `};

  ${props =>  props.r4 && css`
    position: absolute;
    top: 159px;
    
    @media (max-width: 420px) {
      top: 72px;
    }

    @media (max-width: 916px) and (orientation: landscape ) {
      top: 90px;
    }

    @media (min-width: 768px) and (orientation: portrait ) {
      top: 90px;
    }

    @media (max-width: 1024px) and (orientation:landscape) {
      top: 90px;
    }
  `};

`;

export default Grano;