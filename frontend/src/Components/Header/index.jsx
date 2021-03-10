import React from 'react';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import {
    Wrapper,
    IconContainer,
    LogoContainer,
    UserName,
    EmptyCircle,
} from './styles';
import GovLogo from '../../common/images/GovLogo.png'

const Header = ({
    username,
    notficationButtonHandler,
    profileButtonHandler,
}) => {
    const iconStyle = {
        color: '#ffffff',
        fontSize: '1.5em',
        margin: '0 10px',
    };
    const iconList = [
        <SearchOutlined style={iconStyle} />,
        <a href={notficationButtonHandler}>
            <BellOutlined style={iconStyle} />
        </a>,
        <a href={profileButtonHandler}>
            <EmptyCircle>
                <UserOutlined style={{ fontSize: '1em', color: '#ffffff' }} />
            </EmptyCircle>
        </a>,
    ];

    return (
        <Wrapper>
            <LogoContainer>
                <img src={GovLogo} alt="Govt. Logo" style={{ height: '70%' }} ></img>
            </LogoContainer>
            <IconContainer>
                {iconList.map(icon => {
                    return icon;
                })}
                <UserName>{username}</UserName>
            </IconContainer>
        </Wrapper>
    );
};

export default Header;
