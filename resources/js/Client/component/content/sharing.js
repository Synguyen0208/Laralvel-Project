import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/sharing.css";
import API from "../../../Admin/components/API/API";
class Sharing extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        this.call.callAPI("sharing", "get", "").then((response) => {
            this.setState({ data: response.data });
        });
    }
    render() {
        return (
            <section id="team" class="pb-5">
                <div class="container">
                    <div class="section-header">
                        <h2>Sharings</h2>
                    </div>
                    <div class="row">
                        {this.state.data != null &&
                            this.state.data.map((element) => {
                                return (
                                    <div class="col-xs-12 col-md-4">
                                        <div class="image-flip">
                                            <div class="mainflip flip-0">
                                                <div class="frontside">
                                                    <div class="card">
                                                        <div class="card-body text-center">
                                                            <p>
                                                                <img
                                                                    class=" img-fluid"
                                                                    src={
                                                                        element.image
                                                                    }
                                                                    alt="card image"
                                                                />
                                                            </p>
                                                            <h4 class="card-title">
                                                                {element.name}
                                                            </h4>
                                                            <p class="card-text">
                                                                {element.title}
                                                            </p>

                                                            <p className="role">
                                                                {element.role}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="backside">
                                                    <div class="card">
                                                        <div class="card-body text-center mt-4">
                                                            <h4 class="card-title">
                                                                {element.name}
                                                            </h4>
                                                            <p class="card-text">
                                                                {
                                                                    element.content
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Sharing;
