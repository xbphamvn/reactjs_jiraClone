import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { jiraCloneServices } from '../../../services/JiraCloneServices/JiraCloneServices';
import { CODE_STATUS, JIRA_PATH_PROJECT_MANAGEMENT, LOCALSTORAGE_TOKEN_NAME, LOCALSTORAGE_USER_DATA_NAME } from '../../../utils/constants/globalConsts';
import { actUpdateUserLoginedData } from '../../actions/JiraCloneActions';
import { actDisplayLoadingOverlay, actHideLoadingOverlay } from '../../actions/LoadingActions';
import { SGA_JIRA_USER_LOGIN } from '../../constants/JiraCloneConsts';

function* userLogin(action) {

    const {history} = yield select(state => state.JiraPushHistoryToReduxReducer);

    yield put(actDisplayLoadingOverlay());
    try {
        const {data, status} = yield call(() => jiraCloneServices.sgUserLogin(action.userData));
        if (status === CODE_STATUS.SUCCESS) {
            localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, data.content.accessToken);
            localStorage.setItem(LOCALSTORAGE_USER_DATA_NAME, JSON.stringify(data.content));
            yield put(actUpdateUserLoginedData(data.content));
            history.push(JIRA_PATH_PROJECT_MANAGEMENT);
        } else {
            console.log('Something was wrong! Please check again!');
        }
    } catch (err) {
        console.log(err);
        alert('Email or password was wrong. Please check again!')
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
}

export function* listenUserLogin() {
    yield takeLatest(SGA_JIRA_USER_LOGIN, userLogin);
}