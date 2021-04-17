import React, { useState, useEffect } from 'react';
import PageLayout from '../PageLayout/PageLayout';
import Loader from '../Loader/loader';
import axios from 'axios';
import HomePage from './Homepage';

const index = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:8000/api/auth/user')
            .then(response => {
                setIsLogin(true);
            })
            .catch(err => {
                console.log("lol");
            })
    }, []);
    let pageView =
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Loader />
        </div>
    if (isLogin === true) {
        pageView = (
            <PageLayout {...props}>
                <HomePage />
            </PageLayout>
        );
    }
    return (
        pageView
    );
}

export default index;
