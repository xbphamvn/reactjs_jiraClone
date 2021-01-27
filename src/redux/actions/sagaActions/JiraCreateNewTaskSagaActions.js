import { SGA_CREATE_NEW_TASK_SUBMIT_BTN, SGA_GET_ALL_PRIORITY_TYPES_API, SGA_GET_ALL_PROJECTS_ARR_API, SGA_GET_ALL_TASK_STATUS_API, SGA_GET_ALL_TASK_TYPES_API } from "../../constants/JiraCreateNewTaskConsts";

export const sgaCreateTaskGetAllPriorityType = () => ({
    type: SGA_GET_ALL_PRIORITY_TYPES_API
});

export const sgaCreateTaskGetAllProject = () => ({
    type: SGA_GET_ALL_PROJECTS_ARR_API
});

export const sgaCreateTaskGetAllTaskType = () => ({
    type: SGA_GET_ALL_TASK_TYPES_API
});

export const sgaCreateTaskGetAllTaskStatus = () => ({
    type: SGA_GET_ALL_TASK_STATUS_API
});

export const sgaCreateNewTaskApi = (values) => ({
    type: SGA_CREATE_NEW_TASK_SUBMIT_BTN,
    values
})