import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMotelAction } from '../../redux/action';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Content from './content';

class MotelDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id
        }
    }
    componentDidMount() {
        // console.log(this.state.id);
        this.props.getMotel(this.state.id);
    }
    
    render() {
        
        return (
            <div className="dashboard">
                <div >
                    <div>
                    <Header background="#337ae8" />

                    </div>
                    <div className="">
                                <div className="card-body">
                                    <Content />
                                </div>
                            </div>
                    <Footer/>
                </div>
                

            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {  
      getMotel: (id) => dispatch(getMotelAction(id))
    };
  };
export default connect(null, mapDispatchToProps)(MotelDetail);
