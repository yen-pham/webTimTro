import { Switch, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeActiveUserAction,getMotelsAction,removeUserAction } from '../../../redux/action';
import { DeleteOutlined } from '@ant-design/icons';

class Post

extends Component {
    constructor(props) {
        super(props);
        this.state={
            columns:[]
        }
    }
    componentDidMount() {
        this.getMotels();
    }
    
    convertToArray=(ob)=>{
        let res=[]
        Object.keys(ob).map(key=>res.push({...ob[key], key}))
        return res;
    }
    finIndex (key) {
        return Object.keys(this.props.motels).findIndex(k=>k==key)+1
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
                        Tất cả bài đăng
          </div>
                    <div>
                       {
                           this.props.motels &&
                        <Table dataSource={this.convertToArray(this.props.motels)}>
                        <Column title="STT " key="STT" dataIndex="key" render={key=> <Fragment>{this.finIndex(key)}</Fragment>}/>
                        <Column title="Tiêu đề" dataIndex="title" key="firstName" />
                        <Column title="Giá" dataIndex="price" key="firstName" />
                        <Column title="Số điện thoại" dataIndex="phone" key="firstName" />
                        <Column title="Ảnh" dataIndex="images" key="display_image" render={images=>
                        <img width="100px" height="100px" src={images[0]||'https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg'}/>
                        }/>
                        <Column title="Địa chỉ" dataIndex="address" key="active" />
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
    motels: state?.motels,
  })};
  const mapDispatchToProps = (dispatch) => {
    return {  
        getMotels: () => dispatch(getMotelsAction()),

    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Post);
