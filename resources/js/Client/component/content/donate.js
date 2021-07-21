import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DonateForm from './DonateForm';

class Donate extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section class="donate-area relative section-gap" id="donate">
                <div class="section-header">
                    <h2>Donate Now to Passerelles numériques</h2>
                    <p>
                        Thanks to your regular generosity we are able to run our activities and maximize our impact.
						</p>
                </div>
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-12 contact-left">
                            <div class="single-info">
                                <p>
                                    You can make a difference and improve the lives of underprivileged youths by helping Passerelles numériques in many different ways.
								</p>
                            </div>
                            <div class="single-info">
                                <p>
                                    Sponsor our actions on a monthly basis. Because it gives us long term stability, this regular donation is one of the most convenient and powerful help you can provide to Passerelles numériques.
                                    You can also make a one-off donation and contribute to Passerelles numériques’ program. It’s easy and secure! You can use our secure donation form below.
								</p>
                            </div>
                        </div>
                        <div class="col-md-8 contact-right">
                            <DonateForm />
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="payment-method">
                                        We Accept :   <img src="images/payment.png" alt="" />
                                    </p>
                                </div>
                                <div class="col-md-12">
                                    <p class="payment-method">
                                    <i class="fa fa-lock" aria-hidden="true" style={{fontSize:'2rem', color:'#ff9933'}}></i><span style={{color:'#ff9933', marginLeft:'7px', fontSize:'1.5rem'}}>100% secured payment</span>
                                    </p>
                                    <p>All your bank details are completely secured throughout the payment process. The data is encrypted with SSL and we guarantee the safe treatment of your transaction.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Donate;