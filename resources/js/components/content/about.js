import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{width:"100%"}}>
            <section id="about" class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                            <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/198781496_1223852418089661_1813782119207824632_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=QeeeKi2-S18AX-zRYAJ&_nc_ht=scontent-xsp1-1.xx&oh=e129c60dbc53b08d6b54e4e6f16807d7&oe=60C8DCDB" style={{ marginTop: "100px" }} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h1 class="title">About Us</h1>
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
                <div class="container" style={{marginTop:"3rem"}}>
                    <div class="row">
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h3>Our values</h3>
                            <ul>
                                <li><h4 style={{color:"#ff9933"}}><i class="bi bi-check-circle"></i>Trust</h4></li>
                                <li><h4 style={{color:"#22bbea"}}><i class="bi bi-check-circle"></i>Responsibility</h4></li>
                                <li><h4 style={{color:"#ff9933"}}><i class="bi bi-check-circle"></i>Solidarity</h4></li>
                                <li><h4 style={{color:"#22bbea"}}><i class="bi bi-check-circle"></i>Respect</h4></li>
                                <li><h4 style={{color:"#ff9933"}}><i class="bi bi-check-circle"></i>Demanding approach</h4></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h3>Key Dates</h3>
                            <ul>
                                <li><i class="bi bi-check-circle"></i>2016: Creation of the legal entity « PN SEA » (South East Asia) in Singapore with an objective of fundraising & awareness to Passerelles numériques’ actions</li>
                                <li><i class="bi bi-check-circle"></i>2015: Passerelles numériques celebrates its 10 years! Since the beginning, more than 1,500 underprivileged students came through PN’s training program and can now live the life they have chosen.</li>
                                <li><i class="bi bi-check-circle"></i>2013: Creation of Passerelles numériques Hong Kong Limited, a charity, run by a team of volunteers, which aims to raise awareness and collect funds to support PN’s actions.</li>
                                <li><i class="bi bi-check-circle"></i>2012: 1st graduation of 24 students in PN Philippines and 27 students in PN Vietnam</li>
                                <li><i class="bi bi-check-circle"></i>2010: Creation of PN Vietnam: new program launched in Danang with an initial intake of 30 students.</li>
                                <li><i class="bi bi-check-circle"></i>2009: Creation of PN Philippines: new program launched in Cebu city with an initial intake of 25 students.</li>
                                <li><i class="bi bi-check-circle"></i>2007: 20 students graduated in Cambodia (System & Network Administration training program).</li>
                                <li><i class="bi bi-check-circle"></i>2006: Creation of the legal structure Passerelles numériques, a French non-profit organisation.</li>
                                <li><i class="bi bi-check-circle"></i>2005: Opening of the Centre for Information Systems Training (CIST), former name of PN Cambodia, the 1st first training centre based in Phnom Penh, Cambodia with Accenture and Enfants du Mékong (initial intake of 25 students).</li>
                            </ul>
                    </div>
                </div>
            </section>
            
            </div>
        );
    }
}

export default About;