import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
    constructor(props) {
        super(props);

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
                            <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/198781496_1223852418089661_1813782119207824632_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=QeeeKi2-S18AX-zRYAJ&_nc_ht=scontent-xsp1-1.xx&oh=e129c60dbc53b08d6b54e4e6f16807d7&oe=60C8DCDB" style={{ marginTop: "35px" }} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h3>Our mission</h3>
                            <p>
                                Passerelles numériques is a non-profit organization under French law, created in 2005, operating in three Asian countries: Cambodia, the Philippines and Vietnam.<br /><br />
                                Our mission is to provide education, technical and professional training in the digital sector to young underprivileged people by leveraging their potential and willpower. We endeavour to truly develop their employability which will allow them and their families to escape poverty in a sustainable way, and contribute to the social and economic development of their countries.<br /><br />
                                Our beneficiaries are typically underprivileged or disadvantaged, in extremely precarious situations, according to the criteria PN has defined/specified for each of the countries in which it operates.
                            </p>
                            <h3>Our objectives</h3>
                            <p>
                                PN’s objective is that at least 90% of the students enrolled in our programs can escape poverty, be professionally more successful relatively to the national average, and take advantage of a ‘Gateway for Life’.
                                <br/><br/>
                                PN’s additional objective is to reduce inequality between genders. Therefore, PN strives to enrol a ratio of at least 50% girls (or a maximum of two thirds) at each of our centers.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h3>Our values</h3>
                            <ul>
                                <li><h4 style={{color:"#ff9933"}}>Trust</h4></li>
                                <li><h4 style={{color:"#22bbea"}}>Responsibility</h4></li>
                                <li><h4 style={{color:"#ff9933"}}>Solidarity</h4></li>
                                <li><h4 style={{color:"#22bbea"}}>Respect</h4></li>
                                <li><h4 style={{color:"#ff9933"}}>Demanding approach</h4></li>
                            </ul>
                        </div>
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