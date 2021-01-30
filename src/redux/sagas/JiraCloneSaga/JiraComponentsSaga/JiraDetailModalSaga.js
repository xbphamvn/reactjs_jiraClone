import { call, put, select, takeLatest } from 'redux-saga/effects';
import { jiraDetailModalServices } from '../../../../services/JiraDetailModalServices/JiraDetailModalServices';
import { CODE_STATUS, NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_SUCCESS } from '../../../../utils/constants/globalConsts';
import { displayNotification } from '../../../../utils/notifications/notifications';
import { actJiraDetailModalPushCommentArrToRedux } from '../../../actions/normalActions/JiraDetailCommentActions';
import { sgaJiraDetailGetAllCommentByTaskId } from '../../../actions/sagaActions/JiraDetailModalSagaActions';
import { SGA_JIRA_DETAIL_MODAL_GET_ALL_COMMENT_BY_TASKID, SGA_JIRA_DETAIL_MODAL_POST_NEW_COMMENT } from '../../../constants/JiraDetailCommentsConsts';


//1. Get all comment by task id
function* getAllCommentByTaskId(action) {
    try {
        const {data, status} = yield call(() => jiraDetailModalServices.sgGetAllCommentByTaskId(action.taskId));
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actJiraDetailModalPushCommentArrToRedux(data.content));
        } else {
            console.log('Some thing was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenGetAllCommentByTaskId() {
    yield takeLatest(SGA_JIRA_DETAIL_MODAL_GET_ALL_COMMENT_BY_TASKID, getAllCommentByTaskId);
}

//2. Click Post new comment button

function* clickPostNewComment(action) {

    const {taskId} = yield select(state => state.JiraHOCModalReducer.taskData);

    try {
        const { data, status } = yield call(() => jiraDetailModalServices.sgPostNewComment(action.commentData));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, data.message, 'Something else ok!');
            yield put((sgaJiraDetailGetAllCommentByTaskId(taskId)));
        } else {
            displayNotification(NOTIFICATION_ANTD_ERROR, 'Server error', 'Something else ok!');
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, err.reponsive, 'Something was wrong!');
    }
}

export function* listenClickPostNewComment() {
    yield takeLatest(SGA_JIRA_DETAIL_MODAL_POST_NEW_COMMENT, clickPostNewComment);
}