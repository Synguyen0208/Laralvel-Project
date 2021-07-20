import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InforStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readMore: true,
        };

    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card" style={{marginTop: 15}} >

                    <img src={this.props.image}  />
                    <div className="container">
                        <h4> {this.props.name}</h4>
                      
                        <p> {this.state.readMore ? `${this.props.description.substring(0,100)}...`: this.props.description }</p>
                        <p style={{ color: 'green' }} onClick={() => this.setState({readMore: !this.state.readMore})}> {this.state.readMore ? 'Read Mode' : 'Compact'} </p>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}


export default InforStaff;