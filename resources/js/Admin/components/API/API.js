import React, { Component } from 'react';
import axios from 'axios';
class API extends Component {
    constructor(props) {
        super(props);

    }
    callAPI(endpoint, method, data){
        return axios({
            method: method,
            data: data,
            url: 'https://pnvwebsite.herokuapp.com/api/'+endpoint,      
        })
    }
}

export default API;