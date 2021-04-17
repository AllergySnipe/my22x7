import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import Covidpage from './Covidpage';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <Covidpage />
        </PageLayout>
    );
}

export default index;
