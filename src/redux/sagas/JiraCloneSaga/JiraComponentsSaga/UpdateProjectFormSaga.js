import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { jiraComponentsServices } from '../../../../services/JiraComponentsServices/JiraComponentsServices';
import { CODE_STATUS } from '../../../../utils/constants/globalConsts';
import { actHideDrawerJiraHOCDrawer, sgaGetAllProjectApi } from '../../../actions/JiraCloneActions';
import { actDisplayLoadingOverlay, actHideLoadingOverlay } from '../../../actions/LoadingActions';
import { SGA_SUBMIT_BTN_AFTER_EDITED_PROJECT } from '../../../constants/JiraCloneConsts';

function* submitBtnAfterEditedProject(action) {
    yield put(actDisplayLoadingOverlay());

    try {
        const {status} = yield call(() => jiraComponentsServices.sgSubmitBtnAfterEditedProject(action.values));
        if (status === CODE_STATUS.SUCCESS) {
            yield put(actHideDrawerJiraHOCDrawer());
            yield put(sgaGetAllProjectApi());
        } else {
            console.log('Something was wrong! For developer only!');
        }
    } catch (err) {
        console.log(err);
    }

    yield delay(500);
    yield put(actHideLoadingOverlay());
}

export function* listenSubmitBtnAfterEditedProject() {
    yield takeLatest(SGA_SUBMIT_BTN_AFTER_EDITED_PROJECT, submitBtnAfterEditedProject);
}