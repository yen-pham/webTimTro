import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signInWithGoogle } from '../../../connectFirebase/firebase.utils';
import { auth } from '../../../connectFirebase/firebase.utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      // onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
              </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
              </Button>
              Or <a href="">register now!</a>
        </Form.Item>
        <Form.Item>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={3}>
              <div><img src="image/google.svg" width='40' onClick={signInWithGoogle}></img></div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div><img src="image/facebook.svg" width='40'></img></div>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;