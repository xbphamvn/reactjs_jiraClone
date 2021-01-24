import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actClickEditBtnProjectItem, actPushProjectItemDataToRedux, sgaAddMemberToProjectOnSearch, sgaAssignMemberToProject, sgaClickedYesDeleteButton, sgaGetAllProjectApi } from '../../redux/actions/JiraCloneActions';
import { Table, Button, Space, Tag, Avatar, Popover, AutoComplete } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import UpdateProjectForm from '../../components/JiraForms/UpdateProjectForm';
import JiraManagementRemoveUserProject from '../../components/JiraManagement/JiraManagementRemoveUserProject';
import { NavLink } from 'react-router-dom';
import { JIRA_PATH_PROJECT_MANAGEMENT_PROJECT_ITEM_LINK } from '../../utils/constants/globalConsts';

export default function JiraProjectManagement(props) {

    const { allProjectArr, addMemberResArr } = useSelector(state => state.JiraProjectManagementReducer);

    const dispatch = useDispatch();

    const searchRef = useRef(null);

    useEffect(() => {
        dispatch(sgaGetAllProjectApi());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });

    const [value, setValue] = useState('');

    const handleChange = (pagination, filters, sorter) => {
        // console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    // eslint-disable-next-line no-unused-vars
    let { sortedInfo, filteredInfo } = state;
    // sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            // onFilter: (value, record) => record.id.includes(value),
            sorter: (a, b) => a.id - b.id,
            sortDirections: ['descend']
        },
        {
            title: 'projectName',
            key: 'projectName',
            render: (text, record, index) => ((
                <NavLink to={JIRA_PATH_PROJECT_MANAGEMENT_PROJECT_ITEM_LINK + record.id}>{record.projectName}</NavLink>
            )),
            sorter: (a, b) => a.projectName.toLowerCase() < b.projectName.toLowerCase(),
            sortDirections: ['descend']
            // ellipsis: true,
        },
        {
            title: 'categoryName',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'creator',
            dataIndex: 'creator',
            key: 'creator',
            render: (text, record, index) => (
                <Tag color="orange">{record.creator.name}</Tag>
            )
        },
        {
            title: 'member',
            dataIndex: 'creator',
            key: 'creator',
            render: (text, record, index) => (
                <>
                    <Avatar.Group maxCount={3} size="large" maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        {record.members.map((mem, index) => ((
                            <Popover placement="bottom" title={'Member list'} content={<JiraManagementRemoveUserProject record={record} member={mem} />} key={index}>
                                <Avatar src={mem.avatar} />
                            </Popover>
                        )))}
                    </Avatar.Group>
                    <Popover placement="rightTop" title="Add member" content={() => (
                        <AutoComplete style={{ width: '100%' }}
                            onSearch={(value) => {
                                if (searchRef.current) {
                                    clearTimeout(searchRef.current);
                                }
                                searchRef.current = setTimeout(() => { dispatch(sgaAddMemberToProjectOnSearch(value))}, 300);
                            }}
                            options={addMemberResArr?.map((item, index) => ({ label: item.name, value: item.userId.toString() }))}
                            value={value}
                            onSelect={(value, option) => {
                                dispatch(sgaAssignMemberToProject({ projectId: record.id, userId: Number(value) }));
                                setValue(option.label);
                            }}
                            onChange={(inputText) => setValue(inputText)}
                        />
                    )} trigger="click">
                        <Avatar icon={<PlusOutlined style={{ fontSize: 20, verticalAlign: 0, marginLeft: 0, cursor: 'pointer' }} />} />
                    </Popover>
                </>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space middle="true">
                    <EditOutlined className="btn btn-sm btn-primary" onClick={() => {
                        dispatch(actClickEditBtnProjectItem(<UpdateProjectForm />));
                        dispatch(actPushProjectItemDataToRedux(record));
                    }} />
                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={() => {
                            dispatch(sgaClickedYesDeleteButton(record.id));
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined className="btn btn-sm btn-danger" />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <h3>Project Dashboard</h3>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} rowKey={'id'} dataSource={allProjectArr} onChange={handleChange} />
        </>
    )
}
