import { Button, Form, Input, Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostStep1 extends Component {
    render() {
        let {post}= this.props;
        console.log(this.props.post);
        this.props.regions && console.log(this.props.regions[this.props.post?.region_name]?.area[this.props.post.area_name]?.wards);
        return (
            <div className="container wXl5RTamVUQpIsQLT-GCD cc_cursor">
                <form className="_1mdvc2CcBloJ9uZbEWoqpZ"><div style={{ paddingBottom: '15px' }}>
                    <div style={{ paddingBottom: '2px' }}>
                        <label className="required"
                        ><strong>Chọn tỉnh thành</strong>
                        </label></div>
                    <div className><div>
                        <select className="nY9im20iq-Rva-bCJgHGR cc_cursor" name="region_name" onChange={event => this.props.onChange(event)} value={post.region_name}>
                            <option value= "" disabled>Chọn Tỉnh/Thành</option>
                        {
                                       this.props.regions&& Object.keys(this.props.regions||{}).map(key =>
                                            <option value={key}>{this.props.regions[key].name}</option>
                                        )
                                    }
                        </select></div>
                    </div>
                    <div className="clearfix" /></div><div style={{ paddingBottom: '15px' }}><div style={{ paddingBottom: '2px' }}>
                        <label className="required">
                            <strong>Quận, huyện</strong></label></div><div className><div>
                                <select className="nY9im20iq-Rva-bCJgHGR" name="area_name" onChange={event => this.props.onChange(event)} value={post.area_name}>
                                    <option disabled> Chọn Quận/Huyện</option>
                                {
                                   this.props.regions && Object.keys(this.props.regions[this.props.post?.region_name]?.area||{}).map(key =>
                                        <option value={key}>{this.props.regions[this.props.post.region_name].area[key].name}</option>
                                    )
                                } 
                                </select>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div style={{ paddingBottom: '15px' }}><div style={{ paddingBottom: '2px' }}>
                        <label className="required cc_cursor"><strong>Phường, xã, thị trấn</strong>
                        </label></div>
                        <div className><div>
                            <select className="nY9im20iq-Rva-bCJgHGR" name='ward_name' onChange={event => this.props.onChange(event)} value={post.ward_name}>
                                <option disabled>Chọn Phường/xã/thị trấn </option>
                                {
                                   this.props.regions && Object.keys(this.props.regions[this.props.post?.region_name]?.area[this.props.post.area_name]?.wards||{}).map(key =>
                                        <option value={key}>{this.props.regions[this.props.post.region_name].area[this.props.post.area_name].wards[key].name}</option>
                                    )
                                }
                            </select>
                        </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div style={{ paddingBottom: '15px', float: 'left', width: '22%' }}>
                        <div style={{ paddingBottom: '2px' }}>
                            <label className>
                                <strong>Số nhà</strong>
                            </label></div>
                        <div className>
                            <div className style={{ height: '38px', border: '1px solid rgb(204, 204, 204)', borderRadius: '4px' }}>
                                <input className placeholder="Số nhà" maxLength={30} style={{ width: '100%', lineHeight: '30px', marginTop: '3px', border: 'none', textAlign: 'center', outline: 'none', padding: '0px 5px' }} name='street_number' onChange={event => this.props.onChange(event)}value={post.street_number}/>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div style={{ paddingBottom: '15px', float: 'right', width: '75%' }}>
                        <div style={{ paddingBottom: '2px' }}><label className="required"><strong>Tên đường</strong></label>
                        </div>
                        <div className>
                            <div>
                                <div className style={{ height: '38px', border: '1px solid rgb(204, 204, 204)', borderRadius: '4px' }}>
                                    <input maxLength={100} style={{ width: '100%', lineHeight: '30px', marginTop: '3px', border: 'none', textAlign: 'center', outline: 'none', padding: '0px 5px' }} name="address" onChange={event => this.props.onChange(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div style={{ paddingBottom: '15px', float: 'right', width: "100%" }}>
                        <div style={{ paddingBottom: '2px' }}><label className="required"><strong>Số điện thoại</strong></label>
                        </div>
                        <div className>
                            <div>
                                <div className style={{ height: '38px', border: '1px solid rgb(204, 204, 204)', borderRadius: '4px' }}>
                                    <input maxLength={100} style={{ width: '100%', lineHeight: '30px', marginTop: '3px', border: 'none', textAlign: 'center', outline: 'none', padding: '0px 5px' }} type="number" name='phone' onChange={event => this.props.onChange(event)} value={post.phone}/>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />

                    </div>
                </form>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return ({
        regions: state?.regions,
    })
};
const mapDispatchToProps = (dispatch) => {
    return {
        //   getRegions: () => dispatch(getRegionsAction())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostStep1);
