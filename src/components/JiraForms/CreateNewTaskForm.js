import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';
import { actSetSubmitBtnJiraHOCDrawer } from '../../redux/actions/JiraCloneActions';
import { Slider } from 'antd';

export default function CreateNewTaskForm(props) {

    const [taskTime, setTaskTime] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0
    })

    const dispatch = useDispatch();

    return (
        <form className="container-fluid" onSubmit={dispatch(actSetSubmitBtnJiraHOCDrawer(() => alert('Hehe, create new task!')))}>
            <div className="row">
                <div className="mb-2 col-8">
                    <label className="form-label">Task name</label>
                    <input className="form-control" name="taskName" type="text" />
                </div>
                <div className="mb-2 col-4">
                    <label className="form-label">Priority ID</label>
                    <select name="priorityId" className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-2 col-4">
                    <label className="form-label">Project ID</label>
                    <select name="projectId" className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-2 col-4">
                    <label className="form-label">Task type</label>
                    <select name="typeId" className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-2 col-4">
                    <label className="form-label">Status ID</label>
                    <input className="form-control" name="statusId" type="text" />
                </div>
                <div className="col-5">
                    <div className="mb-2">
                        <label className="form-label">Status ID</label>
                        <input className="form-control" name="statusId" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">ORIGINAL ESTIMATE (HOURS)</label>
                        <input className="form-control w-50 text-end" name="originalEstimate" type="number" min="0" defaultValue="0" />
                    </div>
                </div>
                <div className="mb-2 mt-3 col-7">
                    <Slider value={taskTime.timeTrackingSpent} max={taskTime.timeTrackingSpent + taskTime.timeTrackingRemaining} className="mb-0" />
                    <div className="row container-fluid px-0">
                        <div className="col-6 ps-4">
                            <p>{taskTime.timeTrackingSpent}h logged</p>
                        </div>
                        <div className="col-6 text-end">
                            <p>{taskTime.timeTrackingRemaining}h estimated</p>
                        </div>
                        <div className="col-6 mt-1">
                            <p className="mb-2">Time spent</p>
                            <input className="form-control w-50 text-end" name="timeTrackingSpent" type="number" min="0" onChange={(e) => setTaskTime({ ...taskTime, [e.currentTarget.name]: Number(e.currentTarget.value) })} defaultValue="0" />
                        </div>
                        <div className="col-6 p-0 text-end mt-1">
                            <p className="mb-2">Time remaining</p>
                            <input className="form-control w-50 text-end d-inline" name="timeTrackingRemaining" type="number" min="0" onChange={(e) => setTaskTime({ ...taskTime, [e.currentTarget.name]: Number(e.currentTarget.value) })} defaultValue="0" />
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <label>Description</label>
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
