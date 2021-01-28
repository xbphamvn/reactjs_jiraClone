//GET BACKEND DATA TO CREATE NEW TASK
//1. Get all priority type
export const ACT_SET_ALL_PRIORITY_TYPES_TO_REDUX = 'ACT_SET_ALL_PRIORITY_TYPES_TO_REDUX';
//2. Get all projects
export const ACT_SET_ALL_PROJECTS_ARR_TO_REDUX = 'ACT_SET_ALL_PROJECTS_ARR_TO_REDUX';
//3. Get all task types
export const ACT_SET_ALL_TASK_TYPES_TO_REDUX = 'ACT_SET_ALL_TASK_TYPES_TO_REDUX';
//4. Get all task status
export const ACT_SET_ALL_TASK_STATUS_TO_REDUX = 'ACT_SET_ALL_TASK_STATUS_TO_REDUX';
//5. Get all task status
export const ACT_SET_ALL_MEMBER_BY_PROJECT_ID_TO_REDUX = 'ACT_SET_ALL_MEMBER_BY_PROJECT_ID_TO_REDUX';
//6. Set members of project default
export const ACT_SET_MEMBER_PROJECT_BY_ID_DEFAULT_TO_REDUX = 'ACT_SET_MEMBER_PROJECT_BY_ID_DEFAULT_TO_REDUX'

//SAGA ACTIONS-----------------------------------------------------------------------
//GET BACKEND DATA TO CREATE NEW TASK
//1. Get all priority type
export const SGA_GET_ALL_PRIORITY_TYPES_API = 'SGA_GET_ALL_PRIORITY_TYPES_API';
//2. Get all projects
export const SGA_GET_ALL_PROJECTS_ARR_API = 'SGA_GET_ALL_PROJECTS_ARR_API';
//3. Get all task type
export const SGA_GET_ALL_TASK_TYPES_API = 'SGA_GET_ALL_TASK_TYPES_API';
//4. Get all task status
export const SGA_GET_ALL_TASK_STATUS_API = 'SGA_GET_ALL_TASK_STATUS_API';
//5. Get all member by project ID
export const SGA_GET_ALL_MEMBER_BY_PROJECT_ID = 'SGA_GET_ALL_MEMBER_BY_PROJECT_ID';
//5. Submit button action saga
export const SGA_CREATE_NEW_TASK_SUBMIT_BTN = 'SGA_CREATE_NEW_TASK_SUBMIT_BTN';