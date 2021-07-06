import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Col, Row, Button, Alert } from 'reactstrap';
import { AnnouncementCard } from './Card';
import API from './API/API';
import FormAction from './Form';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../utils/constants';
class PNvalue extends Component {
    call=new API;
    constructor(props) {
        super(props);
        this.state={
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
    open = (val, til, data) => {
        let body = '';
        body = <FormAction submit={this.addPartner} structure={this.createForm(this.state.data)} change={this.handleChange} changeImage={this.handleChangeImage} />
        this.setState({
            action_modal: false
        })
        break;
        this.setState({
            body_modal: body,
            title_modal: til,
            open: true
        })
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
        form.append('name_value', this.state.name_value);
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
        let text="";
        if(this.state.data!=null){
            text=this.state.data.map(e=>{
                return <h4>{e.name_value}</h4>
            })
        }
        return (
            <Col lg="4" md="12" sm="12" xs="12">
                    <AnnouncementCard
                        color="gradient-secondary"
                        header="Passerelles numériques Value"
                        avatarSize={60}
                        name="PNV"
                        date="2021"
                        text={text}
                        click={}
                        buttonProps={{
                            children: 'Add value',
                        }}
                        style={{ height: 500 }}
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