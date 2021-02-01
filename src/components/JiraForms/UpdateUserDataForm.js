import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sgaJiraUserManagementUpdateUserBtn } from '../../redux/actions/sagaActions/JiraUserManagementSagaActions';

export default function UpdateUserDataForm(props) {

    const { userData } = useSelector(state => state.JiraUserManagementReducer);

    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState({
        id: `${userData?.userId}`,
        passWord: '',
        name: `${userData?.name}`,
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setUpdateData({
            ...updateData, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sgaJiraUserManagementUpdateUserBtn(updateData));
    };

    return (
        <form className="row container-fluid w-75 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3 col-6">
                <label className="form-label">User ID</label>
                <input type="text" defaultValue={userData?.userId} disabled className="form-control" />
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" disabled defaultValue="default@email.com" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Password</label>
                <input type="password" name="passWord" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Phone number</label>
                <input type="text" name="phoneNumber" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Full name</label>
                <input type="text" name="name" defaultValue={userData?.name} className="form-control" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary col-3 mt-2" onSubmit={handleSubmit}>Update User Info</button>
        </form>
    )
}
