import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSignUpForm from '../../components/JiraForms/UserSignUpForm';
import JiraUserManagementTable from '../../components/JiraUsers/JiraUserManagementTable';
import { actJiraUserManagementCreateNewUserBtn } from '../../redux/actions/normalActions/JiraUserManagementActions';

export default function JiraUserManagement(props) {

    const { userData } = useSelector(state => state.JiraUserLoginedReducer.loginedData);

    const dispatch = useDispatch();

    return (
        <>
            <div className="row text-end">
                <p className="my-0">
                    Xin chào <span className="fw-bold">{userData?.name}</span>
                    <span className="col-1 userManagement__header">
                        <img className="rounded-circle ms-2" src={userData?.avatar} alt={userData?.avatar} />
                        <i className="fad fa-caret-square-down fs-3 ms-2" />
                    </span>
                </p>
            </div>
            <hr />
            <button className="btn btn-sm btn-outline-primary mb-3" onClick={() => dispatch(actJiraUserManagementCreateNewUserBtn(<UserSignUpForm />))}>
                Create new user
            </button>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search user..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
            <JiraUserManagementTable />
        </>
    )
}
