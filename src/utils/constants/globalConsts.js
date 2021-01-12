//Url
export const BE_PREFIX_JIRA_CLONE_URL = 'http://casestudy.cyberlearn.vn/api';

//Path of Route
export const JIRA_PATH_DASH_BOARD = '/dashboard';
export const JIRA_PATH_CREATE_PROJECT = '/createproject';
export const JIRA_PATH_PROJECT_MANAGEMENT = '/projectmanagement';

//Backend status
export const CODE_STATUS = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    SERVER_ERR: 500,
}

//Set item and get item to/from local storage
export const LOCALSTORAGE_TOKEN_NAME = 'accessToken';
export const LOCALSTORAGE_USER_DATA_NAME = 'userData';

//System Notification
//Notification status
export const NOTIFICATION_ANTD_SUCCESS = 'success';
export const NOTIFICATION_ANTD_ERROR = 'error';
export const NOTIFICATION_ANTD_INFO = 'info';
export const NOTIFICATION_ANTD_WARNING = 'warning';
//Notification messages
export const NOTIFICATION_ANTD_MESSAGE_SUCCESS = 'Delete project success!';
export const NOTIFICATION_ANTD_MESSAGE_INFO = 'For your information!';
export const NOTIFICATION_ANTD_MESSAGE_WARNING = 'System warning!';
export const NOTIFICATION_ANTD_MESSAGE_ERROR = 'Delete project fail!';