import styled from 'styled-components';

export const SideButton = styled.button`
    box-shadow: 0px 3px 6px #0000002c;
    border: 2px solid #00ceff;
    border-radius: 7px;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
    font-size: 1em;
    font-weight: bold;
    margin: 7px auto;
    padding: 5px;
    &:hover {
        background-color: #00ceff;
        color: #012038;
    }
`;
