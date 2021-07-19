import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { controllers } from 'chart.js';

class Selection extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section id="selection" class="selections">

                <div class="container" data-aos="zoom-in">

                    <div class="section-header">
                        <h2>   SELECTION</h2>
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
                                <div>
                                    <img src="./images/staffs/Ms_Diep.jpg"></img>
                                </div>
                            </div>

                            <div>
                                <p><br/><br/>I feel fortunate to be a member of the PNV Family, where I have the opportunity to work with professional colleagues, travel more and see lands with new people to open my mind and heart. heart.<br/><br/> As an Admissions Officer, I am proud to accept the mission of helping underprivileged students have the opportunity to study and change their lives.<br/><br/> I really hope the students will make their dreams come true!</p>
                            </div>
                            <div>
                                <p><br/><b> TRAN Thi Diep <br /></b>Frontline staff at , PN Vietnam</p>
                            </div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="register">
                                <p style={{ color: 'blue ' }, { textAlign: 'center' }} > <br /><br />Students can register here</p>
                            </div>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Ho Thi Huou " />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Birtday</label>
                                        <input type="date" className="form-control" name="birthday" placeholder="12/05/2001" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label > Identity Card</label>
                                        <input type="text" className="form-control" name="card" placeholder="Card" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Email" />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Phone</label>
                                        <input type="number" className="form-control" name="phone" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Graduation years</label>
                                        <input type="date" className="form-control" name="graduation_years" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label >Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group">
                                    <label >Link facebook </label>
                                    <input type="text" className="form-control" name="link_fb" placeholder="" />
                                </div>


                                <div className="form-row">

                                    <div className="form-group col-md-6">
                                        <label >Graduation Score </label>
                                        <input type="number" className="form-control" name="graduation_score" placeholder="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Major</label>
                                        <select name="major" className="form-control">
                                            <option selected>Information technology</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            remember
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>


                        </div>

                    </div>
                </div>

            </section>

        );
    }
}


export default Selection;