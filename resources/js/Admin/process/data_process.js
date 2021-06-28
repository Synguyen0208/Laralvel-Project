import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../components/API/API';
const today = new Date();
class Data_process extends Component {
    call = new API();
    processStatistics = (data) => {
        let statistics = {
            sessions: data[today.getMonth()].month['ga:sessions'],
            sessionsIncrease: parseInt(data[today.getMonth()].month['ga:sessions']) - parseInt(data[today.getMonth() - 1].month['ga:sessions']),
            pageviews: data[today.getMonth()].month['ga:pageviews'],
            pageviewsIncrease: parseInt(data[today.getMonth()].month['ga:pageviews']) - parseInt(data[today.getMonth() - 1].month['ga:pageviews']),
            newusers: data[today.getMonth()].month['ga:newusers'],
            visitors: parseInt(data[today.getMonth()].month['ga:newusers']) + parseInt(data[today.getMonth()].month['ga:users']),
            visitorsIncrease: parseInt(parseInt(data[today.getMonth()].month['ga:newusers']) + parseInt(data[today.getMonth()].month['ga:users'])) - parseInt(parseInt(data[today.getMonth() - 1].month['ga:newusers']) + parseInt(data[today.getMonth() - 1].month['ga:users'])),
            newusersIncrease: parseInt(data[today.getMonth()].month['ga:newusers']) - parseInt(data[today.getMonth() - 1].month['ga:newusers']),
            users: data[today.getMonth()].month['ga:users'],
            usersIncrease: parseInt(data[today.getMonth()].month['ga:users']) - parseInt(data[today.getMonth() - 1].month['ga:users']),
            bouncerate: data[today.getMonth()].month['ga:bouncerate'] + '%',
            bouncerateIncrease: parseInt(data[today.getMonth()].month['ga:bouncerate']) - parseInt(data[today.getMonth() - 1].month['ga:bouncerate']) + '%',
            avgsessionduration: data[today.getMonth()].month['ga:avgsessionduration'],
            avgsessiondurationIncrease: parseInt(data[today.getMonth()].month['ga:avgsessionduration']) - parseInt(data[today.getMonth() - 1].month['ga:avgsessionduration'])
        };
        return statistics;
    }
    chartData = (data) => {
        let chartData = {
            pageView:[
                parseInt(data[today.getMonth() - 5].month['ga:pageviews']),
                parseInt(data[today.getMonth() - 4].month['ga:pageviews']),
                parseInt(data[today.getMonth() - 3].month['ga:pageviews']),
                parseInt(data[today.getMonth() - 2].month['ga:pageviews']),
                parseInt(data[today.getMonth() - 1].month['ga:pageviews']),
                parseInt(data[today.getMonth()].month['ga:pageviews'])
            ],
            session: [
                parseInt(data[today.getMonth() - 5].month['ga:sessions']),
                parseInt(data[today.getMonth() - 4].month['ga:sessions']),
                parseInt(data[today.getMonth() - 3].month['ga:sessions']),
                parseInt(data[today.getMonth() - 2].month['ga:sessions']),
                parseInt(data[today.getMonth() - 1].month['ga:sessions']),
                parseInt(data[today.getMonth()].month['ga:sessions'])
            ],
            bouncerate:[
                parseInt(data[today.getMonth() - 5].month['ga:bouncerate']),
                parseInt(data[today.getMonth() - 4].month['ga:bouncerate']),
                parseInt(data[today.getMonth() - 3].month['ga:bouncerate']),
                parseInt(data[today.getMonth() - 2].month['ga:bouncerate']),
                parseInt(data[today.getMonth() - 1].month['ga:bouncerate']),
                parseInt(data[today.getMonth()].month['ga:bouncerate'])
            ],
            visitor:[
                parseInt(parseInt(data[today.getMonth()-5].month['ga:newusers']) + parseInt(data[today.getMonth()-5].month['ga:users'])),
                parseInt(parseInt(data[today.getMonth()-4].month['ga:newusers']) + parseInt(data[today.getMonth()-4].month['ga:users'])),
                parseInt(parseInt(data[today.getMonth()-3].month['ga:newusers']) + parseInt(data[today.getMonth()-3].month['ga:users'])),
                parseInt(parseInt(data[today.getMonth()-2].month['ga:newusers']) + parseInt(data[today.getMonth()-2].month['ga:users'])),
                parseInt(parseInt(data[today.getMonth()-1].month['ga:newusers']) + parseInt(data[today.getMonth()-1].month['ga:users'])),
                parseInt(parseInt(data[today.getMonth()].month['ga:newusers']) + parseInt(data[today.getMonth()].month['ga:users']))
            ]

        };
        return chartData;
    }
}


export default Data_process;