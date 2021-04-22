import React, { Component } from 'react';
import './profile.css';
import { PlusOutlined, StarOutlined, CalendarOutlined, EnvironmentOutlined, MessageOutlined, InboxOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { connect } from 'react-redux';
class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
        profile:{}
    }
}
componentDidMount() {
  if(this.props.id=='self'){
    this.setState({profile: this.props.profile});
  }
}

  render() {
    return (
      <div className="infomation container">
        <div className="contact-info row">
          <div className='col-6 basic-info'>
            <div className="row">
              <div className="avt col-3">
               {this.props.curentUser&&Object.entries(this.props.curentUser)[2][1].providerId=="facebook.com" && (<img className="avt-img" src={this.props.profile?.picture.data.url}/>)
                }
                {
                  this.props.curentUser&&(Object.entries(this.props.curentUser)[2][1].providerId=="google.com")&&(<img className="avt-img" src={this.props.profile?.picture}/>)
                }
              </div>
              <div className="col-9 detail">
                <div className="name">{this.props.profile?.name}</div>
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
          <div className='col-6 extra-info '>
            <div className="d-flex">
             <div className="d-flex text-muted"><StarOutlined className="pr-2 mt-2 text-muted" />Đánh giá: </div>
             <span className="pl-2">4.0</span>
              <div className="d-flex pl-2">
                <StarOutlined className="text-warning mt-2" />
                <StarOutlined className="text-warning mt-2" />
                <StarOutlined className="text-warning mt-2" />
                <StarOutlined className="text-warning mt-2" />
                <StarOutlined className="text-muted mt-2" />
              </div>
             
             <a className="pl-2" href="#">1 đánh giá</a>
            </div>
            <div className="d-flex">
              <div className="d-flex text-muted"><CalendarOutlined className="pr-2 mt-2 text-muted" />Ngày tham gia: </div>
              <span className="pl-2">23/12/2015</span>
            </div>
            <div className="d-flex">
              <div className="d-flex text-muted"><EnvironmentOutlined className="pr-2 mt-2 text-muted" />Địa chỉ: </div>
              <span className="pl-2">79/I4 Âu Cơ, Phường 14, quận 11</span>
            </div>
            <div className="d-flex">
              <div className="d-flex text-muted"><MessageOutlined className="pr-2 mt-2 text-muted" />Phản hồi chat: </div>
              <span className="pl-2">Thỉnh thoảng (Phản hồi chậm)</span>
            </div>        
            
            
          </div>
        </div>
        <div className="page-container pt-4">
          <div className="page-title p-2">
            <strong>Đang bán</strong><span className="text-muted">&#160;- 15 tin</span>
          </div>
          <div className="page-content p-2 border-bottom">
            <div className="row">
              <div className="col-2">
                <img className="image" src="https://cdn.chotot.com/GCz9d5YlEFIfJEyTttDAsIkb3b5vCgSk5KaAKDJUYx4/preset:listing/plain/99c601d412e666f8fa9dbfbbc6364cf8-2684726065638244018.jpg"></img>
              </div>
              <div className="col-10">
                <strong className="h6">Phòng cao cấp ban công, 25m ngay giáp Vườn Lài</strong>
                <div className="text-danger h6">4.000.000đ</div>
                <div className="item-content d-flex"><InboxOutlined className="pt-1 pr-2" />
                  <span className='border-right pr-3 text-muted'>Môi giới</span>
                  <span className="border-right pr-3 pl-3 text-muted">22 phút trước</span>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content p-2 border-bottom">
            <div className="row">
              <div className="col-2">
                <img className="image" src="https://cdn.chotot.com/GCz9d5YlEFIfJEyTttDAsIkb3b5vCgSk5KaAKDJUYx4/preset:listing/plain/99c601d412e666f8fa9dbfbbc6364cf8-2684726065638244018.jpg"></img>
              </div>
              <div className="col-10">
                <strong className="h6">Phòng cao cấp ban công, 25m ngay giáp Vườn Lài</strong>
                <div className="text-danger h6">4.000.000đ</div>
                <div className="item-content d-flex"><InboxOutlined className="pt-1 pr-2" />
                  <span className='border-right pr-3 text-muted'>Môi giới</span>
                  <span className="border-right pr-3 pl-3 text-muted">22 phút trước</span>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content p-2 border-bottom">
            <div className="row">
              <div className="col-2">
                <img className="image" src="https://cdn.chotot.com/GCz9d5YlEFIfJEyTttDAsIkb3b5vCgSk5KaAKDJUYx4/preset:listing/plain/99c601d412e666f8fa9dbfbbc6364cf8-2684726065638244018.jpg"></img>
              </div>
              <div className="col-10">
                <strong className="h6">Phòng cao cấp ban công, 25m ngay giáp Vườn Lài</strong>
                <div className="text-danger h6">4.000.000đ</div>
                <div className="item-content d-flex"><InboxOutlined className="pt-1 pr-2" />
                  <span className='border-right pr-3 text-muted'>Môi giới</span>
                  <span className="border-right pr-3 pl-3 text-muted">22 phút trước</span>
                </div>
              </div>
            </div>
          </div>
          <div className="add-item p-2 border-bottom">
            <Button type="link" className="w-100 text-center font-weight-bold">
            Xem tất cả
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state?.profile,
  curentUser: state?.curentUser
});
export default connect(mapStateToProps, null)(Content);