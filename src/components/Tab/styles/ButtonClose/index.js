import styled from 'styled-components';
import RowCC from 'global-styles/FlexBoxModels/RowCC';

export default styled.div`
      ${RowCC}
      color: #e4545a;
      margin-left: 1em;
      transition: transform .25s;
      ${props => props.isHidden ? "transform: scale(0);"
      : ":hover \{ transform: scale(1.25); \}"};
`;