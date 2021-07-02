import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
class ModalAction extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const closeBtn = <button className="close" onClick={this.props.close}>&times;</button>;
        
        return (
            <Modal
                size="lg"
                isOpen={this.props.open}>
                <ModalHeader close={closeBtn}>{this.props.title}</ModalHeader>
                <ModalBody>
                   <div id='body'>{this.props.body}</div>
                </ModalBody>
                <ModalFooter>
                {
                    this.props.action!=false&&
                        <Button color="primary" onClick={this.props.action}>
                            Continue
                        </Button>
                    }
                    <Button color="secondary" onClick={this.props.close}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
export default ModalAction;