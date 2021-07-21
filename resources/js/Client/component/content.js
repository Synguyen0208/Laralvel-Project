import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import About from './content/about';
import Contact from './content/contact'
import Partner from './content/partner';
import Service from './content/service';
import { Helmet } from 'react-helmet';
import Key_date from './content/key_date';
import Training from './content/training';
import Help from './content/help';
import Sharing from './content/sharing';
import Donate from './content/donate';
import About from './content/about';
class Content extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main id="main">
                <About/>
                <Key_date/>
                <Training/>
                <Help/>
                <Donate/>
                <Sharing/>
                <Partner/>
                <Contact/>
            </main>
        );
    }
}

export default Content;