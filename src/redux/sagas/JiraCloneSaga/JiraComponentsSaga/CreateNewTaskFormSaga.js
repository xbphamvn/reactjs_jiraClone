import { call, put, takeLatest } from 'redux-saga/effects';
import { jiraCreateNewTaskServices } from '../../../../services/JiraComponentsServices/JiraCreateNewTaskServices';
import { CODE_STATUS } from '../../../../utils/constants/globalConsts';
import { actSetAllPriorityTypesToRedux, actSetAllProjectsArrToRedux, actSetAllTaskStatusToRedux, actSetAllTaskTypesToRedux } from '../../../actions/normalActions/JiraCreateNewTaskActions';
import { SGA_CREATE_NEW_TASK_SUBMIT_BTN, SGA_GET_ALL_PRIORITY_TYPES_API } from "../../../constants/JiraCreateNewTaskConsts";


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

//Click submit button to create new task
function* createTaskClickSubmitBtn(action) {

    console.log(action);

    // try {
    //     const {data, status} = yield call(jiraCreateNewTaskServices.sgCreateTaskGetAllStatus);
    //     if (status === CODE_STATUS.SUCCESS) {
    //         yield put(actSetAllTaskStatusToRedux(data.content));
    //     } else {
    //         console.log('Something was wrong! For developer only!');
    //     }
    // } catch (err) {
    //     console.log(err);
    // }
}

export function* listenCreateTaskClickSubmitBtn() {
    yield takeLatest(SGA_CREATE_NEW_TASK_SUBMIT_BTN, createTaskClickSubmitBtn);
}