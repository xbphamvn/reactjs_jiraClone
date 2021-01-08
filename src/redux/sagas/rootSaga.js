import {all} from 'redux-saga/effects';
import * as sgaUserLogin from './JiraCloneSaga/JiraCloneSaga';

export function* rootSaga() {
    yield all([
        sgaUserLogin.listenUserLogin(),
    ])
}