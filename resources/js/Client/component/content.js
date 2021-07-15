import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from './content/about';
import Partner from './content/partner';
import Service from './content/service';
import { Helmet } from 'react-helmet';
import Key_date from './content/key_date';
import Training from './content/training';
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
            </main>
        );
    }
}

export default Content;