import TextArea from 'antd/lib/input/TextArea';
import React, { Component } from 'react';

class PostStep4 extends Component {
    render() {
        return (
            <div className="container wXl5RTamVUQpIsQLT-GCD cc_cursor">
            <form className="_1mdvc2CcBloJ9uZbEWoqpZ"><div style={{ paddingBottom: '15px' }}>
                <div style={{ paddingBottom: '15px', float: 'right',width:"100%" }}>
                    <div style={{ paddingBottom: '2px' }}><label className="required"><strong>Tiêu đề</strong></label>
                    </div>
                    <div className>
                        <div>
                            <div className style={{ height: '38px', border: '1px solid rgb(204, 204, 204)', borderRadius: '4px' }}>
                                <input maxLength={100} style={{ width: '100%', lineHeight: '30px', marginTop: '3px', border: 'none', textAlign: 'center', outline: 'none', padding: '0px 5px' }}name="title" onChange={event => this.props.onChange(event)}/>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />

                </div>
                <div style={{ paddingBottom: '15px', float: 'right',width:"100%" }}>
                    <div style={{ paddingBottom: '2px' }}><label className="required"><strong>Mô tả</strong></label>
                    </div>
                    <div className>
                        <div>
                            <div className style={{  border: '1px solid rgb(204, 204, 204)', borderRadius: '4px' }}>
                                <textarea style={{height: '200px', width: '100%', lineHeight: '30px', marginTop: '3px', border: 'none', textAlign: 'center', outline: 'none', padding: '0px 5px' }} name="body" onChange={event => this.props.onChange(event)}/>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />

                </div>
                </div>
            </form>
        </div>
        );
    }
}

export default PostStep4;