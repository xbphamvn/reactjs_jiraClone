import { SGA_JIRA_USER_MANAGEMENT_GET_ALL_USER, SGA_JIRA_USER_MANAGEMENT_DELETE_USER, SGA_JIRA_USER_MANAGEMENT_SIGNUP_NEW_USER, SGA_JIRA_USER_MANAGEMENT_UPDATE_USER } from "../../constants/JiraUserManagement";

export const sgaJiraManagementGetAllUserArr = () => ({
    type: SGA_JIRA_USER_MANAGEMENT_GET_ALL_USER
});

export const sgaJiraUserManagementDeleteUserBtn = (userId) => ({
    type: SGA_JIRA_USER_MANAGEMENT_DELETE_USER,
    userId
});

export const sgaJiraUserManagementSignupUserBtn = (signupData) => ({
    type: SGA_JIRA_USER_MANAGEMENT_SIGNUP_NEW_USER,
    signupData
});

export const sgaJiraUserManagementUpdateUserBtn = (updateData) => ({
    type: SGA_JIRA_USER_MANAGEMENT_UPDATE_USER,
    updateData
});