import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { jiraUserManagementServices } from '../../../services/JiraCloneServices/JiraUserManagementServices';
import { CODE_STATUS, NOTIFICATION_ANTD_ERROR, NOTIFICATION_ANTD_SUCCESS } from '../../../utils/constants/globalConsts';
import { displayNotification } from '../../../utils/notifications/notifications';
import { actDisplayLoadingOverlay, actHideLoadingOverlay } from '../../actions/LoadingActions';
import { } from '../../actions/normalActions/JiraDetailCommentActions';
import { actJiraHOCModalHideModal } from '../../actions/normalActions/JiraHOCModalActions';
import { actJiraUserManagementPushUserArrToRedux } from '../../actions/normalActions/JiraUserManagementActions';
import { sgaJiraManagementGetAllUserArr } from '../../actions/sagaActions/JiraUserManagementSagaActions';
import { SGA_JIRA_USER_MANAGEMENT_DELETE_USER, SGA_JIRA_USER_MANAGEMENT_GET_ALL_USER, SGA_JIRA_USER_MANAGEMENT_SIGNUP_NEW_USER, SGA_JIRA_USER_MANAGEMENT_UPDATE_USER } from '../../constants/JiraUserManagement';

//Get all user array
function* getAllUserArrApi(action) {

    yield put(actDisplayLoadingOverlay());

    try {
        const { data, status } = yield call(jiraUserManagementServices.sgGetAllUserApi);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actJiraUserManagementPushUserArrToRedux(data.content));
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
};

export function* listenGetAllUserArrApi() {
    yield takeLatest(SGA_JIRA_USER_MANAGEMENT_GET_ALL_USER, getAllUserArrApi);
};

//Delete user
function* deleteUserApi(action) {

    yield put(actDisplayLoadingOverlay());

    try {
        const { data, status } = yield call(() => jiraUserManagementServices.sgDeleteUserApi(action.userId));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, data.message, 'Deleted success!');
            yield put(sgaJiraManagementGetAllUserArr());
        } else {
            console.log('Something was wrong! For developer only!');
            displayNotification(NOTIFICATION_ANTD_ERROR, 'Title delete wrong', 'Delete action was wrong!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, err.responsive, 'Delete action was wrong!');
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
};

export function* listenDeleteUserApi() {
    yield takeLatest(SGA_JIRA_USER_MANAGEMENT_DELETE_USER, deleteUserApi);
};

//Signup a new user
function* signupNewUserApi(action) {

    yield put(actDisplayLoadingOverlay());

    try {
        const { data, status } = yield call(() => jiraUserManagementServices.sgSignupNewUser(action.signupData));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, data.message, 'Signup success!');
            yield put(sgaJiraManagementGetAllUserArr());
            yield put(actJiraHOCModalHideModal());
        } else {
            console.log('Something was wrong! For developer only!');
            displayNotification(NOTIFICATION_ANTD_ERROR, 'Title delete wrong', 'Signup user was wrong!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, err.responsive, 'Signup user was wrong!');
        yield put(actJiraHOCModalHideModal());
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
};

export function* listenSignupNewUserApi() {
    yield takeLatest(SGA_JIRA_USER_MANAGEMENT_SIGNUP_NEW_USER, signupNewUserApi);
};

//Update user info
function* updateUserInfo(action) {

    yield put(actDisplayLoadingOverlay());

    try {
        const { data, status } = yield call(() => jiraUserManagementServices.sgUpdateUserInfo(action.updateData));
        if (status === CODE_STATUS.SUCCESS) {
            displayNotification(NOTIFICATION_ANTD_SUCCESS, data.message, 'Update user success!');
            yield put(sgaJiraManagementGetAllUserArr());
            yield put(actJiraHOCModalHideModal());
        } else {
            console.log('Something was wrong! For developer only!');
            displayNotification(NOTIFICATION_ANTD_ERROR, 'Title Update user wrong', 'Update user was wrong!');
        }
    } catch (err) {
        console.log(err);
        displayNotification(NOTIFICATION_ANTD_ERROR, err.responsive, 'Update user was wrong!');
        yield put(actJiraHOCModalHideModal());
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
};

export function* listenUpdateUserInfo() {
    yield takeLatest(SGA_JIRA_USER_MANAGEMENT_UPDATE_USER, updateUserInfo);
};