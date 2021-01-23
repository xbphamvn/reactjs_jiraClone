import {Avatar} from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { sgaRemoveMemberOfProject } from '../../redux/actions/JiraCloneActions';

export default function JiraManagementRemoveUserProject(props) {

    const dispatch = useDispatch();

    const {record, member} = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {record.members.map((item, index) => ((
                    <tr key={index}>
                        <td style={{verticalAlign: 'middle'}}>{item.userId}</td>
                        <td><Avatar size="medium" src={item.avatar} /></td>
                        <td style={{verticalAlign: 'middle'}}>{item.name}</td>
                        <td className="text-center" onClick={() => dispatch(sgaRemoveMemberOfProject({ projectId: record.id, userId: member.userId }))}>
                            <button className="btn btn-sm btn-danger">x</button>
                        </td>
                    </tr>
                )))}
            </tbody>
        </table>
    )
}
