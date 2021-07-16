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
class StaffPage extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: null,
            data_form: null,
            open: false,
            title: null,
            name: null,
            image: null,
            facebook: null,
            linkedin: null,
            twitter: null,
            description: null,
            position: null,
            old_image:null,
            department: null,
            country: null,
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
            case 'add':{
                body = <FormAction submit={this.addStaff} structure={this.createForm(this.state.data)} change={this.handleChange} changeImage={this.handleChangeImage} />
                this.setState({
                    action_modal: false
                })
                break;
            }
                
            case 'delete': {
                body = <Alert color="danger">Are you sure you want to delete this staff!</Alert>
                this.setState({
                    action_modal: () => this.deleteStaff(data)
                })
            }
                break;
            case 'update':{
                this.setUpadteData(data);
                body = <FormAction submit={this.updateStaff} structure={this.createForm(data)} change={this.handleChange} changeImage={this.handleChangeImage} />
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
        form.append('name', this.state.name);
        if(this.state.image!=null){
            form.append('image', this.state.image);
        }
        form.append('facebook', this.state.facebook);
        form.append('linkedin', this.state.linkedin);
        form.append('twitter', this.state.twitter);
        form.append('description', document.getElementById('description').value);
        form.append('work_at', this.state.country);
        form.append('position_id', this.state.position);
        form.append('department_id', this.state.department);
        // console.log(this.state);
        return form;
    }
    addStaff = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('staff', 'post', form).then((response) => {
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
    updateStaff = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('updateStaff/'+this.state.id, 'post', form).then((response) => {
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
    }
    deleteStaff = (id) => {
        this.call.callAPI('staff/' + id, 'delete', '').then((response) => {
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
    handleChangeImage = event => {
        var reader = new FileReader();
        $('#blah').removeAttr('hidden');
        $('#new').removeAttr('hidden');
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(event.target.files[0]);

        this.setState({
            image: event.target.files[0]
        })
    }
    setUpadteData=(data)=>{

        // console.log(data);
        this.state.data_form.position.map(e=>{
            if(e.name==data.position){
                this.setState({
                    position:e.id
                })
            }
        })
        this.state.data_form.country.map(e=>{
            if(e.name==data.country){
                this.setState({
                    country:e.id
                })
            }
        })
        this.state.data_form.department.map(e=>{
            if(e.name==data.department){
                this.setState({
                    department:e.id
                })
            }
        })
        this.setState({
            name: data.name,
            facebook: data.facebook,
            linkedin: data.linkedin,
            twitter: data.twitter,
            description: data.description,
            old_image:data.image,
            id:data.id
        })
    }
    createForm = (data) => {
        // console.log(data);
        let structure = [
            {
                fill: 'name',
                type: 'text',
                value:data.name
            },
            {
                fill: 'image',
                type: 'file',
                value:data.image
            },
            {
                fill: 'facebook',
                type: 'text',
                value:data.facebook
            }, {
                fill: 'linkedin',
                type: 'text',
                value:data.linkedin
            },
            {
                fill: 'twitter',
                type: 'text',
                value:data.twitter
            },
            {
                fill: 'description',
                type: 'textarea',
                value:data.description
            },
            {
                fill: 'position',
                type: 'select',
                data: this.state.data_form.position,
                value:data.position
            },
            {
                fill: 'country',
                type: 'select',
                data: this.state.data_form.country,
                value:data.country
            },
            {
                fill: 'department',
                type: 'select',
                data: this.state.data_form.department,
                value:data.department
            }
        ];
        return structure;
    }
    getData = () => {
        this.call.callAPI('staff', 'get', '').then((response) => {
            this.setState({ data: response.data });
        });
        this.call.callAPI('dataForm', 'get', '').then((response) => {
            this.setState({ data_form: response.data });
        });
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 10000);
        this.getData();
        // Pusher.logToConsole = true;
        // var pusher = new Pusher('a3e01e457211a09f947c', {
        //     cluster: 'ap1'
        // });
        // var channel = pusher.subscribe('statistical');
        // channel.bind('event', function (data) {
        //     alert(JSON.stringify(data));
        // });
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
                title="Manage Our Staffs"
                breadcrumbs={[{ name: 'staffs', active: true }]}
                className="TablePage"
            >
                <Button onClick={() => this.open('add', 'Add Staff')} outline color="primary">
                    Add Staff
                </Button>
                {this.state.message != null &&
                    <Alert color="success">
                        {this.state.message}
                    </Alert>
                }

                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Board Members</CardHeader>
                            <CardBody>
                                {this.state.data != null && <Table id="datatable" update={this.open} delete={this.open} data={this.state.data.board} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Coordination team</CardHeader>
                            <CardBody>
                                {this.state.data != null && <Table update={this.open} delete={this.open} id="datatable1" data={this.state.data.coordination} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Local team</CardHeader>
                            <CardBody>
                                {this.state.data != null && <Table update={this.open} delete={this.open} id="datatable2" data={this.state.data.local} />}
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

export default StaffPage;
