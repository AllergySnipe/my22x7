import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 11vh;
    align-items: center;
    text-align: center;
    background: #012038 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    position: sticky;
`;

const FlexboxAligned = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    margin: 0 2.5%;
`;

export const IconContainer = styled(FlexboxAligned)``;

export const LogoContainer = styled(FlexboxAligned)`
    width: 60%;
`;

export const UserName = styled.div`
    text-align: center;
    box-sizing: border-box;
    color: #ffffff;
    margin: 0 5px;
    font-size: 1em;
    line-height: 2vh;
    &:hover {
        text-decoration-color: #ffffff;
        text-decoration: underline;
    }
`;

export const EmptyCircle = styled.div`
    border-radius: 50%;
    border-color: #ffffff;
    border-style: solid;
    height: 2em;
    width: 2em;
    border-width: 2px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 10px;
`;
