import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Alert, FormGroup, Input, Label, Form } from 'reactstrap';
import Table from '../components/table';
import API from '../components/API/API';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../utils/constants';
import {
    MdLoyalty,
} from 'react-icons/md';
import ModalAction from '../components/Modal';
import FormAction from '../components/Form';
class BlogPage extends React.Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: null,
            open: false,
            title: null,
            description: null,
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
            case 'delete': {
                body = <Alert color="danger">Are you sure you want to delete this blog!</Alert>
                this.setState({
                    action_modal: () => this.deleteBlog(data)
                })
            }
                break;
            case 'update': {
                this.setState({
                    action_modal: false,
                    id: data.id
                })
                body = <FormAction submit={this.updateBlog} structure={this.createForm(data)} change={this.handleChange} />
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
    createForm = (data) => {
        let structure = [
            {
                fill: 'description',
                type: 'textarea',
                value: data.description
            }
        ];
        return structure;
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
        form.append('description', document.getElementById('description_add').value);
        return form;
    }
    addBlog = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        await this.call.callAPI('blog', 'post', form).then((response) => {
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
    }
    updateBlog = async (event) => {
        event.preventDefault();
        let form = this.createFormData();
        form.append('description', document.getElementById('description').value);
        await this.call.callAPI('updateBlog/' + this.state.id, 'post', form).then((response) => {
            console.log(response.data);
            if (response.data.err == 0) {
                this.notificationSystem.addNotification({
                    title: <MdLoyalty />,
                    message:
                        response.data.message,
                    level: 'info',
                })
                this.getData();
                this.close();
            }
        });
    }
    deleteBlog = (id) => {
        this.call.callAPI('blog/' + id, 'delete', '').then((response) => {
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
    getData = () => {
        this.call.callAPI('blog', 'get', '').then((response) => {
            console.log(response.data);
            this.setState({ data: response.data });
        });
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "../js/dataTable.js";
        script.async = true;
        document.body.appendChild(script);
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
                title="Manage Blog"
                breadcrumbs={[{ name: 'Blog', active: true }]}
                className="TablePage"
            >
                <Form onSubmit={this.addBlog}>
                    <FormGroup>
                        <Label for='description_add'>Content</Label>
                        <Input
                            onChange={this.handleChange}
                            type='textarea'
                            name='description'
                            id='description_add'
                            placeholder={"Write content for blog."}
                            required
                        />
                    </FormGroup>
                    <Button outline color="primary">
                        Write blog
                    </Button>
                </Form>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Blog list</CardHeader>
                            <CardBody>
                                {this.state.data != null && this.state.data.length > 0 && <Table id="datatable" update={this.open} delete={this.open} data={this.state.data} />}
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

export default BlogPage;
