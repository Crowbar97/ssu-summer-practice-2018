import styled from 'styled-components';
import RowCC from 'global-styles/FlexBoxModels/RowCC';

export default styled.div`
      ${RowCC}
      color: #33c872;
      :hover {
            cursor: pointer;
            transform: scale(1.25);
      }
      margin-left: 1em;
      transition: transform .25s;
`;