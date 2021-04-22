import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersAction } from '../../redux/action';
import Navbar from './navbar/index';

class Admin extends Component {
    componentDidMount() {
        this.props.getUsers()
    }
    
    render() {
        return (
          <div className="d-flex">
            <Navbar/>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return({
  })};
  const mapDispatchToProps = (dispatch) => {
    return {  
      getUsers: () => dispatch(getUsersAction()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Admin);
