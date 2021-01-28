import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { sgaCreateTaskGetAllPriorityType, sgaCreateTaskGetAllTaskType } from '../../redux/actions/sagaActions/JiraCreateNewTaskSagaActions';
import JiraDetailProjectItem from './JiraDetailProjectItem'

export default function JiraDetailBody(props) {

    const { projectDetail } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sgaCreateTaskGetAllPriorityType());
        dispatch(sgaCreateTaskGetAllTaskType());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="row p-2" style={{ minHeight: 350 }}>
            {projectDetail.lstTask?.map((item, index) => ((
                <div className="col-md-6 col-lg-3 p-0 pe-2" key={index}>
                    <div className="main__project">
                        <p className="mb-2">{item.statusName} <span>{item.lstTaskDeTail.length}</span></p>
                        {item.lstTaskDeTail.map((task, index) => ((
                            <JiraDetailProjectItem taskData={task} key={index} />
                        )))}
                    </div>
                </div>
            )))}
        </div>
    )
}
