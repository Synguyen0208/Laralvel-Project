import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Alert } from 'reactstrap';
import Table from '../components/table';
import API from '../components/API/API';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../utils/constants';
import {
    MdImportantDevices,
    // MdCardGiftcard,
    MdLoyalty,
} from 'react-icons/md';
class SelectionPage extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }
    getData = () => {
        this.call.callAPI('getselections', 'get', '').then((response) => {
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
    delete=(title, name, id)=>{
        this.call.callAPI('selection/'+id, 'delete', '').then((response) => {
            this.notificationSystem.addNotification({
                title: <MdLoyalty />,
                message:
                    'Delete form success',
                    level: 'info',
            })
            this.getData();
        });
    }
    render() {
        
        return (
            <Page
                title="List of enrollment applications"
                breadcrumbs={[{ name: 'Selection', active: true }]}
                className="TablePage"
            >
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Selection Page</CardHeader>
                            <CardBody>
                                {this.state.data != null && this.state.data.length > 0 && <Table id="datatable" delete={this.delete} data={this.state.data} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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

export default SelectionPage;
