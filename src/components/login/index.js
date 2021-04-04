import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { Component, Fragment } from 'react';
import Login from './login/index';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            currentUser: null
        }
    }

    showModal = () => {
        this.setState({ modalVisible: true });
    };

    handleOk = () => {
        this.setState({ modalVisible: false });
    };

    handleCancel = () => {
        this.setState({ modalVisible: false });
    };
    
    render() {
        return (
            <Fragment>

                <Button type="primary" onClick={this.showModal}>Login</Button>
                <Modal title="Login" visible={this.state.modalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Login />
                </Modal>
            </Fragment>

        );
    }
}

export default LoginModal;