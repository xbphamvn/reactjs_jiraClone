import { ACT_JIRA_DETAIL_CLICKED_TASK_ITEM_TO_EDIT } from "../../constants/JiraDetailComponentConsts";
import { ACT_JIRA_HOC_MODAL_DISPLAY_MODAL, ACT_JIRA_HOC_MODAL_HIDE_MODAL } from "../../constants/JiraHOCConstants/JiraHOCModalConsts";

const initialState = {
    isModalVisible: false,
    innerComponentModal: <p>Default content!</p>,
    taskData: {}
}

export const JiraHOCModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACT_JIRA_HOC_MODAL_DISPLAY_MODAL:
            return { ...state, isModalVisible: true };

        case ACT_JIRA_HOC_MODAL_HIDE_MODAL:
            return { ...state, isModalVisible: false };

        case ACT_JIRA_DETAIL_CLICKED_TASK_ITEM_TO_EDIT:
            return {...state, isModalVisible: true, innerComponentModal: action.Component, taskData: action.taskData};

        default:
            return state;
    }
}
