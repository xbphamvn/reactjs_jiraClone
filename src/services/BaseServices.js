import Axios from "axios";
import { BE_PREFIX_JIRA_CLONE_URL, LOCALSTORAGE_TOKEN_NAME } from "../utils/constants/globalConsts";

export class BaseServices {

    get = (url) => (
        Axios({
            method: 'GET',
            url: `${BE_PREFIX_JIRA_CLONE_URL}/${url}`,
            headers: {Authorization: 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}
        })
    )

    post = (url, model) => (
        Axios({
            method: 'POST',
            url: `${BE_PREFIX_JIRA_CLONE_URL}/${url}`,
            data: model,
            headers: {Authorization: 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}
        })
    )

    put = (url, model) => (
        Axios({
            method: 'PUT',
            url: `${BE_PREFIX_JIRA_CLONE_URL}/${url}`,
            data: model,
            headers: {Authorization: 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}
        })
    )

    delete = (url) => (
        Axios({
            method: 'DELETE',
            url: `${BE_PREFIX_JIRA_CLONE_URL}/${url}`,
            headers: {Authorization: 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}
        })
    )
}