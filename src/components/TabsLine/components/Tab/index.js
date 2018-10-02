import styled from 'styled-components';
import RowCC from 'global-styles/FlexBoxModels/RowCC';

export default styled.div`
      ${RowCC}
      width: 160px;
      border-right: 1px solid #dedfdf;
      background: ${props => props.active ? "#f2f2f2" : "white"};
`;