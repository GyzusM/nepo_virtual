import styled, {css} from 'styled-components';
import grayUp from '../../assets/img/grisArriba.svg';
import yellowUp from '../../assets/img/amarilloArriba.svg';
import blueUp from '../../assets/img/azulArriba.svg';
import redUp from '../../assets/img/rojoArriba.svg';
import greenUp from '../../assets/img/verdeArriba.svg';
import grayDown from '../../assets/img/grisAbajo.svg';
import yellowDown from '../../assets/img/amarilloAbajo.svg';
import blueDown from '../../assets/img/azulAbajo.svg';
import redDown from '../../assets/img/rojoAbajo.svg';
import greenDown from '../../assets/img/verdeAbajo.svg';


// TERMINOS

const Grano = styled.div`
  width: 56px;
  height: 67px;
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;

  ${props =>  props.color === 'grayup' ? css`background: url(${grayUp});` : ''};

  ${props =>  props.color === 'graydown' ? css`background: url(${grayDown});` : ''};

  ${props =>  props.color === 'yellowup' ? css`background: url(${yellowUp});` : ''};

  ${props =>  props.color === 'yellowdown' ? css`background: url(${yellowDown});` : ''};

  ${props =>  props.color === 'blueup' ? css`background: url(${blueUp});` : ''};

  ${props =>  props.color === 'bluedown' ? css`background: url(${blueDown});` : ''};

  ${props =>  props.color === 'redup' ? css`background: url(${redUp});` : ''};

  ${props =>  props.color === 'reddown' ? css`background: url(${redDown});` : ''};

  ${props =>  props.color === 'greenup' ? css`background: url(${greenUp});` : ''};

  ${props =>  props.color === 'greendown' ? css`background: url(${greenDown});` : ''};

  ${props => props.r1 && css `
    margin-top: 15px;
  `}

  ${props => props.r2 && css `
    position: absolute;
    margin-top: 63px;
    z-index: 2;
  `}

  ${props => props.r3 && css `
    position: absolute;
    margin-top: 111px;
    z-index: 3;
  `}

  ${props => props.r4 && css `
    position: absolute;
    margin-top: 159px;
    z-index: 4;
  `}

  ${props => props.z4 && css `
    z-index: 4;
  `}

  ${props => props.z3 && css `
    z-index: 3;
  `}

  ${props => props.z2 && css `
    z-index: 2;
  `}

  ${props => props.z1 && css `
    z-index: 1;
  `}
`;

export default Grano;