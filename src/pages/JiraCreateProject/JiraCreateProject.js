import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import { connect, useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { sgaCreateNewProjectApi, sgaJiraCreateGetProjectCategories } from '../../redux/actions/JiraCloneActions';

function JiraCreateProject(props) {

    const { projectCategories } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sgaJiraCreateGetProjectCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        // values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = props;

    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content);
    }

    return (
        <div className="container">
            <h3>Create Project Page</h3>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <div className="mb-3">
                    <label className="form-label">Project Name</label>
                    <input name="projectName" className="form-control" onBlur={handleBlur} placeholder="Input your project name here..." />
                    {errors.projectName && touched.projectName && <div className="text-danger" id="feedback">{errors.projectName}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    {errors.description && touched.description && <div className="text-danger" id="feedback">{errors.description}</div>}
                    <Editor
                        initialValue=""
                        name="description"
                        init={{
                            height: 240,
                            min_height: 150,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <div className="mb-3">
                    <select name="categoryId" className="form-select">
                        {projectCategories.map((item, index) => ((
                            <option value={item.id} key={index}>{item.projectCategoryName}</option>
                        )))}
                    </select>
                </div>
                <button className="btn btn-success mb-5" type="submit">Create project</button>
            </form>
        </div>
    )
};

const JiraCreateProjectWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {
            projectName: '',
            description: '',
            categoryId: props.projectCategories[0]?.id,
        }
    },

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.projectName) {
            errors.projectName = '*project name is required!';
        }

        if (!values.description) {
            errors.description = '*description is required!';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        props.dispatch(sgaCreateNewProjectApi(values));
    },

    displayName: 'Create Project Form',
})(JiraCreateProject);

const mapStateToProp = (state) => ({
    projectCategories: state.JiraCreateProjectReducer.projectCategories
})

export default connect(mapStateToProp)(JiraCreateProjectWithFormik);