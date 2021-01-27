import { BaseServices } from "../BaseServices";

class JiraCreateNewTaskServices extends BaseServices {
    //CREATE NEW TASK
    //1. Get all priority type
    sgCreateTaskGetAllPriorityType = () => this.get('Priority/getAll');
    //2. Get all project for create new task
    sgCreateTaskGetAllProject = () => this.get('Project/getAllProject');
    //3. Get all task type for create new task
    sgCreateTaskGetAllTaskType = () => this.get('TaskType/getAll');
    //4. Get all task status
    sgCreateTaskGetAllStatus = () => this.get('Status/getAll');
    //5. Get all members of project - usefulless because already get all projects
    sgCreateTaskGetAllMemberByProjectId = (projectId) => this.get(`Users/getUserByProjectId?idProject=${projectId}`);
    //6. Click submit create task button
    sgCreateTaskClickSubmitBtn = (taskData) => this.post('Project/createTask', taskData);
}

export const jiraCreateNewTaskServices = new JiraCreateNewTaskServices();