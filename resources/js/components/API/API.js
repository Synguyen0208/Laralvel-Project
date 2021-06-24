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
            url: 'http://127.0.0.1:8000/api/'+endpoint,      
        })
    }
}

export default API;