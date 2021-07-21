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
        }
    }
    getData = () => {
        this.call.callAPI('donator', 'get', '').then((response) => {
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
                title="List donator"
                breadcrumbs={[{ name: 'donators', active: true }]}
                className="TablePage"
            >
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Donator Page</CardHeader>
                            <CardBody>
                                {this.state.data != null && this.state.data.length > 0 && <Table id="datatable" view='/transaction' title_view='Transaction' data={this.state.data} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default DonatorPage;
