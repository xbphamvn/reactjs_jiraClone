import React from 'react';
import { useSelector } from 'react-redux';

export default function JiraDetailProjectItem(props) {

    const { taskData } = props;

    const { priorityArr, taskTypeArr } = useSelector(state => state.CreateNewTaskFormReducer);

    console.log(taskTypeArr);
    console.log('taskData exclamation-circle', taskData);

    const renderProjectPriorityLevelIcon = (priorityLevel) => {
        switch (priorityLevel) {

            case priorityArr[0]?.priority:
                return <i className="fa fa-arrow-up text-danger" />;

            case priorityArr[1]?.priority:
                return <i className="fa fa-arrow-up" />;

            case priorityArr[2]?.priority:
                return <i className="fa fa-arrow-down" />;

            case priorityArr[3]?.priority:
                return <i className="fa fa-arrow-down text-primary" />;

            default:
                break;
        }
    };

    const renderTaskTypeIcon = (taskType) => {
        switch (taskType) {
            case taskTypeArr[0]?.taskType:
                return <i className="fas fa-exclamation-circle text-danger me-1" />;

            case taskTypeArr[1]?.taskType:
                return <i className="fas fa-check-square text-primary me-1" />;

            default:
                break;
        }
    }

    return (
        <div className="main__project--item">
            <a href="#abc">
                {taskData.taskName}
            </a>
            <div className="mt-2 mb-0 row align-items-center">
                <div className="col-3 ml-1">
                    {/* <i className="fa fa-bookmark me-1" /> */}
                    {renderTaskTypeIcon(taskData.taskTypeDetail.taskType)}
                    {renderProjectPriorityLevelIcon(taskData.priorityTask.priority)}
                </div>
                <div className="col-9 text-end">
                    {taskData.assigness.map((mem, index) => <img className="main__avatar--taskDetail" src={mem.avatar} alt={mem.avatar} key={index} />)}
                </div>
            </div>
        </div>
    )
}
