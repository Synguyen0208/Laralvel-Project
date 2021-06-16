import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import "./slider.css";
class Partner extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section id="clients" class="clients">
                
                <div class="container" data-aos="zoom-in">
                    <div class="section-title">
                        <span>Our partner</span>
                        <h2>Our partner</h2>
                    </div>
                    <div class="container-fluid">
                        <div class="row gx-2">
                            <div class="col-12">
                                <div class="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Agility-IO.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Code-engine.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Orient.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/07/seadev.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/06/Logigear-logo.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Neolab.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Sunbytes.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Sunbytes.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Sunbytes.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "10%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Sunbytes.png" alt="products" />
                                        </div>
                                    </div>
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