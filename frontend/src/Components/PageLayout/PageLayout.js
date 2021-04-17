import React from 'react';
import { Layout } from 'antd';
import Header from '../Header/index';
import SideBar from '../SideBar/index';

const { Content, } = Layout;

const resources = [
    {
        name: 'Tax Data',
        link: '#',
    },
    {
        name: 'Health Data',
        link: '#',
    },
    {
        name: 'Court Cases Data',
        link: '#',
    },
    {
        name: 'Govt. Program Data',
        link: '#',
    },
    {
        name: 'Agriculture Data',
        link: '#',
    },
];
const modules = [
    {
        name: 'Create Data Entry',
        link: '#',
        items: 0,
    },
    {
        name: 'Upload Excel file',
        link: '#',
        items: 0,
    },
    {
        name: 'Delete/Update Data',
        link: '#',
        items: 0,
    },
];


const PageLayout = (props) => {
    return (
        <Layout>
            <Header />
            <Layout>
                <SideBar />
                <Layout>
                    <Content>
                        <div className="app-content app-scroll">{props.children}</div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default PageLayout;
