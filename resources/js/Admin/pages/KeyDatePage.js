import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Alert } from 'reactstrap';
import Table from '../components/table';
import API from '../components/API/API';
import ModalAction from '../components/Modal';
import FormAction from '../components/Form';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../utils/constants';
import {
    MdLoyalty,
} from 'react-icons/md';
class KeyDatePage extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            data_form:null,
            timeline:null,
            description:null,
            country_id:null,
            open: false,
            title: null,
            message: null,
            body_modal: null,
            title_modal: null,
            action_modal: null
        }
    }
    open = (val, til, data) => {
        let body = '';
        switch (val) {
            case 'add':{
                body = <FormAction submit={this.addEvent} structure={this.createForm(this.state.data)} change={this.handleChange} changeImage={this.handleChangeImage} />
                this.setState({
                    action_modal: false
                })
                break;
            }
                
            case 'delete': {
                body = <Alert color="danger">Are you sure you want to delete this event!</Alert>
                this.setState({
                    action_modal: () => this.deleteEvent(data)
                })
            }
                break;
            case 'update':{
                this.setUpadteData(data);
                this.setState({
                    action_modal: false
                })
                body = <FormAction submit={this.updateEvent} structure={this.createForm(data)} change={this.handleChange} changeImage={this.handleChangeImage} />
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
    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        // alert(val);
        this.setState({
            [nam]: val
        })
    }
    createFormData = () => {
        let form = new FormData;
        form.append('timeline', this.state.timeline);
        form.append('description', document.getElementById('description').value);
        form.append('country_id', this.state.country_id);
        return form;
    }
    addEvent = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('keydate', 'post', form).then((response) => {
            if (response.data.err == 0) {
                this.notificationSystem.addNotification({
                    title: <MdLoyalty />,
                    message:
                        response.data.message,
                    level: 'info',
                })
                this.setState({
                    open: false
                });
                this.getData();
            }
        });
        this.resetState();
    }
    updateEvent = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('updateKeyDate/'+this.state.id, 'post', form).then((response) => {
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
    resetState=()=>{
        this.setState({
            name: null,
            image: null,
            description: null,
            link: null
        })
    }
    deleteEvent = (id) => {
        this.call.callAPI('keydate/' + id, 'delete', '').then((response) => {
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
    setUpadteData=(data)=>{
        this.state.data_form.country.map(e=>{
            if(e.name==data.country){
                this.setState({
                    country_id:e.id
                })
            }
        })
        this.setState({
            timeline: data.timeline,
            description: data.description,
            id:data.id
        })
    }
    createForm = (data) => {
        let structure = [
            {
                fill: 'timeline',
                type: 'number',
                value:data.timeline
            },
            {
                fill: 'description',
                type: 'textarea',
                value:data.description
            },
            {
                fill: 'country_id',
                type: 'select',
                value:data.country,
                data:this.state.data_form.country
            }
        ];
        return structure;
    }
    getData = () => {
        this.call.callAPI('keydate', 'get', '').then((response) => {
            this.setState({ data: response.data });
        });
        this.call.callAPI('dataForm', 'get', '').then((response) => {
            this.setState({ data_form: response.data });
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
    close = () => {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            <Page
                title="Manage Our Key Dates"
                breadcrumbs={[{ name: 'key dates', active: true }]}
                className="TablePage"
            >
             <Row>
                <Col>
                        <Button onClick={() => this.open('add', 'Add Key Date')} outline color="primary">
                            Add Key Date
                        </Button>
                    <Card className="mb-3">
                        <CardHeader>Key dates</CardHeader>
                        
                        <CardBody>
                            {this.state.data != null &&this.state.data.length>0&& <Table id="datatable" delete={this.open} update={this.open} data={this.state.data} />}
                        </CardBody>
                    </Card>
                </Col>
                <ModalAction title={this.state.title_modal} body={this.state.body_modal} action={this.state.action_modal} open={this.state.open} close={this.close} />
                <NotificationSystem
                    dismissible={false}
                    ref={notificationSystem =>
                        (this.notificationSystem = notificationSystem)
                    }
                    style={NOTIFICATION_SYSTEM_STYLE}
                />
            </Row>
            </Page>
        );
    }
}

export default KeyDatePage;
