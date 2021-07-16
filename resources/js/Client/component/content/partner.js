import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import API from "../../../Admin/components/API/API";
import "./slider.css";
class Partner extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };

    }
    componentDidMount() {
        this.call.callAPI("getpartner", "get", "").then((response) => {
            this.setState({ data: response.data });
        });
    }
    render() {
        return (
            <section id="clients" class="clients">

                <div class="container" data-aos="zoom-in">

                    <div class="section-header">
                        <h2>   PARTNER </h2>
                    </div>
                    <div class="container-fluid">
                         <div class="row gx-2">
                             <div>
                                 <h4 style={{ color: 'rgb(34, 187, 234)' }, { backgroundColor: 'rgb(0, 191, 255)' }}>Main partners supporting PN Vietnam</h4>
                                 <p>With the desire to bring the best to PN Vietnam students, we appreciate the support of our partners in training and finance. You can support us, me in many ways such as in-kind support, training and knowledge sharing.</p>
                             </div>
                            <div class="col-12">
                                <div class="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">
                                    <div class="row">
                                        {
                                            this.state.data!=null &&this.state.data.map(e=>{
                                                if(e.type=='Main partner'){
                                                    return(
                                                        <div class="col-md-3" ><img class="w-100" src={'../images/' + e.image} alt="products" /></div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        


                            <div class="col-12">
                                <div class="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">
                                    <div>
                                        <h4 style={{ color: 'rgb(34, 187, 234)' }, { backgroundColor: 'rgb(0, 191, 255)' }}>Local partners supporting PN Vietnam</h4>

                                    </div>

                                </div>
                                <div className="gallery-slider swiper-container">
                                    <div className="swiper-wrapper align-items-center">
                                    {
                                            this.state.data!=null &&this.state.data.map(e=>{
                                                if(e.type=='Local partner'){
                                                    return(
                                                       
                                                        <div className="swiper-slide"><img src={'../images/' + e.image} className="img-fluid" alt="" /></div>
                                                    
                                                        )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                            </div>

                            
                        </div>

                    </div>


                </div>

            </section>
        );
    }
}
export default Partner;




