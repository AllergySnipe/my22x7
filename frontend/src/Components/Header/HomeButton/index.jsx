import React from 'react';
import { HomeFilled } from '@ant-design/icons';
import { Home } from './styles';

const HomeButton = ({ buttonText, buttonClickHandler }) => {
    return (
        <Home onClick={buttonClickHandler}>
            <HomeFilled style={{ color: '#ffffff', margin: '0 12px 0 7px' }} />
            {buttonText}
        </Home>
    );
};

export default HomeButton;
