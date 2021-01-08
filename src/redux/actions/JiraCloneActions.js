import { SGA_JIRA_USER_LOGIN } from "../constants/JiraCloneConsts";

export const actUpdateUserLoginedData = () => ({
    type: ''
})

//Saga actions
export const sgaJiraUserLogin = (userData) => ({
    type: SGA_JIRA_USER_LOGIN,
    userData
})