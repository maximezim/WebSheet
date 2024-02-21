import React, { FunctionComponent } from 'react';
import Cookies from 'js-cookie';
import {
  Form,
  Input,
  Checkbox,
  Button,
  message
  } from 'antd'; 

import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface GitHubLoginProps {
   onLoginSuccess: () => void;
}

const GitHubLogin: FunctionComponent<GitHubLoginProps> = ({ onLoginSuccess }) => {
    const onFinish = async (values: any) => {
        try {
          console.log('Success:', values);
          Cookies.set('github_login', 'true', { expires: 1 });
          message.success('Login successful!');
          onLoginSuccess(); // Call the callback function after successful login
        } catch (error) {
          console.error('Error:', error);
          message.error('Login failed!');
        }
      };
    
  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '24px', maxWidth: '300px', margin: 'auto' }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input size="large" prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GitHubLogin;
