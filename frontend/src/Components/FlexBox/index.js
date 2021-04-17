import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};
`;

export default FlexBox;
