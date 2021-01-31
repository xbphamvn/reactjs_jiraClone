import { BaseServices } from "../BaseServices";

class JiraUserManagementServices extends BaseServices {
    //Get all user array
    sgGetAllUserApi = () => this.get('Users/getUser');
    //Delete user by id
    sgDeleteUserApi = (userId) => this.delete(`Users/deleteUser?id=${userId}`);
    //Update user info
    sgUpdateUserInfo = (updateData) => this.put('Users/editUser', updateData);
    //Signup a new user
    sgSignupNewUser = (signupData) => this.post('Users/signup', signupData);
}

export const jiraUserManagementServices = new JiraUserManagementServices();