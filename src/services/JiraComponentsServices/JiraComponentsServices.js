import { BaseServices } from "../BaseServices";

class JiraComponentsServices extends BaseServices {
    //JIRA PROJECT MANAGEMENT
    sgSubmitBtnAfterEditedProject = values => this.put(`Project/updateProject?projectId=${values.id}`, values);
}

export const jiraComponentsServices = new JiraComponentsServices();