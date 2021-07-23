import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../../Admin/utils/history';
class Middle extends Component {
    constructor(props) {
        super(props);

    }
    handleRouter=(href)=>{
        history.push(`/${href}`);
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
                            <li><a class="nav-link scrollto active" href="#hero" onClick={()=>this.handleRouter('#hero')}>Home</a></li>
                            <li><a class="nav-link scrollto" href="#about" onClick={()=>this.handleRouter('#about')}>About</a></li>
                            <li><a class="nav-link scrollto" href="#schedule" onClick={()=>this.handleRouter('#schedule')}>Key Dates</a></li>
                            <li><a class="nav-link scrollto" href="#training" onClick={()=>this.handleRouter('#training')}>Training</a></li>
                            <li><a class="nav-link scrollto" href="#selection" onClick={()=>this.handleRouter('#selection')}>Selection</a></li>
                            <li><a class="nav-link scrollto" href="#itnuoiit" onClick={()=>this.handleRouter('#itnuoiit')}>#ITRAISESIT</a></li>
                            <li><a class="nav-link scrollto" href="#sharing" onClick={()=>this.handleRouter('#sharing')}>Testimonials</a></li>
                            <li><a class="nav-link scrollto" href="#staffss" onClick={()=>this.handleRouter('#staffss')}>Board and Staff</a></li>
                            <li><a class="nav-link scrollto" href="#clients" onClick={()=>this.handleRouter('#clients')}>Partner</a></li>
                            <li><a class="nav-link scrollto" href="#contact" onClick={()=>this.handleRouter('#contact')}>Contact</a></li>
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