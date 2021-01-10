import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { JIRA_PATH_CREATE_PROJECT, JIRA_PATH_DASH_BOARD, JIRA_PATH_PROJECT_MANAGEMENT } from '../../utils/constants/globalConsts';

export default function MenuSideBar(props) {

    const [state, setState] = useState({
        collapsed: true,
    });

    const onCollapse = (collapsed) => {
        setState({ collapsed });
    };

    return (
        <>
            <Layout.Sider theme="dark" width={200} collapsedWidth={64} collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
                <Menu theme="dark" style={{ marginTop: 50 }} mode="inline">
                    <Menu.Item key="1" icon={<PlusOutlined style={{ fontSize: 20, verticalAlign: 0, marginLeft: -10 }} />}>
                        <NavLink to="/createproject">Create Project</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: 20, verticalAlign: 0, marginLeft: -10 }} />}>
                        Search
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <div className="sidebarMenu">
                <div className="proflile d-flex align-items-center">
                    <div className="profile__avatar">
                        <i className="fad fa-user-circle" />
                    </div>
                    <div className="profile__info ms-2">
                        <p className="p-0 m-0">Jira Clone</p>
                        <small className="p-0 m-0">Reactjs project</small>
                    </div>
                </div>
                <nav className="sidebar__options">
                    <NavLink to={JIRA_PATH_DASH_BOARD} activeClassName="sidebar_active" className="options__item"><i className="fa fa-id-card" /> Dash Board</NavLink>
                    <NavLink to={JIRA_PATH_PROJECT_MANAGEMENT} activeClassName="sidebar_active" className="options__item"><i className="fa fa-cog" /> Project management</NavLink>
                    <NavLink to={JIRA_PATH_CREATE_PROJECT} activeClassName="sidebar_active" className="options__item"><i className="fa fa-edit" /> Create Project</NavLink>
                    <hr />
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i className="fa fa-truck" /> Dash Board</NavLink>
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i className="fa fa-database" /> Dash Board</NavLink>
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i className="fa fa-clipboard-list" /> Dash Board</NavLink>
                </nav>
            </div>
        </>
    )
}
