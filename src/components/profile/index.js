import React, { Component } from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Content from './content/index';
class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
        id : this.props.match.params.id,
        profile:{}
    }
}
  render() {
    return (
      <div className="dashboard">
                <div >
                    <div>
                    <Header background="#337ae8" />

                    </div>
                    <div className="">
                                <div className="card-body">
                                    <Content id={this.state.id}/>
                                </div>
                            </div>
                    <Footer/>
                </div>
                

            </div>
    );
  }
}

export default Profile;