import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Alert } from 'reactstrap';
import Table from '../components/table';
import API from '../components/API/API';
class DonatorPage extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            donateGGP:null
        }
    }
    getData = () => {
        this.call.callAPI('payment', 'get', '').then((response) => {
            this.setState
            ({ 
                data: response.data.paypal,
                donateGGP:response.data.GGPay
             });
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
                title="LIST TRANSACTION"
                breadcrumbs={[{ name: 'transaction', active: true }]}
                className="TablePage"
            >
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Paypal</CardHeader>
                            <CardBody>
                                {this.state.data != null && this.state.data.length > 0 && <Table id="datatable" search={this.props.match.params.id} data={this.state.data} />}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Google Pay</CardHeader>
                            <CardBody>
                                {this.state.donateGGP != null && this.state.donateGGP.length > 0 && <Table id="datatable1" search={this.props.match.params.id} data={this.state.donateGGP} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default DonatorPage;
