import { ACT_JIRA_DETAIL_MODAL_PUSH_COMMENT_ARR_TO_REDUX } from "../../constants/JiraDetailCommentsConsts";
import { ACT_JIRA_DETAIL_CLICKED_TASK_ITEM_TO_EDIT } from "../../constants/JiraDetailComponentConsts";
import { ACT_JIRA_HOC_MODAL_DISPLAY_MODAL, ACT_JIRA_HOC_MODAL_HIDE_MODAL } from "../../constants/JiraHOCConstants/JiraHOCModalConsts";
import { ACT_JIRA_USER_MANAGEMENT_CLICK_CREATE_NEW_USER_BTN, ACT_JIRA_USER_MANAGEMENT_CLICK_EDIT_USER_BTN } from "../../constants/JiraUserManagement";

const initialState = {
    isModalVisible: false,
    innerComponentModal: <p>Default content!</p>,
    taskData: {},
    commentArr: [],
    userData: [],
    modalTitle: '',
}

export const JiraHOCModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACT_JIRA_HOC_MODAL_DISPLAY_MODAL:
            return { ...state, isModalVisible: true };

        case ACT_JIRA_HOC_MODAL_HIDE_MODAL:
            return { ...state, isModalVisible: false };

        case ACT_JIRA_DETAIL_CLICKED_TASK_ITEM_TO_EDIT:
            return {...state, isModalVisible: true, innerComponentModal: action.Component, taskData: action.taskData, modalTitle: ''};

        case ACT_JIRA_DETAIL_MODAL_PUSH_COMMENT_ARR_TO_REDUX:
            return {...state, commentArr: action.commentArr, userData: action.userData};

        case ACT_JIRA_USER_MANAGEMENT_CLICK_CREATE_NEW_USER_BTN:
            return {...state, isModalVisible: true, innerComponentModal: action.Component, modalTitle: 'Signup a new user!'};

        case ACT_JIRA_USER_MANAGEMENT_CLICK_EDIT_USER_BTN:
            return {...state, isModalVisible: true, innerComponentModal: action.Component, userData: action.userData, modalTitle: `Update user info ${action.userData.name}`};

        default:
            return state;
    }
}
