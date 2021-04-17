import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import SearchData from './SearchData';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <SearchData />
        </PageLayout>
    );
}

export default index;