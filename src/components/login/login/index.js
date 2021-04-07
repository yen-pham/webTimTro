import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signInWithGoogle, doSignInWithFacebook, doSignInWithEmailAndPassword } from '../../../connectFirebase/firebase.utils';
import { auth } from '../../../connectFirebase/firebase.utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      email:'',
      password:''
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
  loginFace =()=> {
    console.log('aa');
    doSignInWithFacebook()
    .then(socialAuthUser => {console.log(socialAuthUser);})
  }

  loginPass (email, password) {
    doSignInWithEmailAndPassword(email, password).then(socialAuthUser => {console.log(socialAuthUser);})
  }
  onChangeInput (event) {
    this.setState({
      [event.target.name] : event.target.value
    });
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
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" name="email"  onChange={(event)=>this. onChangeInput(event)}/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event)=>this. onChangeInput(event)}
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
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={(email, password)=>this.loginPass(this.state.email,this.state.password)}>
            Log in
              </Button>
              Or <span className="cursor-pointer" onClick={()=>this.props.isRegister()} href="">register now!</span>
        </Form.Item>
        <Form.Item>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={3}>
              <div><img src="image/google.svg" width='40' onClick={signInWithGoogle}></img></div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div onClick={()=>this.loginFace()}><img src="image/facebook.svg" width='40'></img></div>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;