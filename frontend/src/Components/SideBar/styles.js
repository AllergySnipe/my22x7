import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #012038 0% 0% no-repeat padding-box;
    height: 89vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const VerticalFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5px;
`;

export const CenterContainer = styled(VerticalFlexbox)`
    align-items: center;
`;

export const Container = styled(VerticalFlexbox)`
    align-items: flex-start;
    position: relative;
`;

export const Module = styled.a`
    color: #ffffff;
    margin-right: 60px;
    font-size: 1em;
    &:hover {
        color: #ffffff;
    }
`;

export const NormalText = styled.span`
    color: #ffffff;
    margin: 0 30px;
    font-size: 1em;
    line-height: 27px;
    display: block;
    font-weight: bold;
`;

export const Resource = styled.a`
    color: #ffffff;
    margin: 5px 30px;
    font-size: 0.9em;
    &:hover {
        font-weight: bolder;
        color: #ffffff;
    }
`;

export const EmptyCircle = styled(VerticalFlexbox)`
    border-radius: 50%;
    border-color: #fa0073;
    border-style: solid;
    height: 40px;
    width: 40px;
    align-items: center;
`;

export const Placeholder = styled.span`
    background: #00ceff 0% 0% no-repeat padding-box;
    font-weight: bold;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
`;

export const BottomBorder = styled.div`
    width: 90%;
    border-bottom: 0.000002px solid #ffffff;
    margin: 7px 0;
    opacity: 0.1;
`;
