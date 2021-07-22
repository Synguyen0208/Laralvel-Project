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
        let chartData={
            pageView:[],
            session: [],
            bouncerate:[],
            visitor:[]
        }
        for (let index = today.getMonth(); index >= 0; index--) {
            chartData.pageView.push(parseInt(data[today.getMonth() - index].month['ga:pageviews']));
            chartData.session.push(parseInt(data[today.getMonth() - index].month['ga:sessions']));
            chartData.bouncerate.push(parseInt(data[today.getMonth() - index].month['ga:bouncerate']));
            chartData.visitor.push(parseInt(parseInt(data[today.getMonth()-index].month['ga:newusers']) + parseInt(data[today.getMonth()-index].month['ga:users'])))
        }
        return chartData;
    }
}


export default Data_process;