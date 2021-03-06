import React, { Component } from 'react';
import { PhoneOutlined, SearchOutlined, RightOutlined, FacebookOutlined } from '@ant-design/icons';
import './dashboard.css';
import { Button, Menu, Checkbox, Pagination } from 'antd';
import Item from './home/item';
import Header from '../layout/header/index';
import { getMotelsAction } from '../../redux/action';
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:1,
      motels:[],
      pageSize:10,
    }
  }

  componentDidMount() {
    // console.log(this.props.motels);
    // this.props.getMotels();
    this.props.motels&&this.pagination(1,10);
    this.props.motels&&this.setState({total:this.props.motels.length});
  }
  
  onChange = (page,pageSize) => {
    // console.log(page);
    this.setState({
      current: page,
      pageSize: pageSize
    });
    this.props.motels&&this.pagination(page,pageSize);
    
  };
  pagination=(num,size)=>{
    let firstIn = Object.fromEntries(
      Object.entries(this.props.motels).slice((num-1)*size,num*size)
  );
    this.setState({motels:firstIn});
  }
  menu = () => (
    <Menu>
      <Menu.Item key="1">
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  render() {
    // console.log(this.state.motels);

    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <Header background="unset"/>
          <div className="header-center">
            <div className="center-title">
              <p>Thuecanho.com</p>
            </div>
            <div className="center-tagline">
              <p>Expat housing service. Work with our real estate agents in Hanoi.</p>
              <div className="tagline">
                <PhoneOutlined className="icon-phone" />
                <span>0773317108</span>
              </div>
            </div>
          </div>
          <div className="header-action pb-2">
            <Button className="btn-dt" type="primary">????ng tin</Button>
            <Button className="btn-search" type="primary">T??m ki???m</Button>
          </div>
        </div>
        <div className="container dashboard-body pt-3">
          <div className="row">
            <div className="col-3 action">
              <div className="filter-tabs">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Tin th??ng th?????ng</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Tr??n b???n ?????</a>
                  </li>
                </ul>

              </div>
              <div className="filter-forms">
                <div className="btn-search mb-2">
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search
                  </Button>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Lo???i b???t ?????ng s???n</span>
                  </div>
                  <div className="searchtype-selection">
                    <select className="form-control">
                      <option>C??n h???</option>
                      <option>Nh??</option>
                      <option>????? ngh??? v??? ph??ng</option>
                      <option>Ng?????i t??m ph??ng</option>
                    </select>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>?????a ??i???m th??nh ph???</span>
                  </div>
                  <div className="searchtype-selection">
                    <select className="form-control">
                      <option>C??n h???</option>
                      <option>Nh??</option>
                      <option>????? ngh??? v??? ph??ng</option>
                      <option>Ng?????i t??m ph??ng</option>
                    </select>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <input placeholder="T??? kh??a" className="form-control"></input>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>Gi?? (tri???u VND)</span>
                  </div>
                  <div className="searchtype-price">
                    <input placeholder="Min" className="form-control"></input>
                    <span> - </span>
                    <input placeholder="Max" className="form-control"></input>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>K??ch th?????c</span>
                  </div>
                  <div className="searchtype-price">
                    <input placeholder="Min" className="form-control"></input>
                    <span> - </span>
                    <input placeholder="Max" className="form-control"></input>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>S??? ph??ng ng???</span>
                  </div>
                  <div className="searchtype-price">
                    <input placeholder="Min" className="form-control"></input>
                    <span> - </span>
                    <input placeholder="Max" className="form-control"></input>
                  </div>
                </div>
                <div className="filter-searchtype mb-2">
                  <div className="searchtype-tilte">
                    <span>N???i th???t</span>
                  </div>
                  <div className="searchtype-checkbox d-block">
                    <Checkbox>Tr???ng</Checkbox>
                    <Checkbox>???????c trang b??? n???i th???t</Checkbox>
                  </div>
                </div>
                <div className="btn-search mb-2">
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-9 content row bg-light">
              {Object.keys(this.state.motels||{}).map(key=><Item key={key} motel={{...this.props.motels[key],key}}/>)}

            </div>
            <div className="d-flex justify-content-center w100">
            <Pagination current={this.state.current} onChange={this.onChange} total={Object.keys(this.props.motels||{}).length} size={this.state.pageSize}/>
            </div>
          </div>
        </div>
           </div>
    );
  }
}

const mapStateToProps = (state) => ({
  motels: state?.motels,
  loading: state?.loading,
});
const mapDispatchToProps = (dispatch) => {
  return {  
    getMotels: () => dispatch(getMotelsAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
