import styled from 'styled-components';
import RowSC from 'global-styles/FlexBoxModels/RowSC';

export default styled.div`
      ${RowSC}
      overflow-x: scroll;
      ::-webkit-scrollbar { 
            display: none; 
      }
`;