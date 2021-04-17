import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import FlexBox from '../FlexBox/index';

const { Sider } = Layout;

export const SideNav = styled(Sider).attrs({
    className: 'side-nav',
    width: 200,
})`
    font-size: 1rem;
`;

export const StyledLink = styled(Link)`
    color: #fff;

    &:hover {
        color: #fff;
    }
`;

export const NavLink = styled(FlexBox)`
    justify-content: ${({ justify }) => justify || 'start'};
    border-radius: 25px;
    border: ${({ active }) => (active ? '2px solid #fff' : 'none')};
    height: ${({ height }) => height || '3.2em'};
    padding: 0em 0.8em;
    font-size: 0.8em;
    background-color: ${({ active }) =>
        active ? 'rgba(255, 255, 255, .1) ' : 'none'};
`;

export const LinkContainer = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 20px;

    &:not(:first-child) {
        margin-top: 20px;
    }
`;

export const ItemCount = styled.div`
    background: #00ceff;
    color: #012038;
    font-weight: bold;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
`;

export const Title = styled.div`
    color: #fff;
    padding: 0px 10px;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const StyledButton = styled.button`
    border: 2px solid #00ceff;
    border-radius: 4px;
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
    font-size: 1em;
    font-weight: bold;
    margin: 5px auto;
    padding: 10px 15px;
    &:hover {
        background-color: #00ceff;
        color: #012038;
    }
`;

export const EmptyCircle = styled(FlexBox)`
    border-radius: 50%;
    border: 2px solid #fa0073;
    height: 40px;
    width: 40px;
`;

export const LinkPayment = styled.div`
    text-align: center;
    color: #fff;
    font-size: 12px;
    margin-top: 10px;
`;
