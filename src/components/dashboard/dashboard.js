import React, { Component } from 'react';
import { PhoneOutlined, SearchOutlined, RightOutlined, FacebookOutlined } from '@ant-design/icons';
import './dashboard.css';
import { Button, Menu, Checkbox, Pagination } from 'antd';
import Item from './home/item';
import Header from '../layout/header/index';
import { getMotelsAction } from '../../redux/action';
import { connect } from "react-redux";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Footer from '../layout/footer/index';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      motels: [],
      pageSize: 10,
    }
  }

  componentDidMount() {
    // console.log(this.props.motels);
    // this.props.getMotels();
    this.props.motels && this.pagination(1, 10);
    this.props.motels && this.setState({ total: this.props.motels.length });
  }

  onChange = (page, pageSize) => {
    // console.log(page);
    this.setState({
      current: page,
      pageSize: pageSize
    });
    this.props.motels && this.pagination(page, pageSize);

  };
  pagination = (num, size) => {
    let firstIn = Object.fromEntries(
      Object.entries(this.props.motels).slice((num - 1) * size, num * size)
    );
    this.setState({ motels: firstIn });
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
  goToPost= ()=>{
    !this.props.profile&& alert('Bạn phải đăng nhập để đăng tin !')  
  }
  render() {
    // console.log(this.state.motels);

    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <Header background="unset" />
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
          <div className="header-action pb-2">
            <Button className="btn-dt" type="primary"><Link onClick={()=>this.goToPost()} to={this.props.profile?"/post":'/'}>Đăng tin</Link></Button>
            <Button className="btn-search" type="primary">Tìm kiếm</Button>
          </div>
        </div>
        <div className="container dashboard-body pt-3">
          <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-12 action">
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
                    <span>Loại</span>
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
                  <div className="searchtype-selection">
                    <p className="mb-1 mt-2">Thành phố</p>
                    <select className="form-control">
                      <option>Chọn tỉnh, thành phố</option>
                      <option>Nhà</option>
                      <option>Đề nghị về phòng</option>
                      <option>Người tìm phòng</option>
                    </select>
                  </div>
                  <div className="searchtype-selection">
                    <p className="mb-1 mt-2">Quận,huyện</p>
                    <select className="form-control">
                      <option>Chọn quận, huyện</option>
                      <option>Nhà</option>
                      <option>Đề nghị về phòng</option>
                      <option>Người tìm phòng</option>
                    </select>
                  </div>
                  <div className="searchtype-selection">
                    <p className="mb-1 mt-2">Phường, xã, thị trấn</p>
                    <select className="form-control">
                      <option>Chọn phường, xã, thị trấn</option>
                      <option>Nhà</option>
                      <option>Đề nghị về phòng</option>
                      <option>Người tìm phòng</option>
                    </select>
                  </div>
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
            <div className="col-lg-9 col-md-7 col-sm-12 content row bg-light">
              {Object.keys(this.state.motels || {}).map(key => <Item key={key} motel={{ ...this.props.motels[key], key }} />)}

            </div>
            <div className="d-flex justify-content-center w100">
              <Pagination current={this.state.current} onChange={this.onChange} total={Object.keys(this.props.motels || {}).length} size={this.state.pageSize} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  motels: state?.motels,
  loading: state?.loading,
  profile: state?.profile,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getMotels: () => dispatch(getMotelsAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
