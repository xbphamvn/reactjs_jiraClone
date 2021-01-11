import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { CODE_STATUS, JIRA_PATH_PROJECT_MANAGEMENT } from "../../../utils/constants/globalConsts";
import { actCreateGetProjectCategories } from "../../actions/JiraCloneActions";
import { SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES, SGA_JIRA_CREATE_NEW_PROJECT } from "../../constants/JiraCloneConsts";
import { jiraCloneServices } from '../../../services/JiraCloneServices/JiraCloneServices';
import { actDisplayLoadingOverlay, actHideLoadingOverlay } from "../../actions/LoadingActions";


function* getProjectCategories(action) {
    try {
        const { data, status } = yield call(jiraCloneServices.sgGetProjectCategories);
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actCreateGetProjectCategories(data.content));
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenGetProjectCategories() {
    yield takeLatest(SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES, getProjectCategories);
}

function* createProjectApi(action) {

    const { history } = yield select(state => state.JiraPushHistoryToReduxReducer);

    yield put(actDisplayLoadingOverlay());

    try {
        const { status } = yield call(() => jiraCloneServices.sgCreateNewProjectApi(action.values));
        if (status === CODE_STATUS.SUCCESS) {
            history.push(JIRA_PATH_PROJECT_MANAGEMENT);
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }
    yield delay(500);
    yield put(actHideLoadingOverlay());
}

export function* listenCreateProjectApi() {
    yield takeLatest(SGA_JIRA_CREATE_NEW_PROJECT, createProjectApi);
}