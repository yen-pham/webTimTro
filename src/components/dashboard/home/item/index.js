import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="col-4 image-container cursor-pointer"
                style={{
                    backgroundImage: `url(${this.props.motel.image})`
                }}>
                <div className="price">
                    <div className="price-value">10,000,000</div>
                    <span>vnd/tháng</span>
                </div>
                <div className="adress">
                    <div className="adress-value">61 Nguyễn Văn Linh, </div>
                    <span>60 m2</span>
                </div>
                <div className="view">
                    <div>
                        Xem chi tiết
               </div>
                </div>
            </div>
        );
    }
}

export default Item;