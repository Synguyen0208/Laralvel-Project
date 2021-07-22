import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-md-6 footer-info text-center">
                                <img
                                    src="assets4/img/pn-logo-footer.png"
                                    alt="Passerellesnumeriques"
                                //style={{height:"30%"}}
                                />
                            </div>

                            <div class="col-lg-4 col-md-6 footer-info">
                                <p>
                                    Passerelles numériques is a non-profit organization under French law, created in 2005, operating in three Asian countries: Cambodia, Philippines and Vietnam.
                                    Passerelles numériques means “digital bridge“, a metaphor for providing free IT training programs to underprivileged youth.
                                    Since 2010, Passerelles numériques Vietnam has built nearly 500 “bridges”, which means we provided 500 poor young people in 7 provinces of Central Vietnam with 500 free training programs.
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#hero">Home</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#schedule">Key Dates</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#training">Training</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#selection">Selection</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#sharing">Sharing</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#staffss">Employee</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#clients">Partner</a>
                                    </li>
                                    <li>
                                        <i class="bi bi-chevron-right"></i>{" "}
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    <strong>Address:</strong>
                                    <br />
                                    99 To Hien Thanh Street
                                    <br />
                                    Da Nang City
                                    <br />
                                    Viet Nam
                                    <br />
                                    <strong>Phone:</strong>
                                    <br />
                                    0236 3888 503
                                    <br />
                                    <strong>Email:</strong> info.vietnam@passerellesnumeriques.org
                                    <br />
                                </p>

                                <div class="social-links">
                                    <a href="https://twitter.com/passerellesnume" class="twitter">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com/passerelles.numeriques" class="facebook">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://www.youtube.com/user/PasserellesNumerique" class="youtube">
                                        <i class="bi bi-youtube"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/passerellesnum-riques" class="linkedin">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#" class="google-plus">
                                        <i class="bi bi-google"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;





