import styled from 'styled-components';
import RowCC from 'global-styles/FlexBoxModels/RowCC';

export default styled.div`
    ${RowCC}
    width: 50px;
    border-right: 1px solid #dedfdf;
    color: #242424;
    :hover {
        background: #f7f7f7;
        cursor: pointer;
    }
`;