import { ACT_PUSH_HISTORY_PROP_TO_REDUX, ACT_UPDATE_USER_LOGINED_DATA, SGA_JIRA_USER_LOGIN } from "../constants/JiraCloneConsts";

export const actUpdateUserLoginedData = (data) => ({
    type: ACT_UPDATE_USER_LOGINED_DATA,
    data
});

export const actPushHistoryPropToRedux = (history) => ({
    type: ACT_PUSH_HISTORY_PROP_TO_REDUX,
    history
})

//Saga actions
export const sgaJiraUserLogin = (userData) => ({
    type: SGA_JIRA_USER_LOGIN,
    userData
})