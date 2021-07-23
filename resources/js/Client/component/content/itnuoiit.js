import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { controllers } from 'chart.js';
import API from "../../../Admin/components/API/API";
import Swal from 'sweetalert2'
class ITNUOIIT extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            name: null,
            email: null,
            phone: null,
            type: null
        };

    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val
        })
    }
    createform = () => {
        let form = new FormData;
        form.append('name', this.state.name);
        form.append('email', this.state.email);
        form.append('phone', this.state.phone);
        form.append('type', this.state.type);
        return form;
    }
    onSubmit = (event) => {
        event.preventDefault();
        let form = this.createform();
        this.call.callAPI('itnuoiit', 'post', form).then(response => {
            this.myFormRef.reset();
            Swal.fire({
                title: 'Thank you very much!!',
                text: "Donate code has been sent to your email!",
                type: 'success',
            });
        })
    }
    render() {
        return (
            <section id="itnuoiit" class="selections">
                <div class="container" data-aos="zoom-in">
                    <div class="section-header">
                        <h2 class='it'> ITNUOIIT</h2>
                    </div>
                    <div class="it-content">
                        <div class="col-lg-4 col-md-8 col-sm-12">
                            <h3 class='it-title'><b>SUPPORT POOR STUDENTS PURSUIT THEIR IT COLLEGE TRAINING WITH</b></h3>
                            <br />
                            <h2 class='it-title'>#ITNUÔIIT</h2>
                            <br />
                            <p class='it-title'>
                                The campaign goal is to raise a fund of 70 million Vietnam dong per month from the IT community to cover academic and living expenses for PNV students in the next 7 months (Total: 500 million Vietnam dong at the end of 2021).
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <p class='video-title'><b>CROWDFUNDING CAMPAIGN IT RAISES IT</b></p>
                    <img class='it-image' src="../images/content/6-1.jpg"></img>
                    <img class='it-image' src="../images/content/7-1.jpg"></img>
                    <img class='it-image' src="../images/content/8-1.jpg"></img>
                    <img class='it-image-fix' src="../images/content/10-1.jpg"></img>
                    <img class='it-image' src="../images/content/11-1.jpg"></img>
                    <img class='it-image' src="../images/content/13-1.jpg"></img>
                    <div id="itnuoiit-donation-section" style={{color:'white',backgroundColor: '#54acbf',padding: '25px'}} class="et_pb_text et_pb_module et_pb_bg_layout_dark et_pb_text_align_left  et_pb_text_7">
                        <p><strong>HOW YOU CAN BECOME OUR MONTHLY SPONSOR</strong></p>
                        <p><strong>Step&nbsp;1:</strong>&nbsp;Fill your information in the box below to receive an email with a <strong>sponsorship&nbsp;</strong><strong>code&nbsp;</strong>(<em>sent within 24 hours</em>)</p>
                        <p><strong>Step&nbsp;2: </strong>After receiving the code, please kindly <strong>transfer the donation</strong> to PN Vietnam bank account with the syntax: <strong>ITraisesIT Support code</strong> (<em>Ex: ITraisesIT DNTT001)</em><span style={{fontWeight: '400'}}>:</span></p>
                        <ul>
                            <li>TECHCOMBANK</li>
                            <li>Account’s name: PASSERELLES NUMERIQUES(PN)</li>
                            <li>Account’s number: <strong>19134608156019</strong></li>
                            <li>Swift code: VTCBVNVX</li>
                        </ul>
                    </div>
                    <div class="col-md-12 mx-0">
                        <form id="msform" style={{ backgroundColor: '#54acbf' }} onSubmit={this.onSubmit} ref={(el) => this.myFormRef = el}>
                            <ul id="progressbar">
                                <h6 class='it-title-form'>Please provide your information here to get the donation code:</h6>
                            </ul>
                            <fieldset>
                                <div class="form-card">
                                    <h2 class="it-title-icon"><i class="fa fa-heart" aria-hidden="true"></i></h2>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <input type="text" class='info' name="name" placeholder="Your full name" onChange={this.handleChange} required />
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <input type="email" class='info' name="email" placeholder="Your email address" onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="phone" class='info' name="phone" placeholder="Your phone" onChange={this.handleChange} required />
                                    </div>
                                    <div class="form-group">
                                        <label>Donation type</label>
                                        <select name='type' class='info' onChange={this.handleChange} required>
                                            <option style={{ color: '#54acbf' }} value='one'>Once time</option>
                                            <option style={{ color: '#54acbf' }} value='month'>Monthly</option>
                                        </select>
                                    </div>
                                    <div class='submit-form'>
                                        <input type='submit' class='it-submit' value="Submit" />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    {/* <div class='row'>
                        <div class='col-md-12'>
                            <div class='video-responsive'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/v6BAKdfRq6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <br/>
                            <p class='video-title'><b>Passerelles numériques on VTV4</b></p>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}


export default ITNUOIIT;