import React, { Component } from 'react';
import { Col, Button, Alert } from 'reactstrap';
import { AnnouncementCard } from './Card';
import Typography from './Typography';
import API from './API/API';
import FormAction from './Form';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../utils/constants';
import ModalAction from './Modal';
import { MdLoyalty } from 'react-icons/md';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledButtonDropdown,
} from 'reactstrap';
class PNvalue extends Component {
    call = new API;
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: null,
            open: false,
            title: null,
            name_value: null,
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
    open = (val, til, data) => {
        let body = '';
        switch (val) {
            case 'add': {
                body = <FormAction submit={this.addValue} structure={this.createForm(this.state.data)} change={this.handleChange} />
                this.setState({
                    action_modal: false
                })
                break;
            }
            case 'delete': {
                body = <Alert color="danger">Are you sure you want to delete this event!</Alert>
                this.setState({
                    action_modal: () => this.deleteValue(data)
                })
            }
                break;
            case 'update': {
                this.setState({
                    action_modal: false,
                    id: data.id
                })
                body = <FormAction submit={this.updateValue} structure={this.createForm(data)} change={this.handleChange} />
            }
                break;
            default:
                break;
        }
        this.setState({
            body_modal: body,
            title_modal: til,
            open: true
        })
    }
    updateValue = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('updateValue/' + this.state.id, 'post', form).then((response) => {
            console.log(response.data);
            if (response.data.err == 0) {
                this.notificationSystem.addNotification({
                    title: <MdLoyalty />,
                    message:
                        response.data.message,
                    level: 'info',
                })
                this.setState({
                    open: false
                })
                this.getData();
            }
        });
        this.resetState();
    }
    resetState = () => {
        this.setState({
            name_value: null,
        })
    }
    deleteValue = (id) => {
        this.call.callAPI('pnvalue/' + id, 'delete', '').then((response) => {
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
        this.resetState();
    }
    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val
        })
    }
    createFormData = () => {
        let form = new FormData;
        form.append('name', this.state.name_value);
        return form;
    }
    addValue = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('pnvalue', 'post', form).then((response) => {
            if (response.data.err == 0) {
                this.notificationSystem.addNotification({
                    title: <MdLoyalty />,
                    message:
                        response.data.message,
                    level: 'info',
                })
                this.setState({
                    open: false
                })
                this.getData();
            }
        });
    }
    createForm = (data) => {
        let structure = [
            {
                fill: 'name_value',
                type: 'text',
                value: data.name_value
            }
        ];
        return structure;
    }
    getData = () => {
        this.call.callAPI('pnvalue', 'get', '').then((response) => {
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
        let text = "";
        if (this.state.data != null) {
            text = this.state.data.map(e => {
                return <h3> <UncontrolledButtonDropdown
                    className="text-capitalize m-1">
                    <Button color='white'><h4 style={{ color: 'white' }}>{e.name_value}</h4></Button>
                    <DropdownToggle caret color='white' />
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.open('update', 'Update value', e)}><Typography className="text-warning">Update</Typography></DropdownItem>
                        <DropdownItem onClick={() => this.open('delete', 'Delete', e.id)}><Typography className="text-danger">Delete</Typography></DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                </h3>
            })
        }
        return (
            <Col lg="6" sm="12" xs="12" md={{ size: 6, offset: 3 }}>
                <AnnouncementCard
                    color="gradient-secondary"
                    header="Passerelles numériques Value"
                    avatarSize={60}
                    name="PNV"
                    date="2021"
                    text={text}
                    click={this.open}
                    buttonProps={{
                        children: 'Add value',
                    }}
                />
                <ModalAction title={this.state.title_modal} body={this.state.body_modal} action={this.state.action_modal} open={this.state.open} close={this.close} />
                <NotificationSystem
                    dismissible={false}
                    ref={notificationSystem =>
                        (this.notificationSystem = notificationSystem)
                    }
                    style={NOTIFICATION_SYSTEM_STYLE}
                />
            </Col>
        );
    }
}

export default PNvalue;