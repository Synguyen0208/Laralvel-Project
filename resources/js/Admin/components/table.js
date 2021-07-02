import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import "../styles/components/_data-table.scss";
import "../styles/components/_bootstrap.scss";
import {
    Button
} from 'reactstrap';
import ModalAction from '../components/Modal';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: null,
            title: null,
            text_modal: false
        }
    }
    close = () => {
        this.setState({
            open: false
        })
    }
    open = async (val, til) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(val, 'text/html');
        if (val == 'null')
            val = "No description";
        await this.setState({
            open: true,
            text: val,
            title: til,
            text_modal: true
        });
        document.getElementById("body").innerHTML = doc.body.innerHTML;
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "../js/dataTable.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        var keye = Object.keys(this.props.data[0]);
        return (
            <div>
                <table id={this.props.id} class="table table-striped table-bordered" width="100%">
                    <thead>
                        <tr>
                            {keye.map(element => {
                                return (<th>{element.toUpperCase()}</th>)
                            })}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            {keye.map(element => {
                                return (<th>{element.toUpperCase()}</th>)
                            })}
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr style={{ display: "none" }}>
                            <td>
                            </td>
                        </tr>
                        {this.props.data.map(value1 => {
                            return (<tr>
                                {Object.values(value1).map((value, key) => {
                                    if (keye[key] == "image")
                                        return <td><img style={{ width: "8rem"}} src={'../images/' + value}></img></td>
                                    else if (keye[key] == "description")
                                        return <td>
                                            <Button onClick={() => this.open(value, value1.name)} outline color="info">
                                                View description
                                            </Button>
                                        </td>
                                    else if (keye[key] == "link" && value != '')
                                        return <td>
                                            <a href={value} data-toggle="tooltip" data-placement="top" title={value}>
                                                <img class="linkk" src='https://www.logolynx.com/images/logolynx/39/39542ab77a8f022f4d5a3cc5fec83f6e.png'></img>
                                            </a>
                                        </td>
                                    else if (keye[key] == "facebook" && value != '')
                                        return <td>
                                            <a href={value} data-toggle="tooltip" data-placement="top" title={value}>
                                                <img class="link" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'></img>
                                            </a>
                                        </td>
                                    else if (keye[key] == "linkedin" && value != '')
                                        return <td>
                                            <a href={value} data-toggle="tooltip" data-placement="top" title={value}>
                                                <img class="link" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1024px-Linkedin_icon.svg.png'></img>
                                            </a>
                                        </td>
                                    else if (keye[key] == "twitter" && value != '')
                                        return <td>
                                            <a href={value} data-toggle="tooltip" data-placement="top" title={value}>
                                                <img class="link" src='https://upload.wikimedia.org/wikipedia/vi/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png'></img>
                                            </a>
                                        </td>
                                    else
                                        return <td>{value}</td>
                                })
                                }
                                <td>
                                    <div class="row">
                                        {this.props.update != undefined &&
                                            <p data-placement="top" data-toggle="tooltip" title="Edit">
                                                <button type="button" class="btn btn-success" onClick={() => { this.props.update('update', 'Update information', value1) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                                                    </svg>
                                                </button>
                                            </p>
                                        }
                                        {
                                            this.props.delete != undefined &&
                                            <p data-placement="top" data-toggle="tooltip" title="Edit">
                                                <button onClick={() => this.props.delete('delete', 'Delete', value1.id)} type="button" class="btn btn-outline-danger" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                                    </svg>
                                                </button>
                                            </p>
                                        }

                                    </div>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                <ModalAction body={this.state.text} open={this.state.open} action={false} text={this.state.text_modal} close={this.close} title={this.state.title} />
            </div>
        );
    }
}

export default Table;