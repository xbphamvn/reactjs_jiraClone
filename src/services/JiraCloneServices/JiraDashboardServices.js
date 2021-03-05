import { BaseServices } from "../BaseServices";

class JiraDashboardServices extends BaseServices {

    sgGetProjectDetailApi = (projectId) => this.get(`Project/getProjectDetail?id=${projectId}`);

}

export const jiraDashboardServices = new JiraDashboardServices();