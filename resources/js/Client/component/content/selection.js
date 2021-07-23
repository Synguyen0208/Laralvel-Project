import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { controllers } from 'chart.js';
import API from "../../../Admin/components/API/API";
import Swal from 'sweetalert2'
class Selection extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            id: null,
            name: null,
            birthday: null,
            card: null,
            email: null,
            phone: null,
            graduation_years: null,
            address: null,
            link_fb: null,
            major: null,
            graduation_score: null
        };

    }


    getData = () => {
        this.call.callAPI("getselections", "get", "").then((response) => {
            this.setState({ data: response.data });

        });
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.setState({
            data: this.handleSubmit
        })
        this.getData();
    }

    createForm = () => {
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('birthday', this.state.birthday);
        formData.append('card', this.state.card);
        formData.append('email', this.state.email);
        formData.append('phone', this.state.phone);
        formData.append('graduation_years', this.state.graduation_years);
        formData.append('address', this.state.address);
        formData.append('link_facebook', this.state.link_fb);
        formData.append('major', this.state.major);
        formData.append('graduation_score', this.state.graduation_score);

        return formData;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let form = this.createForm();
        this.call.callAPI("addselections", "post", form).then((response) => {
                this.myFormRef.reset();
                Swal.fire({
                    title: 'Hurray!!',
                    text: "Admission application has been submitted!",
                    type: 'success',
                });
        });
    }
    render() {
        return (
            <section id="selection" class="selections">

                <div class="container" data-aos="zoom-in">

                    <div class="section-header">
                        <h2> SELECTION</h2>
                    </div>
                    <div class="row ">
                        <div className="col-12">
                            <div>
                                Every year, from January to August, the admissions team of Passerelles numériques Vietnam travels to seven provinces in central Vietnam (Quang Binh, Quang Tri, Da Nang, Quang Nam, Quang Ngai, Kon Tum, Binh Dinh) .  <br /><br />
                            </div>
                            <div>
                                With the support from the Study Promotion Association in the provinces, Vietnamese women are introduced to local high schools and create favorable conditions for PN's enrollment activities in the provinces. <br /><br />
                            </div>
                            <div>
                                We always try to be able to maintain the ratio of female students in each course not less than 50%. However, above all, the first priority is still given to those with the most difficult circumstances.  <br /><br /><br />
                            </div>
                        </div>

                        <div className="col-sm-6 ">
                            <div>
                                <div style={{textAlign:'center'}}>
                                    <img src="./images/staffs/Ms_Diep.jpg"></img>
                                </div>
                            </div>

                            <div>
                                <p><br /><br />"I feel fortunate to be a member of the PNV Family, where I have the opportunity to work with professional colleagues, travel more and see lands with new people to open my mind and heart. heart.<br /><br /> As an Admissions Officer, I am proud to accept the mission of helping underprivileged students have the opportunity to study and change their lives.<br /><br /> I really hope the students will make their dreams come true!"</p>
                            </div>
                            <div>
                                <p><br /><b> Tran Thi Diep <br /></b>Frontline staff at PN Vietnam</p>
                            </div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="register">
                                <p style={{ textAlign: 'center', color: '#0e1b4d ' }} > <br /><br /><b>Students can register here </b></p>
                            </div>

                            <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Your name" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Birthday</label>
                                        <input type="date" className="form-control" name="birthday" placeholder="12/05/2001" onChange={this.handleInputChange} required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label > Identity Card</label>
                                        <input type="text" className="form-control" name="card" placeholder="Card" value={this.state.card} onChange={this.handleInputChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Your email" value={this.state.email} onChange={this.handleInputChange} required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Phone</label>
                                        <input type="number" className="form-control" name="phone" placeholder="Your phone" value={this.state.phone} onChange={this.handleInputChange} required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Graduation years</label>
                                        <input type="date" className="form-control" name="graduation_years" placeholder="2019" value={this.state.graduation_years} onChange={this.handleInputChange} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label >Address</label>
                                    <input type="text" className="form-control" name="address" placeholder="Fill in information about village, district, province" value={this.state.address} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Link facebook </label>
                                    <input type="text" className="form-control" name="link_fb" placeholder="Your link facebook" value={this.state.link_fb} onChange={this.handleInputChange} required />
                                </div>


                                <div className="form-row">

                                    <div className="form-group col-md-6">
                                        <label >Graduation Score </label>
                                        <input type="number" className="form-control" name="graduation_score" placeholder="Your graduation score" value={this.state.graduation_score} onChange={this.handleInputChange} required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Major</label>
                                        <select name="major" className="form-control" onChange={this.handleInputChange} required>
                                            <option value="IT" selected>Information technology</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>
                        </div>

                    </div>
                </div>

            </section>

        );
    }
}


export default Selection;