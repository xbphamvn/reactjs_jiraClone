import { BaseServices } from "../BaseServices";

class JiraComponentsServices extends BaseServices {
    
    sgSubmitBtnAfterEditedProject = (values) => (
        this.put(`Project/updateProject?projectId=${values.id}`, values)
    )
}

export const jiraComponentsServices = new JiraComponentsServices();