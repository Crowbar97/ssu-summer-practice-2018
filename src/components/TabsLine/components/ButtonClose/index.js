import styled from 'styled-components';
import RowCC from 'global-styles/FlexBoxModels/RowCC';

export default styled.div`
      ${RowCC}
      color: #e4545a;
      :hover {
            cursor: pointer;
            transform: scale(1.25);
      }
      margin-left: 1em;
      transition: transform .25s;
`;