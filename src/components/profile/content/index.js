import React, { Component } from 'react';
import './profile.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
class Content extends Component {
  render() {
    return (
      <div className="infomation container">
        <div className="contact-info row">
          <div className='col-6 basic-info'>
            <div className="row">
              <div className="avt col-3">
                <img className="avt-img" src="https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"></img>
              </div>
              <div className="col-9 detail">
                <div className="name">Nguyễn Văn Linh</div>
                <div className="folow-row row mt-2">
                  <div className="col-6"><strong>100 </strong>lượt theo dõi</div>
                  <div className="col-6"><strong>0 </strong>đang theo dõi</div>
                </div>
                <div className="folow-button mt-2">
                  <Button type="primary" icon={<PlusOutlined />}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 extra-info'></div>
        </div>
      </div>
    );
  }
}

export default Content;