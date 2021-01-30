import {all} from 'redux-saga/effects';
import * as sgaUserLogin from './JiraCloneSaga/JiraLoginSaga';
import * as sgaCreateProject from './JiraCloneSaga/JiraCreateProjectSaga';
import * as sgaProjectManagement from './JiraCloneSaga/JiraProjectManagementSaga';
import * as sgaUpdateProjectForm from './JiraCloneSaga/JiraComponentsSaga/UpdateProjectFormSaga';
import * as sgaProjectDashboard from './JiraCloneSaga/JiraProjectDashboardSaga';
import * as sgaCreateNewTask from './JiraCloneSaga/JiraComponentsSaga/CreateNewTaskFormSaga';
import * as sgaJiraDetailModal from './JiraCloneSaga/JiraComponentsSaga/JiraDetailModalSaga'

export function* rootSaga() {
    yield all([
        sgaUserLogin.listenUserLogin(),
        //Create project action
        sgaCreateProject.listenGetProjectCategories(),
        sgaCreateProject.listenCreateProjectApi(),
        //Project management
        sgaProjectManagement.listenGetAllProjectApi(),
        sgaProjectManagement.listenDeleteProjectApi(),
        sgaProjectManagement.listenOnSearchAddMemberToProject(),
        sgaProjectManagement.listenAssignMemberToProject(),
        sgaProjectManagement.listenRemoveMemberOfProject(),
        //Update project after edited
        sgaUpdateProjectForm.listenSubmitBtnAfterEditedProject(),
        //Project dashboard
        sgaProjectDashboard.listenGetProjectDetailApi(),
        //Create new task
        sgaCreateNewTask.listenCreateTaskGetAllPriorityType(),
        sgaCreateNewTask.listenCreateTaskGetAllProject(),
        sgaCreateNewTask.listenCreateTaskGetAllTaskType(),
        sgaCreateNewTask.listenCreateTaskGetAllTaskStatus(),
        sgaCreateNewTask.listenCreateTaskGetAllMemberByProjectId(),
        sgaCreateNewTask.listenCreateTaskClickSubmitBtn(),
        //Comment actions
        sgaJiraDetailModal.listenClickPostNewComment(),
        sgaJiraDetailModal.listenGetAllCommentByTaskId(),
    ])
}