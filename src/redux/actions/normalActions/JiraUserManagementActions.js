import { ACT_JIRA_USER_MANAGEMENT_CLICK_CREATE_NEW_USER_BTN, ACT_JIRA_USER_MANAGEMENT_CLICK_EDIT_USER_BTN, ACT_JIRA_USER_MANAGEMENT_PUSH_USER_ARR_TO_REDUX, ACT_JIRA_USER_MANAGEMENT_PUSH_USER_DATA_TO_REDUX } from "../../constants/JiraUserManagement";

export const actJiraUserManagementPushUserArrToRedux = (userArr) => ({
    type: ACT_JIRA_USER_MANAGEMENT_PUSH_USER_ARR_TO_REDUX,
    userArr
});

export const actJiraUserManagementCreateNewUserBtn = (Component) => ({
    type: ACT_JIRA_USER_MANAGEMENT_CLICK_CREATE_NEW_USER_BTN,
    Component
});

export const actJiraUserManagementEitUserBtn = (Component) => ({
    type: ACT_JIRA_USER_MANAGEMENT_CLICK_EDIT_USER_BTN,
    Component
});

export const actJiraUserManagementPushUserDataToRedux = (userData) => ({
    type: ACT_JIRA_USER_MANAGEMENT_PUSH_USER_DATA_TO_REDUX,
    userData
})