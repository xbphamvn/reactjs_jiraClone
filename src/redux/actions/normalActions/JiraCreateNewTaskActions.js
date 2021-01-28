import { ACT_SET_ALL_PRIORITY_TYPES_TO_REDUX, ACT_SET_ALL_PROJECTS_ARR_TO_REDUX, ACT_SET_ALL_TASK_TYPES_TO_REDUX, ACT_SET_ALL_TASK_STATUS_TO_REDUX, ACT_SET_ALL_MEMBER_BY_PROJECT_ID_TO_REDUX, ACT_SET_MEMBER_PROJECT_BY_ID_DEFAULT_TO_REDUX } from "../../constants/JiraCreateNewTaskConsts";

//CREATE NEW TASK
//1. Set all project priority types to redux
export const actSetAllPriorityTypesToRedux = (priorityArr) => ({
    type: ACT_SET_ALL_PRIORITY_TYPES_TO_REDUX,
    priorityArr
});
//2. Set all projects to redux
export const actSetAllProjectsArrToRedux = (projectArr) => ({
    type: ACT_SET_ALL_PROJECTS_ARR_TO_REDUX,
    projectArr
});
//3. Set all task types to redux
export const actSetAllTaskTypesToRedux = (taskTypeArr) => ({
    type: ACT_SET_ALL_TASK_TYPES_TO_REDUX,
    taskTypeArr
});
//4. Set all task status to redux
export const actSetAllTaskStatusToRedux = (taskStatusArr) => ({
    type: ACT_SET_ALL_TASK_STATUS_TO_REDUX,
    taskStatusArr
});

//5. Set all member by project ID to redux
export const actSetAllMemberByProjectIdToRedux = (memberArr) => ({
    type: ACT_SET_ALL_MEMBER_BY_PROJECT_ID_TO_REDUX,
    memberArr
});
//6. Set members of project by ID default to redux
export const actSetMemberProjectDefaultToRedux = (memberArrDefault) => ({
    type: ACT_SET_MEMBER_PROJECT_BY_ID_DEFAULT_TO_REDUX,
    memberArrDefault
})