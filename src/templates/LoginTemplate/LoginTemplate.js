import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

export const LoginTemplate = (props) => {

    const { Component, ...restParam } = props;

    return <Route path={restParam.path} render={(propsRoute) => (
        <Layout>
            <Layout.Sider width={'50vw'} style={{height: '100vh'}} />
            <Layout>
                <Component {...propsRoute} />
            </Layout>
        </Layout>
    )} />
}