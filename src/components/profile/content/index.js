import React, { Component } from 'react';
import './profile.css'
class Content extends Component {
  render() {
    return (
      <div className="infomation container">
        <div className="contact-info row">
          <div className='col-6 basic-info'>
            <div className="row">
              <div className="avt col-3">
                <img className="avt-img"></img>
              </div>
              <div className="col-9 detail">
                <div className="name">alo</div>
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