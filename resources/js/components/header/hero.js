import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h1>Welcome to <br/>Passerellesnumeriques Viet Nam</h1>
                    <a href="#about" class="btn-get-started scrollto">Launched in 2010 in Danang, Passerelles numériques Vietnam (PNV) offers full scholarships to our 3-year, high-quality IT training program in: Web Development, Mobile Development & Automated Testing. Each of these specializations is taught holistically, including both technical and soft skills alongside a robust personal development program.</a>
                </div>
            </section>
        );
    }
}

export default Hero;