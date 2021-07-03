import React, { Component } from 'react';
import './new.css';

import API from "../../../../Admin/components/API/API";
class NewBottom extends Component {
  call = new API();
  constructor(props) {
      super(props);
      this.state = {
          data: null,
      };
  }
  componentDidMount() {
      this.call.callAPI("blog", "get", "").then((response) => {
          this.setState({ data: response.data });
      });
  }
    render() {
        return (
            <div class="container">
            <div className="gallery-slider swiper-container">
              <div className="swiper-wrapper align-items-center card-columns">
              {this.state.data != null &&
                  this.state.data.map((element) => {
                    return (
                                <div class="container-news ">
                                  <div class="container-new">
                                    <div class="card ">
                                        <div class="face face1">
                                            <div class="content">
                                                <div class="icon">
                                                    <img src={element.image} class="fa fa-linkedin-square"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="face face2">
                                            <div class="content">
                                                <h4>
                                                    <a href={element.content_details} ><b>{element.title}</b></a>
                                                </h4>
                                                <p><a>{element.content}</a><a href={element.content_details}>Read more</a></p>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                          
                      
                      );
                    })}   
                </div>
                
            </div>
            </div>
        );
    }
}

export default NewBottom;