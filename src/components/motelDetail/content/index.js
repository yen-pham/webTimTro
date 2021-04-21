import React, { Component } from 'react';
// import "./Content.css";
import './Content.css';
import { Carousel } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, UserOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import Slider from "react-slick";

// function callback(key) {
//   console.log(key);
// }
var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
};
class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            slider : 0
        }

    }
    sliderNumber = (key)=> {
        this.setState({slider:key})
    }
    render() {
        // console.log(this.props.motel);
        // console.log(this.state.slider);
        return (


            <div className="content container">
                <div className="row">
                    <div className="col-6">
                        <div className="slide-content ant">
                            {/* <div className="image-main"></div>
                            <div className="row">
                                <div className="col-4 image-child"></div>
                                <div className="col-4 image-child"></div>
                            </div> */}
                            <Carousel autoplay ref={ref => ref?.goTo(this.state.slider,true)}>
                                {
                                    this.props.motel?.images?.map(val => (<div>
                                        <img className="image-carousel" height="700px" src={val}></img>
                                    </div>))
                                }
                                {/* <div>
                                        <img className="image-carousel" height="700px" src={this.props.motel?.images[0]}></img>
                                    </div> */}
                            </Carousel>
                        </div>
                        <div className="slide-child mt-3 slick-lb">
                            
                            <Slider {...settings}>
                            {
                                this.props.motel?.images?.map((val,k) => (<div className="" onClick={(key)=>this.sliderNumber(k)}>
                                <img className="image-child" src={val}></img>
                            </div>))
                            }
                            </Slider>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="detail-content">
                            <div className="title">
                                <p className="text">{this.props.motel?.title}</p>
                            </div>
                            <div className="detail">
                                <p style={{'white-space': 'pre-line',overflow:'auto', height:"400px"}}>{this.props.motel?.body}</p>
                            </div>
                            <div className="infor row mt-5">
                                <div className="col-3 d-block">
                                    <div className="icon"><PhoneOutlined /></div>
                                    <div className="text mt-2">{this.props.motel?.phone}</div>
                                </div>
                                <div className="col-3 d-block">
                                    <div className="icon"><EnvironmentOutlined /></div>
                                    <div className="mt-2">{this.props.motel?.street_number+" "+this.props.motel?.address}</div>
                                </div>
                                <div className="col-3 d-block">
                                    <div className="icon"><DollarCircleOutlined /></div>
                                    <div className="mt-2">{this.props.motel?.price_string }/tháng- 20 m2</div>
                                </div>
                                <div className="col-3 d-block">
                                    <div className="icon"><UserOutlined /></div>
                                    <div className="text mt-2">{this.props.motel?.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    motel: state?.motelDetail,
});
export default connect(mapStateToProps, null)(Content);
