import React, { useEffect } from 'react';
import { Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { sgaJiraManagementGetAllUserArr, sgaJiraUserManagementDeleteUserBtn } from '../../redux/actions/sagaActions/JiraUserManagementSagaActions';
import UpdateUserDataForm from '../JiraForms/UpdateUserDataForm';
import { actJiraUserManagementEitUserBtn, actJiraUserManagementPushUserDataToRedux } from '../../redux/actions/normalActions/JiraUserManagementActions';

export default function JiraUserManagementTable(props) {

  const dispatch = useDispatch();

  const { allUserArr } = useSelector(state => state.JiraUserManagementReducer);

  useEffect(() => {
    dispatch(sgaJiraManagementGetAllUserArr());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: avatar => <img className="img-fluid rounded-circle" style={{ height: 40 }} src={avatar} alt={avatar} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: name => name.length < 5 ? <Tag color="blue">{name}</Tag> : <Tag color="gold">{name}</Tag>
    },
    {
      title: 'Phone No.',
      key: 'phone',
      dataIndex: 'phone',
      render: phone => (
        <>
          Wait for backend
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <button className="btn btn-outline-primary btn-sm" onClick={() => {
            dispatch(actJiraUserManagementEitUserBtn(<UpdateUserDataForm />));
            dispatch(actJiraUserManagementPushUserDataToRedux(record));
          }}>
            Edit
          </button>
          <button className="btn btn-outline-danger btn-sm ms-2" onClick={() => dispatch(sgaJiraUserManagementDeleteUserBtn(record.userId))}>
            Delete
          </button>
        </>
      ),
    },
  ];

  const data = allUserArr;

  return (
    <>
      <Table columns={columns} dataSource={data} rowKey={'userId'} />
    </>
  )
}
