import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../../Admin/components/API/API';

class Key_date extends Component {
    call = new API;
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        this.call.callAPI('keydate', 'get', '').then(response => {
            console.log(response.data)
            this.setState({
                data: response.data
            })
        })
    }
    render() {
        return (
            <section id="schedule" class="section-with-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h2>Key dates</h2>
                        <p>Here is our Key Dates</p>
                    </div>

                    <ul class="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
                        <li class="nav-item">
                            <a class="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Our organization</a>
                        </li>
                        <br />
                        <br />
                        <li class="nav-item">
                            <a class="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Viet Nam</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Cambodia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#day-4" role="tab" data-bs-toggle="tab">Philippines</a>
                        </li>
                    </ul>

                    <h3 class="sub-heading">Passerelles numériques is a non-profit organization under French law, created in 2005, operating in three Asian countries: Cambodia, the Philippines and Vietnam.</h3>

                    <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div role="tabpanel" class="col-lg-9 tab-pane fade show active" id="day-1">
                            {
                                this.state.data != null && this.state.data.map(e => {
                                    if (e.country == 'Global')
                                        return (
                                            <div class="row schedule-item">
                                                <div class="col-md-2"><time>{e.timeline}</time></div>
                                                <div class="col-md-10">
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>
                                        )
                                })
                            }
                        </div>
                        <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">
                        {
                                this.state.data != null && this.state.data.map(e => {
                                    if (e.country == 'Viet Nam')
                                        return (
                                            <div class="row schedule-item">
                                                <div class="col-md-2"><time>{e.timeline}</time></div>
                                                <div class="col-md-10">
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>
                                        )
                                })
                            }
                        </div>
                        <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-3">
                            {
                                this.state.data != null && this.state.data.map(e => {
                                    if (e.country == 'Cambodia')
                                        return (
                                            <div class="row schedule-item">
                                                <div class="col-md-2"><time>{e.timeline}</time></div>
                                                <div class="col-md-10">
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>
                                        )
                                })
                            }
                        </div>
                        <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-4">
                            {
                                this.state.data != null && this.state.data.map(e => {
                                    if (e.country == 'Philippines')
                                        return (
                                            <div class="row schedule-item">
                                                <div class="col-md-2"><time>{e.timeline}</time></div>
                                                <div class="col-md-10">
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Key_date;