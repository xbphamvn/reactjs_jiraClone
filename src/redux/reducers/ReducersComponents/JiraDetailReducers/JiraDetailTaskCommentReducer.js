import { ACT_JIRA_DETAIL_MODAL_DISPLAY_MAIN_COMMENT_EDITOR, ACT_JIRA_DETAIL_MODAL_HIDE_MAIN_COMMENT_EDITOR } from "../../../constants/JiraDetailCommentsConsts";

const initialState = {
    visibleMainCommentEditor: false
}

export const JiraDetailTaskCommentReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_JIRA_DETAIL_MODAL_DISPLAY_MAIN_COMMENT_EDITOR:
        return {...state, visibleMainCommentEditor: true};

    case ACT_JIRA_DETAIL_MODAL_HIDE_MAIN_COMMENT_EDITOR:
        return { ...state, visibleMainCommentEditor: false };

    default:
        return state;
    }
}
