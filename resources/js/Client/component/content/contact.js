import React, { Component } from 'react';
import PropTypes from 'prop-types';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }
  onHandleChange=(event)=>{
    let name= event.target.name;
    let value= event.target.value;
    this.setState({[name]:value});
    console.log(this.state)
  }
  // Mail Form Submission
  addFormData(evt) {
    evt.preventDefault();
    const fd = new FormData();
    fd.append('name',this.state.name);
    fd.append('email',this.state.email);
    fd.append('subject',this.state.subject);
    fd.append('message',this.state.message);
    console.log(fd);
    axios.post('http://localhost:8000/api/contact', fd
    ).then(res => {

      this.myFormRef.reset();
      Swal.fire({
        title: 'Hurray!!',
        text: "Mail has been send successfully.",
        type: 'success',

      });

    }
    );
  }


  render() {
    return (
      <section id="contact" className="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>CONTACT US</h2>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map" />
                <h3>Our Address</h3>
                <p>99 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng 550000</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p>info.vietnam@passerellesnumeriques.org</p>
              </div>
            </div>
            &emsp;
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call" />
                <h3>Call Us</h3>
                <p>+84 236 3888 503</p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-6 ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1104354044514!2d108.24146331472387!3d16.059758038886685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f2ced6d8b%3A0xeac35f2960ca74a4!2zOTkgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1624155628738!5m2!1sen!2s" frameBorder={0} style={{ border: 0, width: '100%', height: '384px' }} allowFullScreen />
            </div>
            <div className="col-lg-6">
              <form  role="form" className="php-email-form" ref={(el) => this.myFormRef = el}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text"  className="form-control" name="name" id="name" placeholder="Your Name" onChange={this.onHandleChange} required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={this.onHandleChange} required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={this.onHandleChange} required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" onChange={this.onHandleChange}  required defaultValue={""} />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <br></br>
                <div className="text-center" ><button type="submit" onClick={this.addFormData}>Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}

export default Contact;