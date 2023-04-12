import styled, {css} from 'styled-components';
import grayUp from '../../assets/img/grisArriba.svg';
import yellowUp from '../../assets/img/amarilloArriba.svg';
import blueUp from '../../assets/img/azulArriba.svg';
import redUp from '../../assets/img/rojoArriba.svg';
import greenUp from '../../assets/img/verdeArriba.svg';

const Grano = styled.div`
  width: 56px;
  height: 67px;
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;

  ${props =>  props.gray && css`background: url(${grayUp});`};

  ${props =>  props.yellow && css`background: url(${yellowUp});`};

  ${props =>  props.blue && css`background: url(${blueUp});`};

  ${props =>  props.red && css`background: url(${redUp});`};

  ${props =>  props.green && css`background: url(${greenUp});`};

  ${props =>  props.r1 && css` position: absolute; top: 15px;`};

  ${props =>  props.r2 && css`
    position: absolute;
    top: 63px;
    
  `};

  ${props =>  props.r3 && css`
    position: absolute;
    top: 111px;
    
  `};

  ${props =>  props.r4 && css`
    position: absolute;
    top: 159px;
    
  `};

`;

export default Grano;