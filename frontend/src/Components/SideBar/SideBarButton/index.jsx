import React from 'react';
import { SideButton } from './styles';

const SideBarButton = ({ text, buttonClickHandler, icon }) => {
    return (
        <SideButton onClick={buttonClickHandler}>
            {icon}
            {text}
        </SideButton>
    );
};

export default SideBarButton;
