import './App.css';
import LoginModal from './components/login/index';
import 'antd/dist/antd.css'
import Dashboard from './components/dashboard/dashboard';
import AppRouter from './router/router';
import { connect } from 'react-redux';
import { getMotelsAction, getRegionsAction } from './redux/action';
import { Component } from 'react';
import loading from "./loading/loading.png";
import firebase from './connectFirebase/firebase.utils';
import users from "./user.json"
import {VIETNAM_BOUNDARY} from "./vietnamBoundaryData.ts"
import us from "./linhNghiepCopy.json";
import u from "./linhNghiep.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:[]
    }
  }
  componentDidMount() {
    this.props.getMotels(); 
    this.props.getRegions();
    // let vi ;
    // VIETNAM_BOUNDARY.map(val=>{
    //   vi= {...vi, ...{[val.Id]: {name:val.Name}}}
    //   val.Districts.map(v=>{
    //     vi[val.Id].area={...vi[val.Id]?.area, ...{[v.Id]:{name: v.Name}}}
    //     v.Wards.map(w=>{
    //       w.Name && (vi[val.Id].area[v.Id].wards={...vi[val.Id].area[v.Id]?.wards,...{[w.Id]: {name:w.Name}}})
    //     })
    //   });

    // })
    // firebase.database().ref("region").set(vi)
    // console.log(vi);
//     let regions= {}
//     firebase.database().ref("regions/regionFollowId/entities/regions").on('value', data => {
//         data.forEach(val => {
//           let tem= {[val.key]:val.val()};
//           // console.log(tem);
//           regions={...regions, ...{[val.key]:val.val()}}
//         });
//     })
//     let temp=regions;
//     console.log(regions);
//     // console.log('aaa');
//     Object.keys(regions).forEach((keyr)=>{
//       // console.log(regions[keyr].area);
//       Object.keys(regions[keyr].area).forEach(key=>{
//         // temp =
//         // console.log(this.getWards(key));
//         // VIETNAM_BOUNDARY.map(()=>console.log();)
// console.log(regions[keyr].area[key].name);
//                 let re =  VIETNAM_BOUNDARY.filter(d=>d.Name.search(regions[keyr].name)>0)[0];
//         let ar = re?.Districts.filter(di=>di.Name.search(regions[keyr].area[key].name)>0)[0];
//         console.log(re);
//         console.log(ar);
//         console.log();
//         // let w = VIETNAM_BOUNDARY.filter(d=>d.Name.search(regions[keyr].name))[0].Districts.filter(di=>di.Name==regions[keyr].area[key].name)[0].Wards;
//         // console.log(w);
//         // regions[keyr].area[key].wards = data.filter(d=>(d.name==egions[keyr].name&&d.district.fi==egions[keyr]))
//         // console.log(val.area[key]);
//         // firebase.database().ref("regions/regionFollowId/entities/regions/"+val.id+"/area/"+key+'/wards').set(this.getWards(key))
//      })

//     })
//     console.log(regions);
            // firebase.database().ref("region").set(regions)

    // this.getWards(1)
    // console.log(this.getWards(1));

  }
  getWards= (id)=>{
    let ward=[];
    fetch('https://cors-anywhere.herokuapp.com/https://gateway.chotot.com/v2/public/chapy-pro/wards?area='+id,{
      mode:'cors',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',

        'x-correlation-id': '406144c9956a47eca9cb56be36997af1',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      }
    }).then(response=>response.json())
    .then(data => {
      ward=data;
      console.log(data);
    })
    .catch(err => {
      console.log(err);
        // handle errors
    })
    return ward;
    // let temp={}
    // us.map((val,key)=>{
    //   console.log(u[key]);
    //   temp= {...temp,...{[val.account_oid] : {...val,...u[key].result}}};
    //   console.log(temp);
    // })
    // firebase.database().ref("user").set(temp);
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
    getMotels: () => dispatch(getMotelsAction()),
    getRegions: () => dispatch(getRegionsAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);