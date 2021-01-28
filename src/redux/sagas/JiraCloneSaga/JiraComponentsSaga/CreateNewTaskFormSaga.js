import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { jiraCreateNewTaskServices } from '../../../../services/JiraComponentsServices/JiraCreateNewTaskServices';
import { CODE_STATUS, NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_SUCCESS } from '../../../../utils/constants/globalConsts';
import { displayNotification } from '../../../../utils/notifications/notifications';
import { actHideDrawerJiraHOCDrawer } from '../../../actions/JiraCloneActions';
import { actDisplayLoadingOverlay, actHideLoadingOverlay } from '../../../actions/LoadingActions';
import { actSetAllMemberByProjectIdToRedux, actSetAllPriorityTypesToRedux, actSetAllProjectsArrToRedux, actSetAllTaskStatusToRedux, actSetAllTaskTypesToRedux, actSetMemberProjectDefaultToRedux } from '../../../actions/normalActions/JiraCreateNewTaskActions';
import { SGA_CREATE_NEW_TASK_SUBMIT_BTN, SGA_GET_ALL_MEMBER_BY_PROJECT_ID, SGA_GET_ALL_PRIORITY_TYPES_API } from "../../../constants/JiraCreateNewTaskConsts";

//Get all priority types
function* createTaskGetAllPriorityType(action) {
    try {
        const { data, status } = yield call(jiraCreateNewTaskServices.sgCreateTaskGetAllPriorityType);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actSetAllPriorityTypesToRedux(data.content));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenCreateTaskGetAllPriorityType() {
    yield takeLatest(SGA_GET_ALL_PRIORITY_TYPES_API, createTaskGetAllPriorityType);
}

//Get all projects
function* createTaskGetAllProject(action) {
    try {
        const { data, status } = yield call(jiraCreateNewTaskServices.sgCreateTaskGetAllProject);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actSetAllProjectsArrToRedux(data.content));
            yield put(actSetMemberProjectDefaultToRedux(data.content[0]?.members));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenCreateTaskGetAllProject() {
    yield takeLatest(SGA_GET_ALL_PRIORITY_TYPES_API, createTaskGetAllProject);
}

//Get all task types
function* createTaskGetAllTaskType(action) {
    try {
        const { data, status } = yield call(jiraCreateNewTaskServices.sgCreateTaskGetAllTaskType);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actSetAllTaskTypesToRedux(data.content));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenCreateTaskGetAllTaskType() {
    yield takeLatest(SGA_GET_ALL_PRIORITY_TYPES_API, createTaskGetAllTaskType);
}

//Get all task status
function* createTaskGetAllTaskStatus(action) {
    try {
        const { data, status } = yield call(jiraCreateNewTaskServices.sgCreateTaskGetAllStatus);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actSetAllTaskStatusToRedux(data.content));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenCreateTaskGetAllTaskStatus() {
    yield takeLatest(SGA_GET_ALL_PRIORITY_TYPES_API, createTaskGetAllTaskStatus);
}

//Get all member by project ID
function* createTaskGetAllMemberByProjectId(action) {
    try {
        const { data, status } = yield call(() => jiraCreateNewTaskServices.sgCreateTaskGetAllMemberByProjectId(action.projectId));
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actSetAllMemberByProjectIdToRedux(data.content));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenCreateTaskGetAllMemberByProjectId() {
    yield takeLatest(SGA_GET_ALL_MEMBER_BY_PROJECT_ID, createTaskGetAllMemberByProjectId);
}

//Click submit button to create new task
function* createTaskClickSubmitBtn(action) {

    console.log(action);

    yield put(actDisplayLoadingOverlay());

    try {
        const { status } = yield call(() => jiraCreateNewTaskServices.sgCreateTaskClickSubmitBtn(action.values));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, 'Task created!', 'Chúc mừng!');
        } else {
            console.log('Something was wrong! For developer only!');
            displayNotification(NOTIFICATION_ANTD_ERROR, 'Task did not create!', 'Check again!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, 'Task did not create!', 'Check again!');
    }
    yield put(actHideDrawerJiraHOCDrawer());
    yield delay(500);
    yield put(actHideLoadingOverlay());
}

export function* listenCreateTaskClickSubmitBtn() {
    yield takeLatest(SGA_CREATE_NEW_TASK_SUBMIT_BTN, createTaskClickSubmitBtn);
}