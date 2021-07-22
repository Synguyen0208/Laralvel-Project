import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import API from "../../../Admin/components/API/API";
import Swal from 'sweetalert2'
class FormPartner extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            partner: [],
            action: "",
            message: "",
            name_company: "",
            address_company: "",
            company_representative: "",
            position_representative: "",
            phone_contact: "",
            email_contact: "",
            reason: "",
        };
    }
    getData = () => {
        this.call.callAPI("getbecomepartner", "get", "").then((response) => {
            this.setState({
                partner: response.data ? response.data : [],
            });
        });
    }
    handleInputChange = (e) => {
        let nam=e.target.name;
        let val=e.target.value;
        this.setState({ [nam]:val });
    };
    componentDidMount() {
        this.setState({
            action: this.handleSubmit
        })
        this.getData();
    }
    createForm = () => {
        let formData = new FormData();
        formData.append('name_company', this.state.name_company);
        formData.append('address_company', this.state.address_company);
        formData.append('company_representative', this.state.company_representative);
        formData.append('position_representative', this.state.position_representative);
        formData.append('phone_contact', this.state.phone_contact);
        formData.append('email_contact', this.state.email_contact);
        formData.append('reason', this.state.reason);
        return formData;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let form = this.createForm();
        this.call.callAPI("addbecomepartner", "post", form).then((response) => {
            this.myFormRef.reset();
                Swal.fire({
                    title: 'Thank you!!',
                    text: "Your application has been submitted!\nWe will contact you soon.",
                    type: 'success',
                });
        });
    }
    render() {
        return (
            <div class="col-md-8" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }} data-aos="zoom-in">
                <div class="section-header">
                    <h2> BECOME OUR PARTNER </h2>
                </div>
                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                    <form onSubmit={this.state.action} ref={(el) => this.myFormRef = el}>
                        <div class="row">
                            <div className="col-md-6 col-sm-12">
                                <input type="text" className="info" name="name_company" placeholder="Your company name" onChange={this.handleInputChange} required />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <input type="text" className="info" name="address_company" placeholder="Address" onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-6 col-sm-12">
                                <input type="text" className="info" name="company_representative" placeholder="Company Representative" onChange={this.handleInputChange} required />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <input type="text" className="info" name="position_representative" placeholder="Position" onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <div class='row'>
                            <div className="col-md-6 col-sm-12">
                                <input type="text" className="info" name="phone_contact" placeholder="Phone" onChange={this.handleInputChange} required />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <input type="email" className="info" name="email_contact" placeholder="Email" onChange={this.handleInputChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <textarea type="text" className="info" name="reason" placeholder="Reason" onChange={this.handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary"  >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormPartner;