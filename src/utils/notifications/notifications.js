import { notification } from 'antd';

export const displayNotification = (_type, _message, _description) => {
    notification[_type]({
        message: _message,
        description: _description
    });
};
