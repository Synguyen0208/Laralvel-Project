import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import $ from "jquery";
import axios from "axios";
import Table from './Table';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:null,
            name:null,
            type_product:null,
            unit_price:null,
            promotion_price:null,
            unit:null,
            image:null,
            image1:null,
            description:null,
            type:[],
            message:null,
            action:null
        }
    }
    getData=()=>{
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://127.0.0.1:8000/type',        
        })
            .then(response => {
                this.setState({ type: response.data })
            })
    }

    updateProduct=(data)=>{
        this.setState({
            action:this.submitUpdate
        })
        $('#blah').removeAttr('hidden');
        this.setState({
            id:data.id,
            name:data.name,
            type_product:data.type,
            unit_price:data.unit_price,
            promotion_price:data.promotion_price,
            unit:data.unit,
            image:'source/image/product/'+data.image,
            description:data.description,
        })
    }

    submitUpdate=(event)=>{
        event.preventDefault();
        const form = this.createForm();
        axios({
            method: 'POST',
            data: form,
            url: 'http://127.0.0.1:8000/update',       
        })
            .then(response => {
                this.setState({
                    message:response.data
                })
            })
    }
    createForm = () => {
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('id', this.state.id);
        formData.append('unit_price', this.state.unit_price);
        formData.append('promotion_price', this.state.promotion_price);
        formData.append('unit', this.state.unit);
        formData.append('description', this.state.description);
        formData.append('type', this.state.type_product);
        if(this.state.image!=null)
        formData.append('image', this.state.image1);
        return formData;
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        const form = this.createForm();
        axios({
            method: 'POST',
            data: form,
            url: 'http://127.0.0.1:8000/product',       
        })
            .then(response => {
                this.setState({
                    message:response.data
                })
            })
    }

    componentDidMount() {
		this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.setState({
            action:this.handleSubmit
        })
		this.getData();
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	timer() {
		this.getData();
	}

    handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
          [name]: value
        });
    }

    readURL=(event)=>{
            setTimeout(()=>{
                var reader = new FileReader();
            $('#blah').removeAttr('hidden');
                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                };
                reader.readAsDataURL(event.target.files[0]);
            }
                , 1000
            );
            this.setState({
                image: event.target.files[0]
            });
    }
    render() {
        return (
            <div>
                {this.state.message!=null &&
                <div class="alert alert-success">
                    {this.state.message}
                </div>
                }
                
            <div style={{width:"50%", marginLeft:"auto", marginRight:"auto"}}>
                <Helmet>
                    
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
                </Helmet>
                <form onSubmit={this.state.action} enctype="multipart/form-data">
                    <div class="form-outline form-white mb-4">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-outline form-white">
                                    <input type="text" id="form3Example1" name="name" class="form-control form-control-lg"
                                        placeholder="Name" value={this.state.name} onChange={this.handleInputChange} required />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-outline form-white">
                                    <select class="form-control" value={this.state.type} onChange={this.handleInputChange} name="type_product">
                                        {this.state.type.length>0 && 
                                            this.state.type.map(e=>{
                                                return <option value={e.id}>{e.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-outline form-white mb-4">
                        <input type="number" min="0" id="form3Example3" value={this.state.unit_price} name="unit_price" onChange={this.handleInputChange} class="form-control form-control-lg"
                            placeholder="Unit price" required />
                    </div>

                    <div class="form-outline form-white mb-4">
                        <input type="number" min="0" id="form3Example3" name="promotion_price" value={this.state.promotion_price} onChange={this.handleInputChange} class="form-control form-control-lg"
                            placeholder="Promotion price" required />
                    </div>

                    <div class="form-outline form-white mb-4">
                        <input type="text" min="0" id="form3Example3" name="unit" value={this.state.unit} onChange={this.handleInputChange} class="form-control form-control-lg"
                            placeholder="Unit" required />
                    </div>

                    <div class="form-outline form-white mb-4">
                        <input type="file" name="image" onChange={this.readURL} />
                    </div>

                    <div class="form-outline form-white mb-4">
                        <img style={{width:"8rem",height:"8rem"}} src={this.state.image} hidden id="blah"/>
                    </div>
                     <Helmet>
                            <script src="//cdn.ckeditor.com/4.14.0/standard/ckeditor.js"></script>
                            <script>
                                CKEDITOR.replace('editor')   ;
                            </script>
                        </Helmet>
                        <div class="form-outline form-white mb-4">
                            <textarea class="form-control form-control-lg" id="editor" value={this.state.description} onChange={this.handleInputChange} name="description" rows="3"
                                placeholder="Description" required></textarea>
                        </div>
                        
                        <button type="submit" style={{backgroundColor:"#007bff"}} class="btn btn-light btn-block mb-4">Submit</button>
                </form>
                
            </div>
            <Table update={this.updateProduct}/>
        </div>
        );
    }
}


export default Form;