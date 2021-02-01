import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { sgaJiraUserManagementUpdateUserBtn } from '../../redux/actions/sagaActions/JiraUserManagementSagaActions';

function UpdateUserDataForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        // handleBlur,
        handleSubmit,
    } = props;

    return (
        <form className="row container-fluid w-75 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3 col-6">
                <label className="form-label">User ID</label>
                <input type="text" name="id" value={values.id} disabled className="form-control" />
                {errors.id && touched.id && <div className="text-danger" id="feedback">{errors.id}</div>}
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" value={values.email} onChange={handleChange} />
                {errors.email && touched.email && <div className="text-danger" id="feedback">{errors.email}</div>}
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Password</label>
                <input type="password" name="passWord" className="form-control" onChange={handleChange} />
                {errors.passWord && touched.passWord && <div className="text-danger" id="feedback">{errors.passWord}</div>}
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Phone number</label>
                <input type="text" name="phoneNumber" value={values.phoneNumber} className="form-control" onChange={handleChange} />
                {errors.phoneNumber && touched.phoneNumber && <div className="text-danger" id="feedback">{errors.phoneNumber}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label">Full name</label>
                <input type="text" name="name" value={values.name} className="form-control" onChange={handleChange} />
                {errors.name && touched.name && <div className="text-danger" id="feedback">{errors.name}</div>}
            </div>
            <button type="submit" className="btn btn-primary col-3 mt-2" onSubmit={handleSubmit}>Update User Info</button>
        </form>
    )
};

const updateUserDataWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        id: props.userData?.userId,
        passWord: '',
        name: props.userData?.name,
        phoneNumber: props.userData?.phoneNumber,
        email: props.userData?.email,
    }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = '*full name is required!';
        }
        return errors;
    },

    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(sgaJiraUserManagementUpdateUserBtn(values));
    },

    displayName: 'UpdateProjectForm',
})(UpdateUserDataForm);

const mapStateToProps = state => ({
    userData: state.JiraHOCModalReducer.userData
})

export default connect(mapStateToProps)(updateUserDataWithFormik);