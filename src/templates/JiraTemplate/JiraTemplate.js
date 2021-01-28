import React from 'react';
import { Route } from 'react-router-dom';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

export const JiraTemplate = (props) => {

    const { Component, ...restParam } = props;

    return <Route path={restParam.path} render={(propsRoute) => (
        <Layout style={{ minHeight: '100vh' }}>
            <MenuSideBar />
            <Layout className="site-layout">
                <Content style={{ padding: '12px 30px', backgroundColor: '#fff' }}>
                    <div className="site-layout-background" style={{ minHeight: 360 }}>
                        <Component {...propsRoute} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>Jira clone - Created by XB Pham</Footer>
            </Layout>
        </Layout>
    )} />
}
