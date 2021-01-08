import { call, takeLatest } from 'redux-saga/effects';
import { jiraCloneServices } from '../../../services/JiraCloneServices/JiraCloneServices';
import { SGA_JIRA_USER_LOGIN } from '../../constants/JiraCloneConsts';

function* userLogin(action) {
    try {
        const {data, status} = yield call(() => jiraCloneServices.sgUserLogin(action.userData));
        console.log(data, status);
    } catch (err) {
        console.log(err);
    }
}

export function* listenUserLogin() {
    yield takeLatest(SGA_JIRA_USER_LOGIN, userLogin);
}