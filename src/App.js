import './App.css';
import LoginModal from './components/login/index';
import 'antd/dist/antd.css'
import Dashboard from './components/dashboard/dashboard';
import AppRouter from './router/router';
import { connect } from 'react-redux';
import { getMotelsAction } from './redux/action';
import { Component } from 'react';
import loading from "./loading/loading.png";
import firebase from './connectFirebase/firebase.utils';
import users from "./user.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:[]
    }
  }
  
  componentDidMount() {
    this.props.getMotels(); 
  }
  
  render() {
    if(this.props.loading) return(<div className="loading-image"><img src={loading}/></div>) 
    else return(<div className="App">
     <AppRouter/>
    </div>)
  ;
}}
const mapStateToProps = (state) => {
  // console.log(state);
  return({
  motels: state?.motels,
  loading: state?.loading,
})};
const mapDispatchToProps = (dispatch) => {
  return {  
    getMotels: () => dispatch(getMotelsAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);