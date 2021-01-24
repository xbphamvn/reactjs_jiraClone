import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { jiraDashboardServices } from '../../../services/JiraCloneServices/JiraDashboardServices';
import { CODE_STATUS } from '../../../utils/constants/globalConsts';
import { actProjectDashboardGetProjectDetail } from '../../actions/JiraCloneActions';
import { actDisplayLoadingOverlay, actHideLoadingOverlay } from '../../actions/LoadingActions';
import { SGA_DASHBOARD_GET_PROJECT_DETAIL } from '../../constants/JiraCloneConsts';

function* getProjectDetailApi(action) {
    yield put(actDisplayLoadingOverlay());
    try {
        const {data, status} = yield call(() => jiraDashboardServices.sgGetProjectDetailApi(action.projectId));
        if (status === CODE_STATUS.SUCCESS) {
            console.log(data);
            yield put(actProjectDashboardGetProjectDetail(data.content))
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
}

export function* listenGetProjectDetailApi() {
    yield takeLatest(SGA_DASHBOARD_GET_PROJECT_DETAIL, getProjectDetailApi);
}