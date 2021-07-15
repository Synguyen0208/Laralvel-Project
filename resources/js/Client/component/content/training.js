import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../../Admin/components/API/API';
class Training extends Component {
    api=new API();
    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }
    componentDidMount(){
        var parser = new DOMParser();
        this.api.callAPI('training', 'get', '').then((response) => {
            this.setState({
                data:response.data
            })
            var doc = parser.parseFromString(response.data[0].content, 'text/html');
            document.getElementById("train").innerHTML=doc.body.innerHTML;
        });
    }
    render() {
        return (
            <section id="training">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h2>TRAINING</h2>
                    </div>
                    <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-12" id='train'>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Training;