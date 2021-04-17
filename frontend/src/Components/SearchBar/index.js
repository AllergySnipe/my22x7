import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import SearchBar from './SearchBar';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <SearchBar />
        </PageLayout>
    );
}

export default index;