import { call, put, takeLatest } from 'redux-saga/effects';
import { displayNotification } from '../../../utils/notifications/notifications';
import { jiraCloneServices } from '../../../services/JiraCloneServices/JiraCloneServices';
import { CODE_STATUS, NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_DELETE_MESSAGE_ERROR, NOTIFICATION_ANTD_DELETE_MESSAGE_SUCCESS, NOTIFICATION_ANTD_SUCCESS, NOTIFICATION_ANTD_ASSIGN_MEMBER_MESSAGE_ERROR, NOTIFICATION_ANTD_ASSIGN_MEMBER_MESSAGE_SUCCESS } from '../../../utils/constants/globalConsts';
import { actGetAllProjectApi, actPushOnSearchResultToRedux, sgaGetAllProjectApi } from '../../actions/JiraCloneActions';
import { SGA_ADD_MEMBER_TO_PROJECT_ON_SEARCH, SGA_ASSIGN_MEMBER_TO_PROJECT, SGA_CLICKED_YES_DELETE_BTN, SGA_MANAGEMENT_GET_ALL_PROJECT, SGA_REMOVE_MEMBER_OF_PROJECT } from '../../constants/JiraCloneConsts';

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
            displayNotification(NOTIFICATION_ANTD_SUCCESS, NOTIFICATION_ANTD_DELETE_MESSAGE_SUCCESS, data.message);
            yield put(sgaGetAllProjectApi());
        } else {
            displayNotification(NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_DELETE_MESSAGE_ERROR, 'Error detail notification...');
            console.log('Something was wrong, for developer only!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_DELETE_MESSAGE_ERROR, 'Error detail notification...');
    }
}

export function* listenDeleteProjectApi() {
    yield takeLatest(SGA_CLICKED_YES_DELETE_BTN, deleteProjectApi);
}

//Add member to project action
//1. Get member result from backend
function* onSearchAddMemberToProject(action) {
    try {
        const { data, status } = yield call(() => jiraCloneServices.sgAddMemberToProjectOnSearch(action.keyword));
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actPushOnSearchResultToRedux(data.content));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenOnSearchAddMemberToProject() {
    yield takeLatest(SGA_ADD_MEMBER_TO_PROJECT_ON_SEARCH, onSearchAddMemberToProject);
}
//2. Assign member to project
function* assignMemberToProject(action) {
    try {
        const { data, status } = yield call(() => jiraCloneServices.sgAssignMemberToProject(action.assignData));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, NOTIFICATION_ANTD_ASSIGN_MEMBER_MESSAGE_SUCCESS, data.message);
            yield put(sgaGetAllProjectApi());
        } else {
            displayNotification(NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_DELETE_MESSAGE_ERROR, 'Error detail notification...');
            console.log('Something was wrong, for developer only!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_ASSIGN_MEMBER_MESSAGE_ERROR, 'Error detail notification...');
    }
}

export function* listenAssignMemberToProject() {
    yield takeLatest(SGA_ASSIGN_MEMBER_TO_PROJECT, assignMemberToProject);
}
//3. Remove a member of a project
function* removeMemberOfProject(action) {
    try {
        const { status } = yield call(() => jiraCloneServices.sgRemoveMemberOfProject(action.removeData));
        if (status === CODE_STATUS.SUCCESS) {
            yield put(sgaGetAllProjectApi());
        } else {
            console.log('Something was wrong, for developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenRemoveMemberOfProject() {
    yield takeLatest(SGA_REMOVE_MEMBER_OF_PROJECT, removeMemberOfProject);
}