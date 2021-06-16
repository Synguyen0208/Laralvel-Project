import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Middle from './middle';
import Hero from './hero';

class Header extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div style={{width:"100%"}}>
                <Middle/>
                <Hero/>
            </div>
        );
    }
}
export default Header;