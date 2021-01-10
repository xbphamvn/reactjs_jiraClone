import { ACT_PUSH_HISTORY_PROP_TO_REDUX, ACT_UPDATE_USER_LOGINED_DATA, ACT_CREATE_GET_PROJECT_CATEGORIES_API, SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES, SGA_JIRA_USER_LOGIN, SGA_JIRA_CREATE_NEW_PROJECT, ACT_MANAGEMENT_GET_ALL_PROJECT_API, SGA_MANAGEMENT_GET_ALL_PROJECT } from "../constants/JiraCloneConsts";

export const actUpdateUserLoginedData = (data) => ({
    type: ACT_UPDATE_USER_LOGINED_DATA,
    data
});

export const actPushHistoryPropToRedux = (history) => ({
    type: ACT_PUSH_HISTORY_PROP_TO_REDUX,
    history
});

//Create new projects actions
//1. Get project categories
export const actCreateGetProjectCategories = (categoryArr) => ({
    type: ACT_CREATE_GET_PROJECT_CATEGORIES_API,
    categoryArr
})

//Project management
//1. Get all projects
export const actGetAllProjectApi = (allProjectArr) => ({
    type: ACT_MANAGEMENT_GET_ALL_PROJECT_API,
    allProjectArr
})

//Saga actions-----------------------------
//Login
export const sgaJiraUserLogin = (userData) => ({
    type: SGA_JIRA_USER_LOGIN,
    userData
});

//Create project
//1. Get project categories
export const sgaJiraCreateGetProjectCategories = () => ({
    type: SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES
})
//2. Create new project
export const sgaCreateNewProjectApi = (values) => ({
    type: SGA_JIRA_CREATE_NEW_PROJECT,
    values
})

//Project management
//1. Get all projects
export const sgaGetAllProjectApi = () => ({
    type: SGA_MANAGEMENT_GET_ALL_PROJECT
})