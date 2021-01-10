import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

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
                        <NavLink to="/createproj">Create Project</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: 20, verticalAlign: 0, marginLeft: -10 }} />}>
                        Search
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <div class="sidebarMenu">
                <div class="proflile d-flex align-items-center">
                    <div class="profile__avatar">
                        <i class="fa fa-user-secret"></i>
                    </div>
                    <div class="profile__info ms-2">
                        <p class="p-0 m-0">Cyber Bugs</p>
                        <small class="p-0 m-0">Software project</small>
                    </div>
                </div>
                <nav class="sidebar__options">
                    <NavLink to="/home" activeClassName="sidebar_active" className="options__item"><i class="fa fa-id-card" /> Dash Board</NavLink>
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i class="fa fa-cog" /> Project management</NavLink>
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i class="fa fa-edit" /> Create Project</NavLink>
                    <hr />
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i class="fa fa-truck" /> Dash Board</NavLink>
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i class="fa fa-database" /> Dash Board</NavLink>
                    <NavLink to="/abc" activeClassName="sidebar_active" className="options__item"><i class="fa fa-clipboard-list" /> Dash Board</NavLink>
                </nav>
            </div>
        </>
    )
}
