import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import { connect, useDispatch } from 'react-redux';
import { actSetSubmitBtnJiraHOCDrawer, sgaJiraCreateGetProjectCategories, sgaSubmitBtnAfterEditedProject } from '../../redux/actions/JiraCloneActions';

function UpdateProjectForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        projectCategories,
    } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sgaJiraCreateGetProjectCategories());
        dispatch(actSetSubmitBtnJiraHOCDrawer(handleSubmit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content);
    }

    return (
        <form className="container-fluid p-1" onSubmit={handleSubmit}>
            <div className="row mt-5">
                <div className="mb-3 col-4">
                    <label className="fw-bold">Project Id</label>
                    <input name="id" value={values.id} onChange={handleChange} className="form-control" disabled />
                </div>
                <div className="mb-3 col-4">
                    <label className="fw-bold">Project Name</label>
                    <input name="projectName" value={values.projectName} onChange={handleChange} onBlur={handleBlur} className="form-control" />
                    {errors.projectName && touched.projectName && <div className="text-danger" id="feedback">{errors.projectName}</div>}
                </div>
                <div className="mb-3 col-4">
                    <label className="fw-bold">Project Category</label>
                    <select name="categoryId" defaultValue={values.categoryId} onChange={handleChange} className="form-select">
                        {projectCategories.map((item, index) => (
                            <option value={item.id} key={index}>{item.projectCategoryName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-1 col-12">
                    <label>Description</label>
                    {errors.description && touched.description && <div className="text-danger" id="feedback">{errors.description}</div>}
                    <Editor
                        initialValue={values.description}
                        value={values.description}
                        name="description"
                        init={{
                            height: 300,
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
            </div>
        </form>
    )
}

const UpdateProjectFormWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        id: props.projectItemData?.id,
        projectName: props.projectItemData?.projectName,
        creator: props.projectItemData?.creator,
        description: props.projectItemData?.description,
        categoryId: `${props.projectItemData?.categoryId}`,
    }),

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

    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(sgaSubmitBtnAfterEditedProject(values));
    },

    displayName: 'UpdateProjectForm',
})(UpdateProjectForm);

const mapStateToProps = (state) => ({
    projectItemData: state.UpdateProjectFormReducer.projectItemData,
    projectCategories: state.JiraCreateProjectReducer.projectCategories,
});

export default connect(mapStateToProps)(UpdateProjectFormWithFormik);