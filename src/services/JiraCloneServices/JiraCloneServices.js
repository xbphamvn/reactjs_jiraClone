import Axios from "axios";
import { BE_PREFIX_JIRA_CLONE_URL } from "../../utils/constants/globalConsts";

class JiraCloneServices {

    sgUserLogin = ({email, passWord}) => (
        Axios({
            method: 'POST',
            url: `${BE_PREFIX_JIRA_CLONE_URL}//Users/signin`,
            data: {email, passWord}
        })
    )
}

export const jiraCloneServices = new JiraCloneServices();