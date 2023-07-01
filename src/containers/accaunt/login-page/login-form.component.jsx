import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const App = () => {
//   const onFinish = (values: any) => {
//     console.log('Received values of form: ', values);
//   };

  return (
  <div>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        type='email'
      >
        <Input placeholder="Username or email address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: ' Password...' }]}
      >
        <Input
       
          type="password"
          placeholder="Password"
        />
      </Form.Item>
    
        <Form.Item name="remember" valuePropName="checked" >
          <Checkbox  for="remember-me">Remember me</Checkbox>
        </Form.Item>
      

    <div className="form-btn-submit">
    <Form.Item>
        <Button type="submit" htmlType="submit" className="login-form-button--submit">
        Войти
        </Button>
      </Form.Item>
    </div>
    </Form>
  </div>
  );
};

export default App;