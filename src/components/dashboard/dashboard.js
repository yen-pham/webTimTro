import React, { Component } from 'react';
import { PhoneOutlined, SearchOutlined, RightOutlined, FacebookOutlined } from '@ant-design/icons';
import './dashboard.css';
import { Button, Menu, Checkbox } from 'antd';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
          <div className="header">
            <div className="container header-navigation">
              <div className="logo">
                <img src="image/logo.png" alt="BigCo Inc. logo" />
              </div>
              <div className="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Báo giá</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">en vi</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Đăng nhập</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Đăng kí</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
              <div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div>
              <div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div><div className="col-4 image-container" style={{
                backgroundImage: `url("http://www.thuecanho.com/static/cache/listings/2021_13/alb10738_104510_161751391244.25-15-1-800x600.jpeg?v=1617515282")`
              }}>
                <div className="price">
                  <div className="price-value">10,000,000</div>
                  <span>vnd/tháng</span>
                </div>
                <div className="adress">
                  <div className="adress-value">61 Nguyễn Văn Linh, </div>
                  <span>60 m2</span>
                </div>
                <div className="view">
                  <div>
                    Xem chi tiết
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="dashboard-footer container pt-4">
          <div className="row">
            <div className="left-footer col-3">
              <div className="d-flex">
                <a>Đăng tin</a><RightOutlined />
              </div>
              
            </div>
            <div className="right-footer col-9 row">
              <div className="col-4 footer-submenu">
                <ul className="nav justify-content-center d-block">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Điều khoản thỏa thuận</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Quy chế hoạt động</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Quy định đăng tin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Hướng dẫn - Đăng tin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Hướng dẫn - Tìm kiếm</a>
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <img src="image/logo_TrueMoney.png" alt="BigCo Inc. logo" />
              </div>
              <div className="col-3 footer-fb">
                <div className="d-flex">
                  <a>Theo dõi!</a><FacebookOutlined />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-2 d-flex justify-content-center">
            <p>Thuecanho.com công cụ tìm kiếm hàng đầu Việt Nam về lĩnh vực cho thuê nhà ở © 2017-2021 Thuecanho.com. Trang web có bản quyền hợp pháp.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;