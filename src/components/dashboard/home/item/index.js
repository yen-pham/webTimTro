import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
    render() {
        // console.log(this.props.motel);
        // console.log(this.props.motel.images[0]);

        return (
            <div className="col-lg-4 col-md-12 col-sm-12 image-container cursor-pointer">
                <Link to={"/detail/"+this.props.motel.key}>
                <img  src={this.props.motel.images[0]?this.props.motel.images[0]:this.props.motel.pictures[0]}/>
                <div className="price">
                    <div className="price-value">{this.props.motel.price_string}</div>
                    <span>/tháng</span>
                </div>
                <div className="adress">
                    <div className="adress-value">61 Nguyễn Văn Linh, </div>
                    <span>60 m2</span>
                </div>
                <div className="view">
                    <div >
                        Xem chi tiết
               </div>
                </div> </Link>
            </div>
           
            
        );
    }
}

export default Item;