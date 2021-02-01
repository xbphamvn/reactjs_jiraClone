import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actJiraDetailClickedTaskItemToEdit } from '../../redux/actions/normalActions/JiraDetailComponentActions';
import { sgaJiraDetailGetAllCommentByTaskId } from '../../redux/actions/sagaActions/JiraDetailModalSagaActions';
import JiraDetailModalContent from './JiraDetailModalContent';

export default function JiraDetailProjectItem(props) {

    const { taskData } = props;

    const { priorityIcon, taskTypeIcon } = useSelector(state => state.JiraDetailTaskItemReducer);

    const dispatch = useDispatch();

    return (
        <div className="main__project--item" onClick={() => {
            dispatch(actJiraDetailClickedTaskItemToEdit({ Component: <JiraDetailModalContent />, taskData: taskData }));
            dispatch(sgaJiraDetailGetAllCommentByTaskId(taskData.taskId));
        }}>
            <p>{taskData.taskName}</p>
            <div className="mt-2 mb-0 row align-items-center">
                <div className="col-3 ml-1">
                    {taskTypeIcon[taskData.taskTypeDetail.taskType]}
                    {priorityIcon[taskData.priorityTask.priority]}
                </div>
                <div className="col-9 text-end">
                    {taskData.assigness.map((mem, index) => <img className="main__avatar--taskDetail" src={mem.avatar} alt={mem.avatar} key={index} />)}
                </div>
            </div>
        </div>
    )
}
