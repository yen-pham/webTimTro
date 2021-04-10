import React, { Component } from 'react';
import LoginModal from '../../login/index';

class Header extends Component {
    render() {
        return (
            <div className="header" style={{backgroundColor:this.props.background}}>
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
                  <LoginModal/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default Header;