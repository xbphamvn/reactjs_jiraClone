import React from 'react';
import { useSelector } from 'react-redux';
import { Select, Slider } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import JiraTaskMainComment from '../JiraTaskComment/JiraTaskMainComment';
import JiraTaskCommentItem from '../JiraTaskComment/JiraTaskCommentItem';

export default function JiraDetailModalContent(props) {

    const { taskTypeDetail, taskId, taskName, description, assigness } = useSelector(state => state.JiraHOCModalReducer.taskData);
    const {commentArr} = useSelector(state => state.JiraHOCModalReducer)
    const { taskTypeIcon } = useSelector(state => state.JiraDetailTaskItemReducer);

    // const { taskData } = useSelector(state => state.JiraHOCModalReducer);
    // console.log(taskData);

    const renderCommentArr = () => (
        commentArr?.map((comment, index) => ((
            <JiraTaskCommentItem commentData={comment} key={index} />
        )))
    );

    return (
        <div className="row container-fluid px-1">
            <div className="col-8">
                <p>
                    {taskTypeIcon[taskTypeDetail.taskType]}
                    <span className="ms-2 text-uppercase">task-{taskId}</span>
                </p>
                <h4>{taskName}</h4>
                <p className="fw-bold">Description</p>
                <div className="col-12">
                    {ReactHtmlParser(description)}
                </div>
                <p className="fw-bold mb-4">Comments</p>
                <JiraTaskMainComment taskId={taskId} />
                {renderCommentArr()}
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
                    value={'STATUS'}
                // onChange={onChange}
                >
                    <Select.Option>123</Select.Option>
                </Select>
                <p className="fw-bold mt-3 mb-2">ASSIGNEES</p>
                <div className="pt-1">
                    {assigness.map((user, index) => ((
                        <span className="taskDetail__listMember" key={index}>
                            <img className="taskDetail__listMember--img" src={user.avatar} alt={user.avatar} />
                            {user.name}
                            <i className="fal fa-times mx-2" />
                        </span>
                    )))}
                    <span className="taskDetail__listMember--link"><i className="fal fa-plus" /> Add more</span>
                </div>
                <p className="fw-bold mt-3 mb-2">PRIORITY</p>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    value="2"
                // onChange={onChange}
                >
                    <Select.Option value="2">High</Select.Option>
                    <Select.Option value="1">Medium</Select.Option>
                </Select>
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