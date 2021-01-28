import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { connect, useDispatch } from 'react-redux';
import { Slider, Select } from 'antd';
import { actSetSubmitBtnJiraHOCDrawer } from '../../redux/actions/JiraCloneActions';
import { sgaCreateNewTaskApi, sgaCreateTaskGetAllPriorityType, sgaCreateTaskGetAllProject, sgaCreateTaskGetAllTaskStatus, sgaCreateTaskGetAllTaskType, sgaCreatTaskGetMembersByProjectId } from '../../redux/actions/sagaActions/JiraCreateNewTaskSagaActions';
import { withFormik } from 'formik';

function CreateNewTaskForm(props) {

    const {
        // values,
        touched,
        errors,
        handleChange,
        // handleBlur,
        handleSubmit,
        setFieldValue
    } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sgaCreateTaskGetAllPriorityType());
        dispatch(sgaCreateTaskGetAllProject());
        dispatch(sgaCreateTaskGetAllTaskType());
        dispatch(sgaCreateTaskGetAllTaskStatus());
        dispatch(actSetSubmitBtnJiraHOCDrawer(handleSubmit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { priorityArr, projectArr, taskTypeArr, taskStatusArr, memberArr } = props;

    const [taskData, setTaskData] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0
    });

    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content);
    }

    return (
        <form className="container-fluid">
            <div className="row">
                <div className="mb-2 col-6">
                    <label className="form-label fw-bold">Task name</label>
                    {errors.taskName && touched.taskName && <div className="text-danger" id="feedback">{errors.taskName}</div>}
                    <input className="form-control" name="taskName" type="text" onChange={handleChange} />
                </div>
                <div className="mb-2 col-6">
                    <label className="form-label fw-bold">Project ID</label>
                    <select name="projectId" className="form-select" onChange={(e) => {
                        dispatch(sgaCreatTaskGetMembersByProjectId(e.currentTarget.value));
                        setFieldValue('projectId', Number(e.currentTarget.value));
                    }}>
                        {projectArr.map((item, index) => <option value={item.id} data-members={item.members} key={index}>{item.projectName}</option>)}
                    </select>
                </div>
                <div className="mb-2 col-6">
                    <label className="form-label fw-bold">Status ID</label>
                    <select name="statusId" className="form-select" onChange={handleChange}>
                        {taskStatusArr.map((item, index) => <option value={item.statusId} key={index}>{item.statusName}</option>)}
                    </select>
                </div>
                <div className="mb-2 col-3">
                    <label className="form-label fw-bold">Task type</label>
                    <select name="typeId" className="form-select" onChange={handleChange}>
                        {taskTypeArr.map((item, index) => <option value={item.id} key={index}>{item.taskType}</option>)}
                    </select>
                </div>
                <div className="mb-2 col-3">
                    <label className="form-label fw-bold">Priority ID</label>
                    <select name="priorityId" className="form-select" onChange={handleChange}>
                        {priorityArr.map((item, index) => <option value={item.priorityId} key={index}>{item.description}</option>)}
                    </select>
                </div>
                <div className="col-5">
                    <div className="mb-2">
                        <label className="form-label fw-bold">Assign members</label>
                        <Select
                            mode="multiple"
                            name="listUserAsign"
                            allowClear
                            options={memberArr?.map((item) => ({ label: item.name, value: item.userId }))}
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={(values) => setFieldValue('listUserAsign', values)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label fw-bold">ORIGINAL ESTIMATE (HOURS)</label>
                        <input className="form-control text-end" name="originalEstimate" type="number" min="0" defaultValue="0" />
                    </div>
                </div>
                <div className="mb-2 mt-3 col-7">
                    <Slider value={taskData.timeTrackingSpent} max={taskData.timeTrackingSpent + taskData.timeTrackingRemaining} className="mb-0" />
                    <div className="row container-fluid px-0">
                        <div className="col-6 ps-4">
                            <p><span className="fw-bold">{taskData.timeTrackingSpent}h</span> logged</p>
                        </div>
                        <div className="col-6 text-end">
                            <p><span className="fw-bold">{taskData.timeTrackingRemaining}h</span> estimated</p>
                        </div>
                        <div className="col-6 mt-1">
                            <p className="mb-2">Time spent</p>
                            <input className="form-control w-75 text-end" name="timeTrackingSpent" type="number" min="0" onChange={(e) => {
                                setTaskData({ ...taskData, [e.currentTarget.name]: Number(e.currentTarget.value) });
                                setFieldValue('timeTrackingSpent', Number(e.currentTarget.value));
                            }} defaultValue="0" />
                        </div>
                        <div className="col-6 p-0 text-end mt-1">
                            <p className="mb-2">Time remaining</p>
                            <input className="form-control w-75 text-end d-inline" name="timeTrackingRemaining" type="number" min="0" onChange={(e) => {
                                setTaskData({ ...taskData, [e.currentTarget.name]: Number(e.currentTarget.value) });
                                setFieldValue('timeTrackingRemaining', Number(e.currentTarget.value));
                            }} defaultValue="0" />
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <label className="form-label fw-bold">Description</label>
                    {errors.description && touched.description && <div className="text-danger" id="feedback">{errors.description}</div>}
                    <Editor
                        name="description"
                        init={{
                            height: 130,
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

const CreateNewTaskWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        taskName: '',
        projectId: props.projectArr[0]?.id,
        statusId: props.taskStatusArr[0]?.statusId,
        typeId: props.taskTypeArr[0]?.id,
        priorityId: props.priorityArr[0]?.priorityId,
        listUserAsign: [],
        originalEstimate: 0,
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0,
        description: ''
    }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.taskName) {
            errors.taskName = '*project name is required!';
        }

        if (!values.description) {
            errors.description = '*description is required!';
        }

        return errors;
    },

    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(sgaCreateNewTaskApi(values));
    },

    displayName: 'CreateNewTaskForm',
})(CreateNewTaskForm);

const mapStateToProps = (state) => ({
    priorityArr: state.CreateNewTaskFormReducer.priorityArr,
    projectArr: state.CreateNewTaskFormReducer.projectArr,
    taskTypeArr: state.CreateNewTaskFormReducer.taskTypeArr,
    taskStatusArr: state.CreateNewTaskFormReducer.taskStatusArr,
    memberArr: state.CreateNewTaskFormReducer.memberArr
})

export default connect(mapStateToProps)(CreateNewTaskWithFormik);