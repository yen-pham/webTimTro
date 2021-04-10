import './App.scss';
import LoginModal from './components/login/index';
import 'antd/dist/antd.css'
import Dashboard from './components/dashboard/dashboard';
import AppRouter from './router/router';
import { connect } from 'react-redux';
import { getMotelsAction } from './redux/action';
import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    console.log('aaapppp');
    this.props.getMotels();
    // getMotelsAction();
    console.log(this.props.motels);
  }
  
  render() {
      return (
    <div className="App">
     <AppRouter/>
    </div>
  );
}}
const mapStateToProps = (state) => {
  console.log(state);
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