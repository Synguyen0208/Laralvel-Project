import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../../Admin/components/API/API';
class Help extends Component {
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
            var doc = parser.parseFromString(response.data[1].content, 'text/html');
            document.getElementById("content").innerHTML=doc.body.innerHTML;
        });
    }
    render() {
        return (
            <section id="help">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h2>HOW CAN WE HELP?</h2>
                    </div>
                    <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-12" id='content'>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Help;