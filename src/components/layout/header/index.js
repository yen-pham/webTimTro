import { Image } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/action';
import LoginModal from '../../login/index';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      profile: this.props?.curentUser&&Object.entries(this.props.curentUser)[2][1].profile
    }
  }
  componentDidMount() {
    this.setState({
      profile: this.props?.curentUser&&Object.entries(this.props.curentUser)[2][1].profile

    });
  }
   toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
  render() {
    // console.log(this.props?.curentUser&&Object.entries(this.props.curentUser)[2][1].profile.url+"?height=500");
    // // this.props?.curentUser&&console.log("https://graph.facebook.com/" + Object.entries(this.props.curentUser)[1][1].accessToken.getUserId() + "/picture?type=large");
    // console.log(this.state.profile);
    // console.log(this.props?.curentUser&&Object.entries(this.props.curentUser)[2][1].profile.url);
    // console.log(typeof this.state.profile?.picture.data.url);
    return (
      <div className="header dashboard-header" style={{ backgroundColor: this.props.background }}>
        <div className="container header-navigation">
          <div className="logo">
            <img src="image/logo.png" alt="BigCo Inc. logo" />
          </div>
          <div className="navigation">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="/detail">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Báo giá</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">en vi</a>
              </li>

              {
              (this.props.curentUser&&Object.entries(this.props.curentUser)[2][1].providerId=="facebook.com")&&<li className="nav-item">
              <Avatar src={<img src={this.props.profile?.picture.data.url}/>}/>
              </li>
              }
              {this.props.curentUser&&(Object.entries(this.props.curentUser)[2][1].providerId=="google.com")&&<li className="nav-item">
              <Avatar src={<img src={this.props.profile?.picture}/>}/>
              </li>
              }
              <li className="nav-item">
                {this.props.curentUser ? <a className="nav-link" onClick={this.props.logout}>Đăng xuất</a> : <LoginModal />}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    curentUser: state?.curentUser,
    profile: state?.profile,
  })
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
