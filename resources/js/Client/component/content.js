import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import About from './content/about';
import Contact from './content/contact'
import Partner from './content/partner';
import Service from './content/service';
import { Helmet } from 'react-helmet';
import Key_date from './content/key_date';
class Content extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main id="main">
                <Key_date/>
                <Contact/>
            </main>
        );
    }
}

export default Content;