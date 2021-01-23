import {all} from 'redux-saga/effects';
import * as sgaUserLogin from './JiraCloneSaga/JiraLoginSaga';
import * as sgaCreateProject from './JiraCloneSaga/JiraCreateProjectSaga';
import * as sgaProjectManagement from './JiraCloneSaga/JiraProjectManagementSaga';
import * as sgaUpdateProjectForm from './JiraCloneSaga/JiraComponentsSaga/UpdateProjectFormSaga';

export function* rootSaga() {
    yield all([
        sgaUserLogin.listenUserLogin(),
        //Create project action
        sgaCreateProject.listenGetProjectCategories(),
        sgaCreateProject.listenCreateProjectApi(),
        //Project management
        sgaProjectManagement.listenGetAllProjectApi(),
        sgaProjectManagement.listenDeleteProjectApi(),
        sgaProjectManagement.listenAddMemberToProject(),
        //Update project after edited
        sgaUpdateProjectForm.listenSubmitBtnAfterEditedProject(),
    ])
}