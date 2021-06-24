import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import $ from "jquery";
import axios from "axios";
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    getData = () => {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://127.0.0.1:8000/product',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ data: response.data })
            })
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
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
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit Price</th>
                                <th>Promotion price</th>
                                <th>Unit</th>
                                <th>New</th>
                                <th>Discription</th>
                                <th>Type</th>
                                <th>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Unit Price</th>
                                <th>Promotion price</th>
                                <th>Unit</th>
                                <th>New</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Image</th>
                                <th></th>

                            </tr>
                        </tfoot>
                        <tbody>
                            {this.state.data.length > 0 && this.state.data.map(e => {
                                return (
                                    <tr>
                                        <td>
                                            {e.name}
                                        </td>
                                        <td>
                                            {e.unit_price}
                                        </td>
                                        <td>
                                            {e.promotion_price}
                                        </td>
                                        <td>
                                            {e.unit}
                                        </td>
                                        <td>
                                            {e.new}
                                        </td>
                                        <td>
                                            {e.description}
                                        </td>
                                        <td>
                                            {e.type}
                                        </td>

                                        <td>
                                            <img src={"source/image/product/" + e.image} class="img-responsive" style={{ width: "10rem", height: "10rem", marginLeft: "auto", marginRight: "auto" }} alt="Image" />
                                        </td>
                                        <td>
                                            <button class="btn btn-success" onClick={() => this.props.update(e)} name="add">Update</button>

                                            <button class="btn btn-danger" onClick={() => this.props.delete(e)} type="submit" name="delete">Delete</button>

                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                    <Helmet>
                        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
                        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
                        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>

                        <script src="./table_data.js" />


                    </Helmet>
                </div>
            </div>
        );
    }
}


export default Table;