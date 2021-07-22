import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/donate.css';
import Coutry from '../small_component/country';
import $ from 'jquery';
import API from '../../../Admin/components/API/API';
import GooglePayButton from '@google-pay/button-react';
class DonateForm extends Component {
    call = new API;
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            err: null,
            first_name: null,
            last_name: null,
            birth_day: null,
            address: null,
            city: null,
            country: null
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        document.getElementById('next').click();
    }
    setAmount = (e) => {
        this.setState({
            amount: e.target.value
        });
        if (parseInt(e.target.value) > 0) {
            document.getElementById('paynext').style.display = 'inline-block';
        }

        else
            document.getElementById('paynext').style.display = 'none';
    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val
        })
    }
    test = () => {
        let form = new FormData;
        form.append('amount', 500);
        this.call.callAPI('test', 'post', form).then(response => {
            console.log(response.data)
        })
    }
    createForm = () => {
        let form = new FormData;
        form.append('first_name', this.state.first_name);
        form.append('last_name', this.state.last_name);
        form.append('emaill', this.state.email);
        form.append('birth_day', this.state.birth_day);
        form.append('address', this.state.address + "-" + this.state.city + "-" + this.state.country);
        return form;
    }
    donateGGP = (data) => {
        let form = new FormData;
        form = this.createForm();
        form.append('description', data.paymentMethodData.description);
        form.append('cardDetails', data.paymentMethodData.info.cardDetails);
        form.append('cardNetwork', data.paymentMethodData.info.cardNetwork);
        form.append('token', data.paymentMethodData.tokenizationData.token);
        form.append('amount', this.state.amount);
        form.append('type', data.paymentMethodData.type);
        this.call.callAPI('donateGGP', 'post', form).then(response => {
            if (response.data.Error == 0) {
                document.getElementById('success').click();
            }
        })
    }
    paypal = () => {
        let call = new API;
        let form = new FormData;
        if (this.state.first_name != null) {
            form = this.createForm();
        }
        document.getElementById('paypal-button-container').innerHTML = "";
        let amount = 100;
        if (this.state.amount > 0)
            amount = this.state.amount;
        window.paypal.Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: amount
                        },
                    }]
                });
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    document.getElementById('success').click();
                    form.append('id', details.id);
                    form.append('create_time', details.create_time);
                    form.append('status', details.status);
                    form.append('email', details.payer.email_address);
                    form.append('country_code', details.payer.address.country_code);
                    form.append('given_name', details.payer.name.given_name);
                    form.append('surname', details.payer.name.surname);
                    form.append('payer_id', details.payer.payer_id);
                    form.append('currency_code', details.purchase_units[0].amount.currency_code);
                    form.append('amount', amount);
                    call.callAPI('donate', 'post', form).then(response => {
                        console.log(response.data)
                    })
                });
            }
        }).render('#paypal-button-container');
    }
    render() {

        return (
            <div class="col-sm-12">
                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                    <div class="row">
                        <div class="col-md-12 mx-0">
                            <form id="msform" onSubmit={this.onSubmit}>
                                <ul id="progressbar">
                                    <li class="active" id="personal"><strong>Personal</strong></li>
                                    <li id="money"><strong>Money</strong></li>
                                    <li id="payment"><strong>Payment</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                </ul>
                                <fieldset>
                                    <div class="form-card">
                                        <h2 class="fs-title">Personal Information</h2>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <input type="text" class='info' name="first_name" placeholder="First Name" onChange={this.handleChange} required />
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <input type="text" class='info' name="last_name" placeholder="Last Name" onChange={this.handleChange} required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class='info' name="email" placeholder="Email" onChange={this.handleChange} required />
                                        </div>
                                        <div class="form-group">
                                            <label>Date of birth</label>
                                            <input type="date" class='info' name="birth_day" onChange={this.handleChange} placeholder="Date of birth *" required />
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <label>Country</label><br />
                                                <Coutry change={this.handleChange} />
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <label>City*</label>
                                                <input type="text" class='info' name="city" placeholder="City *" onChange={this.handleChange} required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" class='info' name="address" placeholder="Address *" onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <button className="nxt">Next Step</button>
                                    <input type="button" style={{ display: "none" }} id='next' name="next" class="next action-button info" value="Next Step" />
                                </fieldset>
                                <fieldset>
                                    <div class="form-card">
                                        <h2 class="fs-title">Payment Information</h2>
                                        <div class="donate_form">
                                            <div class="row">
                                                <div class="col-xs-12 tabs">
                                                    <a href="#monthly" class="btn_styles monthly active">
                                                        Donate
                                                    </a>
                                                </div>
                                            </div>
                                            <form target="_top" id="monthly">
                                                <div class="row">
                                                    <div class="col-xs-12 tabs">
                                                        <button onClick={this.setAmount} class="btn_styles sum-10 donat-box" value="20">$20</button>
                                                        <button onClick={this.setAmount} class="btn_styles sum-10 donat-box" value="50">$50</button>
                                                        <button onClick={this.setAmount} class="btn_styles sum-10 donat-box active" value="$100">$100</button>
                                                        <br /><br />
                                                        <button onClick={this.setAmount} class="btn_styles sum-10 donat-box" value="$100">$200</button>
                                                        <button onClick={this.setAmount} class="btn_styles sum-10 donat-box" value="$300">$300</button>
                                                        <button onClick={this.setAmount} class="btn_styles sum-10 donat-box" value="$500">$500</button>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <div class="description">Select a program/(s) and enter an amount to give per month</div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <div class="body">

                                                            <div class="input">
                                                                <input type="number" class='amount' name="amount" onChange={this.setAmount} value={this.state.amount} />
                                                                <div class="addition">USD</div>
                                                            </div>
                                                            <div class="info">Madagascar Mobile Library Donation</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input id='amount' onClick={this.setAmount} type='number' style={{ display: 'none' }} />
                                            </form>
                                        </div>
                                    </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                    <input onClick={this.paypal} type="button" id='paynext' style={{ display: 'none' }} name="next" class="next action-button info" value="Next Step" />
                                </fieldset>
                                <fieldset>
                                    <div class="form-card">
                                        <h2 class="fs-title text-center">Choose donate method</h2> <br /><br />
                                        <br /><br />
                                        <div class="row justify-content-center">
                                            <div class="col-7 text-center">
                                                <div id="paypal-button-container"></div>
                                                <GooglePayButton
                                                    environment="PRODUCTION"
                                                    paymentRequest={{
                                                        apiVersion: 2,
                                                        apiVersionMinor: 0,
                                                        allowedPaymentMethods: [
                                                            {
                                                                type: 'CARD',
                                                                parameters: {
                                                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                                    allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"],
                                                                },
                                                                tokenizationSpecification: {
                                                                    type: 'PAYMENT_GATEWAY',
                                                                    parameters: {
                                                                        gateway: 'example',
                                                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        merchantInfo: {
                                                            merchantId: '12345678901234567890',
                                                            merchantName: 'Demo Merchant',
                                                        },
                                                        transactionInfo: {
                                                            totalPriceStatus: 'FINAL',
                                                            totalPriceLabel: 'Total',
                                                            totalPrice: this.state.amount,
                                                            currencyCode: 'USD',
                                                            countryCode: 'US',
                                                        },
                                                    }}
                                                    onLoadPaymentData={paymentRequest => {
                                                        this.donateGGP(paymentRequest);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                    <input onClick={this.paypal} type="button" id='success' style={{ display: 'none' }} name="next" class="next action-button info" value="Next Step" />
                                </fieldset>
                                <fieldset>
                                    <div class="form-card">
                                        <h2 class="fs-title text-center">Thank you for your donation</h2>
                                        <br /><br />
                                        <div class="row justify-content-center">
                                            <div class="col-7 text-center">
                                                <img class="logo" src="/assets4/img/pn-logo-footer.png"></img>
                                                <p>Thanks to your regular generosity we are able to run our activities and maximize our impact.</p>
                                            </div>
                                            <h4 class="fy-title">WHY GIVE TO PN?</h4>
                                            <p>Passerelles numériques based its training on a holistic educative approach :</p>
                                            <img class="image-donate" src="/images/content/whygive.png"></img>
                                        </div>
                                    </div>
                                    <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DonateForm.propTypes = {

};

export default DonateForm;