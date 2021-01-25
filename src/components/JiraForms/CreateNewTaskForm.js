import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';
import { actSetSubmitBtnJiraHOCDrawer } from '../../redux/actions/JiraCloneActions';
import { Slider, Select } from 'antd';

export default function CreateNewTaskForm(props) {

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
                    <label className="form-label">Belong to project</label>
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
                <div className="mb-2 col-6">
                    <Slider defaultValue={30} />
                </div>
                <div className="mb-2 col-6">
                    <Slider defaultValue={30} />
                </div>
                <div className="mb-1">
                    <label>Description</label>
                    {/* {errors.description && touched.description && <div className="text-danger" id="feedback">{errors.description}</div>} */}
                    <Editor
                        name="description"
                        init={{
                            height: 120,
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
