import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import "./slider.css";
class Partner extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section id="clients" class="clients">
                
                <div class="container" data-aos="zoom-in">
                    
                    <div class="section-header">
                        <h2>   PARTNER </h2>
                    </div>

                    <div class="container-fluid">
                        <div class="row gx-2">
                            <div>
                                <h4 style={{ color: 'rgb(34, 187, 234)' }, { backgroundColor: 'rgb(0, 191, 255)' }}>Những đối tác chính hỗ trợ PN Việt Nam</h4>
                                <p>Với mong muốn mang đến những điều tốt nhất cho sinh viên PN Việt Nam, chúng tôi đánh giá cao sự hỗ trợ của các đối tác về đào tạo và tài chính. Bạn có thể hỗ trợ chúng tôi theo nhiều cách như hỗ trợ bằng hiện vật, đào tạo và chia sẻ kiến thức.</p>
                            </div>
                            <div class="col-12">
                                <div class="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Agility-IO.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Code-engine.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Orient.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/07/seadev.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/06/Logigear-logo.png" alt="products" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">
                                    <div class="swiper-wrapper">
                                  
                                      
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Neolab.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Sunbytes.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Sunbytes.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/06/Logigear-logo.png" alt="products" />
                                        </div>
                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/06/Logigear-logo.png" alt="products" />
                                        </div>

                                        <div class="swiper-slide h-auto" style={{ width: "20%" }}><img class="w-100" src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/06/Logigear-logo.png" alt="products" />
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div class="col-12">
                                <div class="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">
                                    <div>
                                        <h4 style={{ color: 'rgb(34, 187, 234)' }, { backgroundColor: 'rgb(0, 191, 255)' }}>Những đối tác địa phương hỗ trợ PN Việt Nam</h4>

                                    </div>

                                </div>
                                <div className="gallery-slider swiper-container">
                                    <div className="swiper-wrapper align-items-center">
                                    {/* {
                                            this.state.data!=null &&this.state.data.map(e=>{
                                                if(e.type=='Local partner'){
                                                    return(
                                                       
                                                        <div className="swiper-slide"><img src={'../images/' + e.image} className="img-fluid" alt="" /></div>
                                                    
                                                        )
                                                }
                                            })
                                        } */}
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/07/linkbynet-400x284.png" className="img-fluid" alt="" /></div>
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2020/10/Logo_Luciole.png" className="img-fluid" alt="" /></div>
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/microsoft-logo-400x284.jpg " className="img-fluid" alt="" /></div>
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2018/02/motorola-solutions-foundation-400x284.png" className="img-fluid" alt="" /></div>
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/microsoft-logo-400x284.jpg " className="img-fluid" alt="" /></div>
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2016/07/Thales_logo.jpg " className="img-fluid" alt="" /></div>
                                        {/* <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Neolab.png" className="img-fluid" alt="" /></div>
                                        <div className="swiper-slide"><img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/04/Orient.pn" className="img-fluid" alt="" /></div> */}

                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Partner;