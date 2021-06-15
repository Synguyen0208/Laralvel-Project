import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from './content/about';

class Content extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main id="main">
                <About/>
            </main>
        );
    }
}

export default Content;