import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import App from './admin';
import routes from './Routes/admin'
import Client from './client';
import routes1 from './Routes/client';
class Index extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Client}></Route>
                    <Route path={routes} component={App} />
                </Switch>
            </Router>
        );
    }
}
export default Index;