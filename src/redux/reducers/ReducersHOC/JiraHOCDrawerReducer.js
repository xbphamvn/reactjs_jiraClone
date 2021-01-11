import { ACT_HIDE_JIRA_HOC_DRAWER, ACT_DISPLAY_JIRA_HOC_DRAWER, ACT_EDIT_BTN_MANAGEMENT_PROJECT_ITEM, ACT_SET_SUBMIT_BTN_JIRA_HOC_DRAWER } from "../../constants/JiraCloneConsts";


const initialState = {
    visibleDrawer: false,
    innerComponentDrawer: <p>Default content!</p>,
    callBackFuncDrawer: () => (alert('Ok, callback redux!')),
}

export const JiraHOCDrawerReducer = (state = initialState, action) => {
    switch (action.type) {
    case ACT_DISPLAY_JIRA_HOC_DRAWER:
        return { ...state, visibleDrawer: true };

    case ACT_HIDE_JIRA_HOC_DRAWER:
        return { ...state, visibleDrawer: false };

    case ACT_EDIT_BTN_MANAGEMENT_PROJECT_ITEM:
        return { ...state, visibleDrawer: true, innerComponentDrawer: action.Component };
    
    case ACT_SET_SUBMIT_BTN_JIRA_HOC_DRAWER:
        return {...state, callBackFuncDrawer: action.callBackFunc};

    default:
        return { ...state };
    }
}