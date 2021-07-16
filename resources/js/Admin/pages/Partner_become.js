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
import {
    MdImportantDevices,
    // MdCardGiftcard,
    MdLoyalty,
} from 'react-icons/md';
class Partner_become extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: null,
            open: false,
            title: null,
            message: null,
            body_modal: null,
            title_modal: null,
            action_modal: null
        }
    }
    close = () => {
        this.setState({
            open: false
        })
    }
    open = (type,til, data) => {
        let body = <Alert color="danger">Are you sure you want to delete this partner!</Alert>
        this.setState({
            action_modal: () => this.deletePartnerBecome(data)
        })
        this.setState({
            body_modal: body,
            title_modal: til,
            open: true
        })
    }
    deletePartnerBecome = (id) => {
        this.call.callAPI('partner_become/' + id, 'delete', '').then((response) => {
            if (response.data.err == 0) {
                this.notificationSystem.addNotification({
                    title: <MdLoyalty />,
                    message:
                        response.data.message,
                    level: 'info',
                })
                this.getData();
            }
        });
        this.close();
    }

    getData = () => {
        this.call.callAPI('partner_become', 'get', '').then((response) => {
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
                title="Manage Our Partner Becomes"
                breadcrumbs={[{ name: 'Partner Becomes', active: true }]}
                className="TablePage"
            >
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Partner becomes list</CardHeader>
                            <CardBody>
                                {this.state.data != null &&this.state.data.length>0&& <Table id="datatable" delete={this.open} data={this.state.data} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <ModalAction title={this.state.title_modal} body={this.state.body_modal} action={this.state.action_modal} open={this.state.open} close={this.close} />
                <NotificationSystem
                    dismissible={false}
                    ref={notificationSystem =>
                        (this.notificationSystem = notificationSystem)
                    }
                    style={NOTIFICATION_SYSTEM_STYLE}
                />
            </Page>
        );
    }
}

export default Partner_become;
