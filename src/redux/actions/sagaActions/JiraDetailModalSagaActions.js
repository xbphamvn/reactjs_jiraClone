import { SGA_JIRA_DETAIL_MODAL_GET_ALL_COMMENT_BY_TASKID, SGA_JIRA_DETAIL_MODAL_POST_NEW_COMMENT } from "../../constants/JiraDetailCommentsConsts";

export const sgaJiraDetailGetAllCommentByTaskId = (taskId) => ({
    type: SGA_JIRA_DETAIL_MODAL_GET_ALL_COMMENT_BY_TASKID,
    taskId
})

export const sgaJiraDetailModalPostNewComment = (commentData) => ({
    type: SGA_JIRA_DETAIL_MODAL_POST_NEW_COMMENT,
    commentData
});