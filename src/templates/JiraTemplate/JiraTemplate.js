import React from 'react';
import { Route } from 'react-router-dom';

export const JiraTemplate = (props) => {

    const {Component, ...restParam} = props;

    return <Route path={restParam.path} render={(propsRoute) => (
        <>
            <Component {...propsRoute} />
        </>
    )} />
}
