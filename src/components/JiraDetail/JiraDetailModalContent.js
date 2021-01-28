import React from 'react';
import { useSelector } from 'react-redux';
import { Select, Slider } from 'antd';

export default function JiraDetailModalContent(props) {

    const { taskId, taskTypeDetail, taskName } = useSelector(state => state.JiraHOCModalReducer.taskData);
    const { priorityIcon, taskTypeIcon } = useSelector(state => state.JiraDetailTaskItemReducer);

    // console.log(taskData);

    return (
        <div className="row container-fluid px-1">
            <div className="col-8">
                <p>
                    {taskTypeIcon[taskTypeDetail.taskType]}
                    <span className="ms-2 text-uppercase">task-{taskId}</span>
                </p>
                <h4>{taskName}</h4>
                <p className="fw-bold">Description</p>

            </div>
            <div className="col-4">
                <p className="text-end">
                    <span className="fs-6 me-4"><i className="fas fa-paper-plane" /> Give feedback</span>
                    <span className="fs-6 me-4"><i className="fas fa-link" /> Copy link</span>
                    <span className="fs-6 me-3"><i className="fas fa-trash-alt" /></span>
                </p>
                <p className="fw-bold mb-2">STATUS</p>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                // onChange={onChange}
                >
                    <Select.Option>123</Select.Option>
                </Select>
                <p className="fw-bold mt-3 mb-2">ASSIGNEES</p>
                <Select
                    mode="multiple"
                    name="listUserAsign"
                    allowClear
                    // options={memberArr?.map((item) => ({ label: item.name, value: item.userId }))}
                    style={{ width: '100%' }}
                    placeholder="Please select"
                // onChange={(values) => setFieldValue('listUserAsign', values)}
                />
                <p className="fw-bold mt-3 mb-2">REPORTER</p>
                <Select
                    mode="multiple"
                    name="listUserAsign"
                    allowClear
                    // options={memberArr?.map((item) => ({ label: item.name, value: item.userId }))}
                    style={{ width: '100%' }}
                    placeholder="Please select"
                // onChange={(values) => setFieldValue('listUserAsign', values)}
                />
                <p className="fw-bold mt-3 mb-2">PRIORITY</p>
                <Select
                    mode="multiple"
                    name="listUserAsign"
                    allowClear
                    // options={memberArr?.map((item) => ({ label: item.name, value: item.userId }))}
                    style={{ width: '100%' }}
                    placeholder="Please select"
                // onChange={(values) => setFieldValue('listUserAsign', values)}
                />
                <p className="fw-bold mt-3 mb-2">ORIGINAL ESTIMATE (HOURS)</p>
                <input className="form-control text-end" type="number" min="0" defaultValue="0" />
                <p className="fw-bold mt-3 mb-2">TIME TRACKING</p>
                <Slider value="15" max="30" className="mb-0" />
                <div className="row container-fluid px-0">
                    <div className="col-6 ps-4">
                        <p><span className="fw-bold">23h</span> logged</p>
                    </div>
                    <div className="col-6 text-end">
                        <p><span className="fw-bold">25h</span> estimated</p>
                    </div>
                </div>
                <hr />
                <p className="mb-1">Created at 2 months ago</p>
                <p>Updated at an hour ago</p>
            </div>
        </div>
    )
}
