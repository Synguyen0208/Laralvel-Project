
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './staff.css';
import API from "../../../Admin/components/API/API";
import "./slider.css";
import InforStaff from './inforStaff';


class Staff extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataShow: [],
            readMore: true,
            buttonSeeMore: true,
            localdata:[],
        };

    }

    setDataShow = (max) => {
        let itemData = [];
        let numberMax = max;
        let lengthData = this.state.data.length;
        if (max > 5) {
            numberMax = lengthData - 1,
                this.setState({ buttonSeeMore: false })
        } else {
            this.setState({ buttonSeeMore: true })
        }
        this.state.data.map((e, index) => {
            if (index < numberMax)
                itemData.push(e)
            else {
                this.setState({
                    dataShow: itemData,
                });
                return true;
            }

        })
    }


    componentDidMount() {
        this.call.callAPI("getstaff", "get", "").then((response) => {
            this.setState({ data: response.data });
            this.setDataShow(3)
        });
    }
    render() {
        return (
            <section id="staffss" class="clients">
                <div className="container-xl">
                    <div className="row">
                        <div class="section-header">
                            <h2>  EMPLOYEES </h2>
                        </div>
                        <div >
                            <h4> <b><i> BOARD MEMBERS </i> </b> </h4>
                        </div>

                        {
                            this.state.data != null && this.state.dataShow.map(e => {
                                if (e.department_id == 1) {
                                    return (
                                        <InforStaff image={e.image} name={e.name} description={e.description} />
                                    )
                                }
                            })
                        }
                        {
                            this.state.buttonSeeMore ? <p style={{ color: 'rgb(255, 136, 0)', textAlign: 'right', paddingTop: '30px' }} onClick={() => this.setDataShow(6)}> See All... </p>
                                : <p style={{ color: 'rgb(255, 136, 0)', textAlign: 'right', paddingTop: '30px' }} onClick={() => this.setDataShow(3)}> ...Compact </p>
                        }

                        <div >
                            <h4> <b><i> LOCAL MEMBERS </i> </b> </h4>
                            <a href="../images/staffs/PNV_OrgaChart_April2021.pdf" className="btn btn-primary"><b>Map</b ></a>
                        </div>

                        {
                            this.state.data != null && this.state.data.map(event => {
                                if (event.department_id ==3 && event.twitter ==1 ) {
                                    return (
                                        <div className="col-sm-4">
                                        <div className="card" style={{marginTop: 15}} >
                        
                                            <img src={'../images/staffs/' + event.image} />
                                            <div className="container">
                                                <h4> {event.name}</h4>
                                                <p> {event.description}</p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    
                                        )
                                }
                            })
                        }
                       

                    </div>
                </div>


            </section >
        );
    }
}


export default Staff;
