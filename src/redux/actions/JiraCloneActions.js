import { SGA_JIRA_USER_LOGIN } from "../constants/JiraCloneConsts";



//Saga actions
export const sgaJiraUserLogin = (userData) => ({
    type: SGA_JIRA_USER_LOGIN,
    userData
})