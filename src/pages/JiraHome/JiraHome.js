import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JiraDetailBody from '../../components/JiraDetail/JiraDetailBody';
import JiraDetailHeader from '../../components/JiraDetail/JiraDetailHeader';
import { sgaDashboardGetProjectDetailApi } from '../../redux/actions/JiraCloneActions';

export default function JiraHome(props) {

    const { projectDetail } = useSelector(state => state.JiraDashboardReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const { projectId } = props.match.params;
        dispatch(sgaDashboardGetProjectDetailApi(projectId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="main">
            <JiraDetailHeader projectDetail={projectDetail} />
            <JiraDetailBody projectDetail={projectDetail} />
        </div>
    )
}
