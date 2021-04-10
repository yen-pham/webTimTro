import React, { Component } from 'react';
import { PhoneOutlined, SearchOutlined, RightOutlined, FacebookOutlined } from '@ant-design/icons';
import './dashboard.css';
import { Button, Menu, Checkbox } from 'antd';
import Item from './home/item';
import Header from '../layout/header/index';
import { getMotelsAction } from '../../redux/action';
import { connect } from "react-redux";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props.motels);
  }
  

  menu = () => (
    <Menu>
      <Menu.Item key="1">
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <Header background="unset"/>
          <div className="header-center">
            <div className="center-title">
              <p>Thuecanho.com</p>
            </div>
            <div className="center-tagline">
              <p>Expat housing service. Work with our real estate agents in Hanoi.</p>
              <div className="tagline">
                <PhoneOutlined className="icon-phone" />
                <span>0773317108</span>
              </div>
            </div>
          </div>
          <div className="header-action">
            <Button className="btn-dt" type="primary">Đăng tin</Button>
            <Button className="btn-search" type="primary">Tìm kiếm</Button>
          </div>
        </div>
        <div className="container dashboard-body pt-3">
          <div className="row">
            <div className="col-3 action">
              <div className="filter-tabs">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Tin thông thường</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Trên bản đồ</a>
                  </li>
                </ul>

              </div>
              <div className="filter-forms">
                <div className="btn-search mb-2">
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search
                  </Button>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Loại bất động sản</span>
                  </div>
                  <div className="searchtype-selection">
                    <select className="form-control">
                      <option>Căn hộ</option>
                      <option>Nhà</option>
                      <option>Đề nghị về phòng</option>
                      <option>Người tìm phòng</option>
                    </select>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Địa điểm thành phố</span>
                  </div>
                  <div className="searchtype-selection">
                    <select className="form-control">
                      <option>Căn hộ</option>
                      <option>Nhà</option>
                      <option>Đề nghị về phòng</option>
                      <option>Người tìm phòng</option>
                    </select>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <input placeholder="Từ khóa" className="form-control"></input>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Giá (triệu VND)</span>
                  </div>
                  <div className="searchtype-price">
                    <input placeholder="Min" className="form-control"></input>
                    <span> - </span>
                    <input placeholder="Max" className="form-control"></input>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Kích thước</span>
                  </div>
                  <div className="searchtype-price">
                    <input placeholder="Min" className="form-control"></input>
                    <span> - </span>
                    <input placeholder="Max" className="form-control"></input>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Số phòng ngủ</span>
                  </div>
                  <div className="searchtype-price">
                    <input placeholder="Min" className="form-control"></input>
                    <span> - </span>
                    <input placeholder="Max" className="form-control"></input>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Nội thất</span>
                  </div>
                  <div className="searchtype-checkbox d-block">
                    <Checkbox>Trống</Checkbox>
                    <Checkbox>Được trang bị nội thất</Checkbox>
                  </div>
                </div>
                <div className="btn-search mb-2">
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-9 content row bg-light">
              {this.props.motels?.map(value=><Item motel={value}/>)}

            </div>
          </div>
        </div>
           </div>
    );
  }
}

const mapStateToProps = (state) => ({
  motels: state?.motels,
  loading: state?.loading,
});
const mapDispatchToProps = (dispatch) => {
  return {  
    getMotels: () => dispatch(getMotelsAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
