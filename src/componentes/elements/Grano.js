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
import greenDown from '../../assets/img/verde-Abajo.svg';
// TERMINOS

/* 
  r1-fila1
*/
const Grano = styled.div`
  width: 56px;
  height: 67px;
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
  
  ${props => props.gray && css`
    background-image: url(${grayUp});
  `}

  ${props => props.grayDown && css`
    background-image: url(${grayDown});
  `}

  ${props => props.yellow && css`
    background-image: url(${yellowUp});
  `}

  ${props => props.yellowDown && css`
    background-image: url(${yellowDown});
  `}

  ${props => props.blue && css`
    background-image: url(${blueUp});
  `}

  ${props => props.blueDown && css`
    background-image: url(${blueDown});
  `}

  ${props => props.red && css`
    background-image: url(${redUp});
  `}

  ${props => props.redDown && css`
    background-image: url(${redDown});
  `}

  ${props => props.green && css`
    background-image: url(${greenUp});
  `}

  ${props => props.greenDown && css`
    background-image: url(${greenDown});
  `}

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