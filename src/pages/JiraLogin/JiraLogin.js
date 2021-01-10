import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { sgaJiraUserLogin } from '../../redux/actions/JiraCloneActions';

export default function JiraLogin(props) {

    const dispatch = useDispatch();
    
    const onFinish = (values) => {
        dispatch(sgaJiraUserLogin(values));
    };

    return (
        <Form name="normal_login" className="login-form col-lg-6 mx-auto" style={{marginTop: '24%'}} initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="passWord" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="#forgotlink">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button> Or <a href="#loginlink">register now!</a>
            </Form.Item>
        </Form>
    )
}
