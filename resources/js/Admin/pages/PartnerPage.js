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
class PartnerPage extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: null,
            open: false,
            title: null,
            name: null,
            image: null,
            description: null,
            link: null,
            type:null,
            old_image:null,
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
                body = <FormAction submit={this.addPartner} structure={this.createForm(this.state.data)} change={this.handleChange} changeImage={this.handleChangeImage} />
                this.setState({
                    action_modal: false
                })
                break;
            }
                
            case 'delete': {
                body = <Alert color="danger">Are you sure you want to delete this partner!</Alert>
                this.setState({
                    action_modal: () => this.deletePartner(data)
                })
            }
                break;
            case 'update':{
                this.setUpadteData(data);
                this.setState({
                    action_modal: false
                })
                body = <FormAction submit={this.updatePartner} structure={this.createForm(data)} change={this.handleChange} changeImage={this.handleChangeImage} />
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
        form.append('description', document.getElementById('description').value);
        form.append('link', this.state.link);
        form.append('type', this.state.type);
        // console.log(this.state);
        return form;
    }
    addPartner = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('partner', 'post', form).then((response) => {
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
    updatePartner = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('updatePartner/'+this.state.id, 'post', form).then((response) => {
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
    deletePartner = (id) => {
        this.call.callAPI('partner/' + id, 'delete', '').then((response) => {
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
        this.setState({
            name: data.name,
            description: data.description,
            old_image:data.image,
            id:data.id,
            link:data.link
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
                fill: 'link',
                type: 'text',
                value:data.link
            },
            {
                fill: 'description',
                type: 'textarea',
                value:data.description
            }
            ,
            {
                fill: 'type',
                type: 'select',
                value:data.type,
                data:[
                    {
                        id:'Main partner',
                        name:'Main partner'
                    },
                    {
                        id:'Local partner',
                        name:'Local partner'
                    }
                ]
            }
        ];
        return structure;
    }
    getData = () => {
        this.call.callAPI('partner', 'get', '').then((response) => {
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
                title="Manage Our Partner"
                breadcrumbs={[{ name: 'partners', active: true }]}
                className="TablePage"
            >
                <Button onClick={() => this.open('add', 'Add Partner')} outline color="primary">
                    Add Partner
                </Button>
                {/* {this.state.message != null &&
                    <Alert color="success">
                        {this.state.message}
                    </Alert>
                } */}

                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Partner list</CardHeader>
                            <CardBody>
                                {this.state.data != null && <Table id="datatable" update={this.open} delete={this.open} data={this.state.data} />}
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

export default PartnerPage;
