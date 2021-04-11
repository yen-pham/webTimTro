import React, { Component } from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Content from './content/index';
class Profile extends Component {
  render() {
    return (
      <div className="dashboard">
                <div >
                    <div>
                    <Header background="#337ae8" />

                    </div>
                    <div class="">
                                <div class="card-body">
                                    <Content />
                                </div>
                            </div>
                    <Footer/>
                </div>
                

            </div>
    );
  }
}

export default Profile;