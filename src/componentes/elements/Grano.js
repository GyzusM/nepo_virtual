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

const Grano = styled.div`
  width: 56px;
  height: 67px;
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;

  ${props =>  props.gray && css`background: url(${grayUp});

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${grayMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.yellow && css`background: url(${yellowUp});

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${yellowMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.blue && css`background: url(${blueUp});
  
  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${blueMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.red && css`background: url(${redUp});

  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${redMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.green && css`background: url(${greenUp});
  
  @media (max-width: 916px) and (orientation: landscape ) {
    background: url(${greenMobile});
    width: 35px;
    height: 42px;
  }
  `};

  ${props =>  props.r1 && css` position: absolute; top: 15px;
  
    @media (max-width: 916px) and (orientation: landscape ) {
      top: 5px;
    }
  `};

  ${props =>  props.r2 && css`
    position: absolute;
    top: 63px;
    
    @media (max-width: 916px) and (orientation: landscape ) {
      top: 34px;
    }
  `};

  ${props =>  props.r3 && css`
    position: absolute;
    top: 111px;
    
    @media (max-width: 916px) and (orientation: landscape ) {
      top: 62px;
    }
  `};

  ${props =>  props.r4 && css`
    position: absolute;
    top: 159px;
    
    @media (max-width: 916px) and (orientation: landscape ) {
      top: 90px;
    }
  `};

`;

export default Grano;