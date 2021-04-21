import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { doCreateUserWithEmailAndPassword } from '../../../connectFirebase/firebase.utils';
import { auth } from '../../../connectFirebase/firebase.utils';
import { registerAction } from '../../../redux/action';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            email: '',
            password: ''
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        });
    }
    onChangeInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    createAccount = (email,password) => {
        this.props.register(this.state.email,this.state.password);
        this.props.isLogin();
    }
    render() {
        console.log(this.props.registerError);
        return (
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="email" name="email" onChange={(event) => this.onChangeInput(event)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password name="password"
                        onChange={(event) => this.onChangeInput(event)} />
                </Form.Item>

                <Form.Item
                    {...{
                        wrapperCol: {
                            offset: 8,
                            span: 16,
                        },
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={(email,password)=>this.createAccount(this.state.email,this.state.password)}>
                        Register
              </Button>
              <p>{this.props.registerError}</p>
                </Form.Item>
            </Form>
            // <div>register</div>
        );
    }
}
const mapStateToProps = (state) => {
    return({
        registerError: state?.registerError,
        loginSuccess: state?.loginSuccess
  })};
const mapDispatchToProps = (dispatch) => {
    return {  
      register: (email,password) => dispatch(registerAction(email,password)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
