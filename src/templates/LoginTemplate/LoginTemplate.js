import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

export const LoginTemplate = (props) => {

    const { Component, ...restParam } = props;

    return <Route path={restParam.path} render={(propsRoute) => (
        <Layout>
            <Layout.Sider width={'50vw'} style={{height: '100vh', background: 'url("./img/jira_login/bg_universe.jpg") center', backgroundSize: 'cover'}} />
            <Layout>
                <Component {...propsRoute} />
            </Layout>
        </Layout>
    )} />
}