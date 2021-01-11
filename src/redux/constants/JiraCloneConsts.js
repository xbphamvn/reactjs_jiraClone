export const ACT_UPDATE_USER_LOGINED_DATA = 'ACT_UPDATE_USER_LOGINED_DATA';
export const ACT_PUSH_HISTORY_PROP_TO_REDUX = 'ACT_PUSH_HISTORY_PROP_TO_REDUX';

//Create project action
export const ACT_CREATE_GET_PROJECT_CATEGORIES_API = 'ACT_CREATE_GET_PROJECT_CATEGORIES_API';

//Project management - get all project
//1. Handle get project data from backend
export const ACT_MANAGEMENT_GET_ALL_PROJECT_API = 'ACT_MANAGEMENT_GET_ALL_PROJECT_API';
//2. Click edit button
export const ACT_EDIT_BTN_MANAGEMENT_PROJECT_ITEM = 'ACT_EDIT_BTN_MANAGEMENT_PROJECT_ITEM';
//3. Update form (higher order component of drawer) actions
export const ACT_PUSH_PROJECT_ITEM_DATA_TO_REDUX = 'ACT_PUSH_PROJECT_ITEM_DATA_TO_REDUX';

//Jira HOC Drawer to edit and update project
export const ACT_DISPLAY_JIRA_HOC_DRAWER = 'ACT_DISPLAY_JIRA_HOC_DRAWER';
export const ACT_HIDE_JIRA_HOC_DRAWER = 'ACT_HIDE_JIRA_HOC_DRAWER';
export const ACT_SET_SUBMIT_BTN_JIRA_HOC_DRAWER = 'ACT_SET_SUBMIT_BTN_JIRA_HOC_DRAWER';


//Saga actions-------------------------------------------------
//Login
export const SGA_JIRA_USER_LOGIN = 'SGA_JIRA_USER_LOGIN';

//Create project
export const SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES = 'SGA_JIRA_CREATE_GET_PROJECT_CATEGORIES';
export const SGA_JIRA_CREATE_NEW_PROJECT = 'SGA_JIRA_CREATE_NEW_PROJECT';

//Project management - get all project
export const SGA_MANAGEMENT_GET_ALL_PROJECT = 'SGA_MANAGEMENT_GET_ALL_PROJECT';
export const SGA_SUBMIT_BTN_AFTER_EDITED_PROJECT = 'SGA_SUBMIT_BTN_AFTER_EDITED_PROJECT';