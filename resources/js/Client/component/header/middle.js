import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Middle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header id="header" class="d-flex align-items-center ">
                <div class="container-fluid container-xxl d-flex align-items-center">

                    <div id="logo" class="me-auto">
                        <a href="index.html" class="scrollto"><img src="https://www.passerellesnumeriques.org/misc/logo-en.png" alt="Passerellesnumeriques" title="" /></a>
                    </div>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#schedule">Key Dates</a></li>
                            <li><a class="nav-link scrollto" href="#clients">Partner</a></li>
                            <li><a class="nav-link scrollto" href="#selection">Selection</a></li>
                            <li><a class="nav-link scrollto" href="#staffss">Employee</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>

                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a class="buy-tickets scrollto" href="#donate">Donate</a>

                </div>
            </header>
        );
    }
}

export default Middle;