import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../../Admin/components/API/API';
class About extends Component {
  call = new API;
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.call.callAPI('pnvalue', "get", '').then(response => {
      this.setState({
        data: response.data
      })
    })
  }
  render() {
    return (
      <section id="about">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>ABOUT US</h2>
          </div>
          <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                    <div className="thumbnail">
                      <img className="card-img-top " src="/images/content/camping.jpg" />
                    </div>
                    <br />
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                    <h3 class='about-title'>Vision</h3>
                    <p class='it'>
                      Passerelles numériques Vietnam is a non-profit organization under French law, established in 2005, operating in 3 Asian countries: Cambodia, Philippines and Vietnam.<br /><br />
                                        Our mission is to provide education, technical training and expertise in the field of information technology to underprivileged young people by leveraging their potential and will. We work hard to really develop their employability to help them and their families move out of poverty in a sustainable way and contribute to the economic and social development of the country.
                    </p>
                    <h3 class='about-title'>Target</h3>
                    <p class='it'>
                      PN's goal is that at least 90% of students enrolled in our programs can escape poverty and take advantage of the 'Gateway to Life'.
                      <br /><br />
                      An additional goal of PN is to reduce gender inequality. As a result, PN strives to enroll at least 50% girls (or a maximum of 2/3) in each of our centers.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div className="value-content-one">
                  <h3 class='about-title'>Value</h3>
                  <div className="row">
                    {this.state.data != null && this.state.data.map(e => {
                      if (e.id <= 3)
                        return (
                          <div className="col-sm-4 col-xs-12">
                            <div className="value-single text-center">
                              <div className="value-img">
                                <img src={'../images/' + e.image} alt="image of service" />
                              </div>
                              <div className="value-txt">
                                <h2>
                                  <h4 class='it'>{e.name_value}</h4>
                                </h2>
                              </div>
                            </div>
                          </div>
                        )
                    })}
                  </div>
                </div>
                <div className="value-content-two">
                  <div className="row">
                    <div className="col-sm-2 col-xs-12">
                    </div>
                    {this.state.data != null && this.state.data.map(e => {
                      if (e.id > 3)
                        return (
                          <div className="col-sm-4 col-xs-12">
                            <div className="value-single text-center">
                              <div className="value-img">
                                <img src={'../images/' + e.image} alt="image of service" />
                              </div>
                              <div className="value-txt">
                                <h2>
                                  <h4 class='it'>{e.name_value}</h4>
                                </h2>
                              </div>
                            </div>
                          </div>
                        )
                    })}
                    <div className="col-sm-2 col-xs-12">
                    </div>
                  </div>
                </div>
                <div class='video-responsive'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/v6BAKdfRq6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;