import React, { Component } from 'react';
import PostStep1 from './content/step1';
import Header from '../layout/header/index';
import Footer from '../layout/footer';
import './postStep1.css'
import { Slider, Steps } from 'antd';
import PostStep2 from './content/Step2';
import PostStep3 from './content/Step3';
import PostStep4 from './content/Step4';
import { getRegionsAction, postAction } from '../../redux/action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            step:1,
            status:[
                'process',
                'wait',
                'wait',
                'wait',
            ],
            post:{
                region_name:"",
                area_name:"",
                images:[]
            }      
            
        }
    }
    componentDidMount() {
        this.props.getRegions()
    }
    
    renderStep =(step)=>{
         switch (step) {
            case 1:
                return <PostStep1 onChange={this.onChange} post={this.state.post}/>
                break;
            case 2:
                return <PostStep2 onChange={this.onChangeImage} post={this.state.post}/>
                break;
            case 3:
                return <PostStep3 onChange={this.onChange} post={this.state.post}/>
                break;
            case 4:
                return <PostStep4 onChange={this.onChange} post={this.state.post}/>
                break;
            default:
                return <PostStep1   onChange={this.onChange} post={this.state.post}/>
                break;
        }
    }
    conti =()=>{
        let status=this.state.status;
        status[this.state.step-1]="finish";
        status[this.state.step]="process";
        this.setState({
            status:status,
            step: this.state.step+1
        });

    }
    finishPost =()=>{
        let post = this.state.post;
        // post.ward_name = this.props.regions[this.state.post.region_name]?.area[this.state.post.area_name]?.wards[this.state.post?.ward_name].name;
        post.area_name = this.props.regions[this.state.post.region_name]?.area[this.state.post.area_name]?.name;
        post.region_name = this.props.regions[this.state.post.region_name].name;
        this.props.profile?.id&& (post.accout_id = this.props.profile?.id);
        // console.log(this.props.profile?.id);
        postAction(post)
        
    }
    setStep = (step) =>{
        let status=this.state.status;
        status[this.state.step-1]!=="finish" && (status[this.state.step-1] ="wait") ;
        status[step-1]="process";
        this.setState({step:step});
    }
    onChange =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            post:{...this.state.post,
                ...{[name]:value}
            }
        });
    }
    onChangeImage = (newFileList) => {
        this.setState({post:{...this.state.post,fileList:newFileList.fileList}});
      };
    componentDidMount() {
        !this.props.profile && alert('Bạn cần đăng nhập để đăng bài!')
    }
    
    render() {
        console.log(this.props.history);
        return (<div>
                <Header />
                <div className="post">
                    <div className="_3OM1ogaI9EXK1udHCHiMUc">
                        <div className="container cc_cursor">
                            <div className="_3e2PT-m5RDT4EnxcKbgxhh">
                            <div className="_1tSca2zuB_aJcidrHIExzn cc_cursor">
                                <button className="btn _2p3WnWjUHsILOyrl86jwGD cc_pointer"><i className="fa fa-chevron-left cc_pointer">
                                </i></button>
                            </div>
                            <div className="text-center _3A2lqRgLx1otLuE9r4xG8S">
                                <strong /></div>
                            <div className="_1lX0U8p-l0Amc0Ks2nIZpA"><div className="text-right pull-right" />
                            </div>
                            <div className="clearfix">
                            </div></div>
                            <Steps size="small" current={this.state.step}>
                                <Steps.Step  title="Địa chỉ" status={this.state.status[0]} onClick={()=>this.setStep(1)}/>
                                <Steps.Step  title="Hình ảnh và video" status={this.state.status[1]} onClick={()=>this.setStep(2)} />
                                <Steps.Step  title="Diện tích và giá" status={this.state.status[2]} onClick={()=>this.setStep(3)}/>
                                <Steps.Step  title="Tiêu đề và mô tả" status={this.state.status[3]} onClick={()=>this.setStep(4)}/>
                            </Steps>,
                    </div>
                    </div>
                    {this.renderStep(this.state.step)}
                    <div className="footer navbar-fixed-bottom formFooter _29qtwZnBfU4ggKBsMxnCL0 cc_cursor">
                        <div className="container">
                            <div className="btn-group btn-group-justified cc_cursor">
                                {this.state.step<4?<a className="btn btn-lg btn-primary btn-primary-customized cc_pointer" type="button" style={{ width: '100%' }}onClick={()=>this.conti()}>
                                    <span style={{ verticalAlign: 'middle' }} >TIẾP TỤC</span> <span className="glyphicon glyphicon-menu-right cc_pointer" style={{ verticalAlign: 'middle' }}>
                                    </span>
                                </a>:
                                <a className="btn btn-lg btn-primary btn-primary-customized cc_pointer" type="button" style={{ width: '100%' }}onClick={()=>this.finishPost()}>
                                    <span style={{ verticalAlign: 'middle' }} >HOÀN THÀNH</span> <span className="glyphicon glyphicon-menu-right cc_pointer" style={{ verticalAlign: 'middle' }}>
                                    </span>
                                </a>}
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return({
    regions: state?.regions,
    profile: state?.profile,
  })};
  const mapDispatchToProps = (dispatch) => {
    return {  
      getRegions: () => dispatch(getRegionsAction())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Post);
