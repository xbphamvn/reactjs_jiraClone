import { ACT_JIRA_DETAIL_CLICKED_TASK_ITEM_TO_EDIT } from "../../constants/JiraDetailComponentConsts";

export const actJiraDetailClickedTaskItemToEdit = ({Component, taskData}) => ({
    type: ACT_JIRA_DETAIL_CLICKED_TASK_ITEM_TO_EDIT,
    Component,
    taskData
})