import styled from 'styled-components';
import { Layout } from 'antd';
import GovLogo from '../../common/images/GovLogo.png'

import FlexBox from '../FlexBox/index';

const { Header } = Layout;

export const AppHeader = styled(Header)`
    z-index: 1000;
    width: 100%;
    height: 70px;
    background-color: #012038;
    padding: 0px 40px 0px 0px;
`;

export const Wrapper = styled(FlexBox).attrs({ justify: 'space-between' })`
    height: 70px;
`;

export const LogoContainer = styled.div`
    display: table;
    width: 250px;
    height: 70xp;
`;

export const HeaderLinks = styled.div`
    display: table;

    button.links {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0px 10px;
        color: #ffffff;
    }

    .nick-name {
        display: table-cell;
        text-align: center;
        color: #ffffff;
        padding: 0px 5px;
        font-size: 1em;
    }
`;

export const Logo = styled.img.attrs({
    src: '../../common/images/GovLogo.png',
})`
    display: table-cell;
    vertical-align: middle;
    margin: 0px auto;
    height: 50px;
`;
