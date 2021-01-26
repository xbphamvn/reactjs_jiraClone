import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Select } from 'antd';
import { actSetSubmitBtnJiraHOCDrawer } from '../../redux/actions/JiraCloneActions';
import { sgaCreateTaskGetAllPriorityType, sgaCreateTaskGetAllProject, sgaCreateTaskGetAllTaskStatus, sgaCreateTaskGetAllTaskType } from '../../redux/actions/sagaActions/JiraCreateNewTaskSagaActions';

export default function CreateNewTaskForm(props) {

    const [taskTime, setTaskTime] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sgaCreateTaskGetAllPriorityType());
        dispatch(sgaCreateTaskGetAllProject());
        dispatch(sgaCreateTaskGetAllTaskType());
        dispatch(sgaCreateTaskGetAllTaskStatus());
        dispatch(actSetSubmitBtnJiraHOCDrawer(() => alert('Call back ok!')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { priorityArr, projectArr, taskTypeArr, taskStatusArr } = useSelector(state => state.CreateNewTaskFormReducer);

    return (
        <form className="container-fluid">
            <div className="row">
                <div className="mb-2 col-6">
                    <label className="form-label fw-bold">Task name</label>
                    <input className="form-control" name="taskName" type="text" />
                </div>
                <div className="mb-2 col-6">
                    <label className="form-label fw-bold">Project ID</label>
                    <select name="projectId" className="form-select" onChange={(e) => {
                        //Dispatch lên theo e.target.value để get user by projectid
                        //setFieldValue cho projectId
                    }}>
                        {projectArr.map((item, index) => <option value={item.id} data-members={item.members} key={index}>{item.projectName}</option>)}
                    </select>
                </div>
                <div className="mb-2 col-6">
                    <label className="form-label fw-bold">Status ID</label>
                    <select name="statusId" className="form-select">
                        {taskStatusArr.map((item, index) => <option value={item.statusId} key={index}>{item.statusName}</option>)}
                    </select>
                </div>
                <div className="mb-2 col-3">
                    <label className="form-label fw-bold">Task type</label>
                    <select name="typeId" className="form-select">
                        {taskTypeArr.map((item, index) => <option value={item.id} key={index}>{item.taskType}</option>)}
                    </select>
                </div>
                <div className="mb-2 col-3">
                    <label className="form-label fw-bold">Priority ID</label>
                    <select name="priorityId" className="form-select">
                        {priorityArr.map((item, index) => <option value={item.priorityId} key={index}>{item.description}</option>)}
                    </select>
                </div>
                <div className="col-5">
                    <div className="mb-2">
                        <label className="form-label fw-bold">Assign members</label>
                        <Select
                            mode="multiple"
                            allowClear
                            options={projectArr[0]?.members.map((item, index) => ({label: item.name, value: item.userId}))}
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                        // onChange={handleChange}
                        >
                            {/* {children} */}
                        </Select>
                    </div>
                    <div className="mb-2">
                        <label className="form-label fw-bold">ORIGINAL ESTIMATE (HOURS)</label>
                        <input className="form-control text-end" name="originalEstimate" type="number" min="0" defaultValue="0" />
                    </div>
                </div>
                <div className="mb-2 mt-3 col-7">
                    <Slider value={taskTime.timeTrackingSpent} max={taskTime.timeTrackingSpent + taskTime.timeTrackingRemaining} className="mb-0" />
                    <div className="row container-fluid px-0">
                        <div className="col-6 ps-4">
                            <p><span className="fw-bold">{taskTime.timeTrackingSpent}h</span> logged</p>
                        </div>
                        <div className="col-6 text-end">
                            <p><span className="fw-bold">{taskTime.timeTrackingRemaining}h</span> estimated</p>
                        </div>
                        <div className="col-6 mt-1">
                            <p className="mb-2">Time spent</p>
                            <input className="form-control w-75 text-end" name="timeTrackingSpent" type="number" min="0" onChange={(e) => setTaskTime({ ...taskTime, [e.currentTarget.name]: Number(e.currentTarget.value) })} defaultValue="0" />
                        </div>
                        <div className="col-6 p-0 text-end mt-1">
                            <p className="mb-2">Time remaining</p>
                            <input className="form-control w-75 text-end d-inline" name="timeTrackingRemaining" type="number" min="0" onChange={(e) => setTaskTime({ ...taskTime, [e.currentTarget.name]: Number(e.currentTarget.value) })} defaultValue="0" />
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <label className="form-label fw-bold">Description</label>
                    {/* {errors.description && touched.description && <div className="text-danger" id="feedback">{errors.description}</div>} */}
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
                        onEditorChange=""
                    />
                </div>
            </div>
        </form>
    )
}
