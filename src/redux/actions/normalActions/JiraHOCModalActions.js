import { ACT_JIRA_HOC_MODAL_DISPLAY_MODAL, ACT_JIRA_HOC_MODAL_HIDE_MODAL } from "../../constants/JiraHOCConstants/JiraHOCModalConsts";

export const actJiraHOCModalDisplayModal = () => ({
    type: ACT_JIRA_HOC_MODAL_DISPLAY_MODAL
});

export const actJiraHOCModalHideModal = () => ({
    type: ACT_JIRA_HOC_MODAL_HIDE_MODAL
});