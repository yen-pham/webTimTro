import React, { Component } from 'react';
import '../../admin/admin.css';
import './navbar.css';
import Content from '../content/index'
import { FieldTimeOutlined, UserOutlined, TableOutlined, BarsOutlined } from '@ant-design/icons';
class Navbar extends Component {
  render() {
    return (
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <header className="topbar" data-navbarbg="skin5">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header" data-logobg="skin6">
              <a className="navbar-brand" href="dashboard.html">
                <b>
                  <div className="logo-icon" style={{ backgroundImage: "url('image/logo.png')" }}>
                  </div>
                </b>
                <span className="logo-text">
                  Thuecanho.com
                </span>
              </a>
              <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
            </div>
            <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
              <ul className="navbar-nav ms-auto d-flex align-items-center ml-auto u-unstyled">
                <li className=" in">
                  <form role="search" className="app-search d-none d-md-block me-3">
                    <input type="text" placeholder="Search..." className="form-control mt-0" />
                    <a href className="active">
                      <i className="fa fa-search" />
                    </a>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="row">
        <div className="left-sidebar col-lg-3 col-md-3 col-sm-12" data-sidebarbg="skin6">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="sidebar-item pt-2">
                  <a className="sidebar-link waves-effect waves-dark sidebar-link" href="dashboard.html" aria-expanded="false">
                    <FieldTimeOutlined className="px-3" />
                    <span className="hide-menu">Bảng điều khiển</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link waves-effect waves-dark sidebar-link" href="profile.html" aria-expanded="false">
                    <UserOutlined className="px-3" />
                    <span className="hide-menu">Người dùng</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link waves-effect waves-dark sidebar-link" href="basic-table.html" aria-expanded="false">
                    <TableOutlined className="px-3" />
                    <span className="hide-menu">Bài đăng</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link waves-effect waves-dark sidebar-link" href="fontawesome.html" aria-expanded="false">
                    <BarsOutlined className="px-3" />
                    <span className="hide-menu">Bài đăng chưa duyệt</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
          <Content />
        </div>
        </div>
        
        
      </div>
    );
  }
}

export default Navbar;