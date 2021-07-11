import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Alert } from 'reactstrap';
import Table from '../components/table';
import API from '../components/API/API';
import ModalAction from '../components/Modal';
import ModalText from '../components/Modal';
import FormAction from '../components/Form';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../utils/constants';
import { AnnouncementCard, TodosCard } from '../components/Card';
import {
    MdImportantDevices,
    // MdCardGiftcard,
    MdLoyalty,
} from 'react-icons/md';
import CardData from '../components/Card/CardData';
import PNvalue from '../components/PNvalue';
class Manage_data extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    getData = () => {
        this.call.callAPI('keydate', 'get', '').then((response) => {
            this.setState({ data: response.data });
        });
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 10000);
        this.getData();
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    timer() {
        this.getData();
    }
    render() {
        return (
            <Page
                title="Manage Our Data"
                breadcrumbs={[{ name: 'Data', active: true }]}
                className="TablePage"
            >
                    <PNvalue />
            </Page>
        );
    }
}

export default Manage_data;
