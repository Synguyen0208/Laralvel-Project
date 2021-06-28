import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Table from '../components/table';
class StaffPage extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Page
                title="Tables"
                breadcrumbs={[{ name: 'tables', active: true }]}
                className="TablePage"
            >
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Contextual</CardHeader>
                            <CardBody>
                                <Table />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default StaffPage;
