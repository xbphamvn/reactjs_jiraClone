import { BaseServices } from "../BaseServices";

class JiraCloneServices extends BaseServices {

    sgUserLogin = ({email, passWord}) => (
        this.post('Users/signin', {email, passWord})
    );

    //Create new project services
    //1. Get project categories
    sgGetProjectCategories = () => (
        this.get('ProjectCategory')
    )
    //2. Create new project api
    sgCreateNewProjectApi = (values) => (
        this.post('Project/createProjectAuthorize', values)
    )

    //Project management
    //1. Get all projects
    sgGetAllProjectApi = () => (
        this.get('Project/getAllProject')
    )
    //2. Delete a project item
    sgDeleteProjectItem = (projectId) => (
        this.delete(`Project/deleteProject?projectId=${projectId}`)
    )
}

export const jiraCloneServices = new JiraCloneServices();