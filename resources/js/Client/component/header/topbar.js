import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Topbar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <section id="topbar" class="d-flex align-items-center">
                <div class="container d-flex justify-content-center justify-content-md-between">
                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-envelope-fill"></i><a href="mailto:info.vietnam@passerellesnumeriques.org">info.vietnam@passerellesnumeriques.org</a>
                        <i class="bi bi-phone-fill phone-icon"></i> 0236 3888 503
                    </div>
                    <div class="social-links d-none d-md-block">
                        <a href="https://twitter.com/passerellesnume" class="twitter"><i class="bi bi-twitter"></i></a>
                        <a href="https://www.facebook.com/passerelles.numeriques" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </section >
        );
    }
}

export default Topbar;