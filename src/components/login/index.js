import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { Component, Fragment } from 'react';
import Login from './login/index';
import Register from './register/index';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            currentUser: null,
            isLogin:true
        }
    }

    showModal = () => {
        this.setState({ modalVisible: true });
    };

    handleOk = () => {
        this.setState({ modalVisible: false });
    };

    handleCancel = () => {
        this.setState({ modalVisible: false,isLogin:true });
    };
    
    isRegister = () => {
        this.setState({isLogin:false});
    }
    isLogin = () => {
        this.setState({isLogin:true});
    }
    render() {
        console.log(this.state.isLogin);
        return (
            <Fragment>

                <Button type="primary" onClick={this.showModal}>Login</Button>
                <Modal title={this.state.isLogin?"Login":"Register"} visible={this.state.modalVisible} footer={null} onCancel={this.handleCancel}>
                    { this.state.isLogin?<Login isRegister={this.isRegister}/>:<Register isLogin={this.isLogin}/>}
                    {/*  */}
                </Modal>
            </Fragment>

        );
    }
}

export default LoginModal;