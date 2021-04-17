import React from 'react';
import govlogo from '../../common/images/GovLogo.png';
import { AppHeader, Wrapper, HeaderLinks, LogoContainer, Logo } from './styles';

const Header = () => {
    return (
        <AppHeader>
            <Wrapper>
                <LogoContainer>
                    <img src={govlogo} alt="government logo" style={{ width: "60px", height: "50px", marginLeft: "10px" }} />
                </LogoContainer>
                <h3 style={{ color: "#ffffff" }}>
                    22x7 Dashboard
                </h3>
                <HeaderLinks>
                    <div className="nick-name">
                        Sparsh
                    </div>
                </HeaderLinks>
            </Wrapper>
        </AppHeader>
    );
};

export default Header;
