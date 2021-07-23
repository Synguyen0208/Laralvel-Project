import React, { Component } from 'react';
// import About from './content/about';
import Contact from './content/contact'
import Partner from './content/partner';
import Key_date from './content/key_date';
import Training from './content/training';
import Help from './content/help';
import Sharing from './content/sharing';
import Donate from './content/donate';
import About from './content/about';
import Selection from './content/selection';
import Staff from './content/staff';
import ITNUOIIT from './content/itnuoiit';
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
                <Selection/>
                <Help/>
                <Donate/>
                <ITNUOIIT/>
                <Sharing/>
                <Staff/>
                <Partner/>
                <Contact/>
            </main>
        );
    }
}

export default Content;