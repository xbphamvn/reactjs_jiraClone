import { call, put, takeLatest } from 'redux-saga/effects';
import { displayNotification } from '../../../utils/notifications/notifications';
import { jiraCloneServices } from '../../../services/JiraCloneServices/JiraCloneServices';
import { CODE_STATUS, NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_MESSAGE_ERROR, NOTIFICATION_ANTD_MESSAGE_SUCCESS, NOTIFICATION_ANTD_SUCCESS } from '../../../utils/constants/globalConsts';
import { actGetAllProjectApi, sgaGetAllProjectApi } from '../../actions/JiraCloneActions';
import { SGA_CLICKED_YES_DELETE_BTN, SGA_MANAGEMENT_GET_ALL_PROJECT } from '../../constants/JiraCloneConsts';

function* getAllProjectApi(action) {
    try {
        const { data, status } = yield call(jiraCloneServices.sgGetAllProjectApi);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actGetAllProjectApi(data.content));
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenGetAllProjectApi() {
    yield takeLatest(SGA_MANAGEMENT_GET_ALL_PROJECT, getAllProjectApi);
}

//Delete project action
function* deleteProjectApi(action) {
    try {
        const { data, status } = yield call(() => jiraCloneServices.sgDeleteProjectItem(action.projectId));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, NOTIFICATION_ANTD_MESSAGE_SUCCESS, data.message);
            yield put(sgaGetAllProjectApi());
        } else {
            displayNotification(NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_MESSAGE_ERROR, 'Error detail notification...');
            console.log('Something was wrong, for developer only!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_MESSAGE_ERROR, 'Error detail notification...');
    }
}

export function* listenDeleteProjectApi() {
    yield takeLatest(SGA_CLICKED_YES_DELETE_BTN, deleteProjectApi);
}