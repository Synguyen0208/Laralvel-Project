import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section id="hero">
                <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 class="mb-4 pb-0">Welcome to <br/>Passerellesnumeriques Viet Nam</h1>
                   
                    <a href="https://youtu.be/wEK-CzwXa4A" class="glightbox play-btn mb-4"></a>
                    <a href="#about" class="about-btn scrollto">About Us</a>
                </div>
            </section>
        );
    }
}

export default Hero;