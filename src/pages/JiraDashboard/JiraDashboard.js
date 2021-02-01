import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JiraDetailBody from '../../components/JiraDetail/JiraDetailBody';
import JiraDetailHeader from '../../components/JiraDetail/JiraDetailHeader';
import { sgaDashboardGetProjectDetailApi } from '../../redux/actions/JiraCloneActions';

export default function JiraDashboard(props) {

    const { projectDetail } = useSelector(state => state.JiraDashboardReducer);

    const { allProjectArr } = useSelector(state => state.JiraProjectManagementReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const { projectId } = props.match.params;
        projectId === ':projectId' ? dispatch(sgaDashboardGetProjectDetailApi(allProjectArr[0]?.id)) : dispatch(sgaDashboardGetProjectDetailApi(projectId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="main">
            <JiraDetailHeader projectDetail={projectDetail} />
            <JiraDetailBody projectDetail={projectDetail} />
        </div>
    )
}
