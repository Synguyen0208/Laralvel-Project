import Page from '../components/Page';
import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Col,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
} from 'reactstrap';
import { Alert } from 'reactstrap';

class ModalPage extends React.Component {
    state = {
        modal: this.props.false
    };
    render() {
        return (
            <Modal
                isOpen={this.props.action}
                className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                    {this.props.body}
                    <Alert color="warning">
                        {this.props.alert}
                    </Alert>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.submit}>
                        Submit
                    </Button>
                    <Button color="secondary" onClick={this.props.close}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalPage;
