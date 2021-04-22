import { Switch, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeActiveUserAction,removeUserAction } from '../../../redux/action';
import { DeleteOutlined } from '@ant-design/icons';

class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            columns:[]
        }
    }
    convertToArray=(ob)=>{
        let res=[]
        Object.keys(ob).map(key=>res.push({...ob[key], key}))
        return res;
    }
    finIndex (key) {
        return Object.keys(this.props.users).findIndex(k=>k==key)+1
    }
    handleToggle =(key,event)  => {
        console.log(key);
        console.log(event);
        changeActiveUserAction(key);
      };
    remove =(key)=>{
        window.confirm("Bạn chắc chắn muốn xóa người này, thao tác này sẽ không được khôi phục!")&& removeUserAction(key)
       
console.log(key);
    }
    render() {
        return (
            <div className="content">
                <div className="header">
                    <div className="title pl-4">
                        Người dùng 
          </div>
                    <div>
                       {
                           this.props.users &&
                        <Table dataSource={this.convertToArray(this.props.users)}>
                        <Column title="STT " key="STT" dataIndex="key" render={key=> <Fragment>{this.finIndex(key)}</Fragment>}/>
                        <Column title="Tên đầy đủ " dataIndex="full_name" key="firstName" />
                        <Column title="Số điện thoại" dataIndex="phone" key="firstName" />
                        <Column title="Ảnh đại diện" dataIndex="display_image" key="display_image" render={display_image=>
                        <img width="100px" height="100px" src={display_image||'https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg'}/>
                        }/>
                        <Column title="Địa chỉ" dataIndex="address" key="active" />
                        <Column title="Hoạt động" dataIndex="key" key="key" render={
                            k => <Switch checked={this.props.users[k].is_active} onChange={(key,event)=>this.handleToggle(k,event)} />
                        } />
                        <Column title="Thao tác" dataIndex="key" key="action" render={
                            k => <DeleteOutlined onClick={(key)=>this.remove(k)} style={{color:"#e53911", fontSize:"20px"}}/>
                        } />
                        </Table>}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return({
    users: state?.users,
  })};
  const mapDispatchToProps = (dispatch) => {
    return {  
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(User);
