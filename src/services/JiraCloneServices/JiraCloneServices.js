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
    //3. Add member to project
    //3.1 Get member data for onSearch
    sgAddMemberToProjectOnSearch = (keyword) => (
        this.get(`Users/getUser?keyword=${keyword}`)
    )
    //3.2 Assign member to project
    sgAssignMemberToProject = (assignData) => (
        this.post(`Project/assignUserProject`, assignData)
    )
    //3.3 Remove a member of project
    sgRemoveMemberOfProject = (removeData) => (
        this.post(`Project/removeUserFromProject`, removeData)
    )
}

export const jiraCloneServices = new JiraCloneServices();