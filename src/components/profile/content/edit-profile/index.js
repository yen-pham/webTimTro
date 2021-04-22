import React, { Component } from 'react';
import './edit-profile.css';
import { Input, Button } from 'antd';
import { EditOutlined, CameraOutlined } from '@ant-design/icons';
class EditProfile extends Component {
  render() {
    return (
      <div className="edit">
        <div className="page-title p-2">
          <strong>Thông tin cá nhân</strong>
        </div>
        <div className="page-content p-2 border-bottom">
          <div className="row">
            <div className="col-4">
              <img className="avt-img" src="https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"></img>

              <div className="camera-icon"><CameraOutlined /></div>
              
            </div>
            <div className="col-8">
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Họ và tên</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Nhập thông tin"
                    defaultValue="Chưa có thông tin"
                    suffix={
                      <EditOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Số điện thoại</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Nhập thông tin"
                    defaultValue="0773317108"
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Facebook</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Chưa kết nối Facebook"
                    suffix={
                      <Button type="primary">Kết nối</Button>
                    }
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Google</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Chưa kết nối Google"
                    suffix={
                      <Button type="primary">Kết nối</Button>
                    }
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Email</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Nhập thông tin"
                    defaultValue="Chưa có thông tin"
                    suffix={
                      <EditOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Địa chỉ</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Nhập thông tin"
                    defaultValue="Chưa có thông tin"
                    suffix={
                      <EditOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Giới tính</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Nhập thông tin"
                    defaultValue="Chưa có thông tin"
                    suffix={
                      <EditOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }
                  />
                </div>
              </div>
              <div className="filter-searchtype mb-2">
                <div className="searchtype-tilte pb-2">
                  <span>Mật khẩu</span>
                </div>
                <div className="searchtype-price">
                  <Input
                    placeholder="Nhập thông tin"
                    suffix={
                      <EditOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }
                    defaultValue="******"
                  />
                </div>
              </div>
              <span>Yêu cầu chấm dứt tài khoản</span>
            </div>
            <div className="filter-searchtype mb-2">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;