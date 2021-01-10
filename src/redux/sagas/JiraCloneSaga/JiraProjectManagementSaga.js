import { call, put, takeLatest } from 'redux-saga/effects';
import { jiraCloneServices } from '../../../services/JiraCloneServices/JiraCloneServices';
import { CODE_STATUS } from '../../../utils/constants/globalConsts';
import { actGetAllProjectApi } from '../../actions/JiraCloneActions';
import { SGA_MANAGEMENT_GET_ALL_PROJECT } from '../../constants/JiraCloneConsts';

function* getAllProjectApi(action) {
    try {
        const {data, status} = yield call(jiraCloneServices.sgGetAllProjectApi);
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