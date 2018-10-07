import styled from 'styled-components';
import RowCC from 'global-styles/FlexBoxModels/RowCC';

export default styled.li`
      ${RowCC}
      width: 160px;
      border-right: 1px solid #dedfdf;
      cursor: pointer;
      background: ${props => props.isActive ? "#f2f2f2" : "white"};
`;