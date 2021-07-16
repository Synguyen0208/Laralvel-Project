import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Badge,
    Input,
    Label,
    Row,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
class FormAction extends Component {
    constructor(props) {
        super(props);
    }
    readURL = (input) => {
        var reader = new FileReader();
        $('#blah').removeAttr('hidden');
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.target.files[0]);
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "../js/dataTable.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <Form onSubmit={this.props.submit}>
                {this.props.structure.map(e => {
                    if (e.type == 'select') {
                        return (
                            <FormGroup>
                                <Label for={e.fill}>{e.fill.toUpperCase()}</Label>
                                <Input type="select" name={e.fill} id={e.fill} onChange={this.props.change} required>
                                    {e.data.map(op => {
                                        // console.log(e.value)
                                        if (op.name == e.value) {
                                            return (
                                                <option value={op.id} selected>{op.name}</option>
                                            )
                                        }
                                        return (
                                            <option value={op.id}>{op.name}</option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                        )
                    }
                    else
                        if (e.type == 'file') {
                            return (
                                <FormGroup>
                                    <Label for={e.fill}>{e.fill.toUpperCase()}</Label>
                                    <Input type="file" id={e.fill} name={e.fill} onChange={this.props.changeImage}>
                                    </Input>
                                    <FormGroup>
                                        <Row>
                                            {
                                                e.value != null &&
                                                <Col md={6}>
                                                    <img style={{ width: "10rem", height: "10rem", marginTop: "2px", verticalAlign:"middle" }} src={'/images/' + e.value} />
                                                    <br />
                                                    <Badge color="light" className="mr-1">
                                                        Old image
                                                    </Badge>
                                                </Col>
                                            }
                                            <Col md={6} id='new' hidden>
                                                <img style={{ width: "10rem", height: "10rem", marginTop: "2px" }} hidden id="blah" />
                                                <br/>
                                                <Badge color="light" className="mr-1">
                                                        New image
                                                </Badge>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </FormGroup>
                            )
                        }
                        else {
                            return (
                                <FormGroup>
                                    <Label for={e.fill}>{e.fill.toUpperCase()}</Label>
                                    <Input
                                        onChange={this.props.change}
                                        type={e.type}
                                        name={e.fill}
                                        id={e.fill}
                                        defaultValue={e.value}
                                        placeholder={"Input your " + e.fill}
                                        required
                                    />
                                </FormGroup>
                            )
                        }
                })}
                <FormGroup>
                    <Button outline color="success" className="float-right">Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default FormAction;