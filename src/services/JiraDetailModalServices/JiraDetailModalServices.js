import { BaseServices } from "../BaseServices";

class JiraDetailModalServices extends BaseServices {
    //Get all comment by task id
    sgGetAllCommentByTaskId = (taskId) => this.get(`Comment/getAll?taskId=${taskId}`);

    //Post a new comment
    sgPostNewComment = (commentData) => this.post('Comment/insertComment', commentData);
}

export const jiraDetailModalServices = new JiraDetailModalServices();