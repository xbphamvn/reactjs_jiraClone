import { ACT_PUSH_HISTORY_PROP_TO_REDUX, ACT_UPDATE_USER_LOGINED_DATA, ACT_CREATE_GET_PROJECT_CATEGORIES_API, ACT_PUSH_ONSEARCH_RESULT_ARR_TO_REDUX, SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES, SGA_JIRA_USER_LOGIN, SGA_JIRA_CREATE_NEW_PROJECT, ACT_MANAGEMENT_GET_ALL_PROJECT_API, SGA_MANAGEMENT_GET_ALL_PROJECT, ACT_EDIT_BTN_MANAGEMENT_PROJECT_ITEM, ACT_HIDE_JIRA_HOC_DRAWER, ACT_PUSH_PROJECT_ITEM_DATA_TO_REDUX, ACT_SET_SUBMIT_BTN_JIRA_HOC_DRAWER, SGA_SUBMIT_BTN_AFTER_EDITED_PROJECT, SGA_CLICKED_YES_DELETE_BTN, SGA_ADD_MEMBER_TO_PROJECT_ON_SEARCH, SGA_ASSIGN_MEMBER_TO_PROJECT, SGA_REMOVE_MEMBER_OF_PROJECT, SGA_DASHBOARD_GET_PROJECT_DETAIL, ACT_PROJECT_DASHBOARD_GET_PROJECT_DETAIL } from "../constants/JiraCloneConsts";

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
//2. Click edit button of a project item
export const actClickEditBtnProjectItem = (Component) => ({
    type: ACT_EDIT_BTN_MANAGEMENT_PROJECT_ITEM,
    Component
})
//3. Push onSearch of add member to redux
export const actPushOnSearchResultToRedux = (onSearchResultArr) => ({
    type: ACT_PUSH_ONSEARCH_RESULT_ARR_TO_REDUX,
    onSearchResultArr
})

//Drawer Jira HOC
//1. Display/Hide drawer
export const actHideDrawerJiraHOCDrawer = () => ({
    type: ACT_HIDE_JIRA_HOC_DRAWER
})
//2. Push submit button of Drawer to redux!
export const actSetSubmitBtnJiraHOCDrawer = (callBackFunc) => ({
    type: ACT_SET_SUBMIT_BTN_JIRA_HOC_DRAWER,
    callBackFunc
})
//2. Push project item to drawer reducer
export const actPushProjectItemDataToRedux = (record) => ({
    type: ACT_PUSH_PROJECT_ITEM_DATA_TO_REDUX,
    record
})

//PROJECT DASHBOARD ACTIONS
export const actProjectDashboardGetProjectDetail = (projectDetail) => ({
    type: ACT_PROJECT_DASHBOARD_GET_PROJECT_DETAIL,
    projectDetail
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

export const sgaSubmitBtnAfterEditedProject = (values) => ({
    type: SGA_SUBMIT_BTN_AFTER_EDITED_PROJECT,
    values
})
//2. Action clicked yes button of delete button
export const sgaClickedYesDeleteButton = (projectId) => ({
    type: SGA_CLICKED_YES_DELETE_BTN,
    projectId
})
//3. Add member to project action!
export const sgaAddMemberToProjectOnSearch = (keyword) => ({
    type: SGA_ADD_MEMBER_TO_PROJECT_ON_SEARCH,
    keyword
})
//4. Assign member to project
export const sgaAssignMemberToProject = (assignData) => ({
    type: SGA_ASSIGN_MEMBER_TO_PROJECT,
    assignData
})
//5. Remove member of project
export const sgaRemoveMemberOfProject = (removeData) => ({
    type: SGA_REMOVE_MEMBER_OF_PROJECT,
    removeData
})

//Project Dashboard - Detail of a project
//1. Get project detail from Backend
export const sgaDashboardGetProjectDetailApi = (projectId) => ({
    type: SGA_DASHBOARD_GET_PROJECT_DETAIL,
    projectId
})