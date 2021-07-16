import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../../Admin/components/API/API';
class About extends Component {
  call=new API;
    constructor(props) {
        super(props);
      this.state={
        data:null
      }
    }
    componentDidMount(){
      this.call.callAPI('pnvalue', "get", '').then(response=>{
        this.setState({
          data:response.data
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
                                </div>
                                
                                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                    <h3>Tầm nhìn</h3>
                                    <p>
                                        Passerelles numériques Vietnam là một tổ chức phi lợi nhuận theo luật của Pháp, được thành lập năm 2005, hoạt động tại 3 quốc gia châu Á: Campuchia, Philippines và Việt Nam.<br /><br />
                                        Sứ mệnh của chúng tôi là cung cấp giáo dục, đào tạo kỹ thuật và chuyên môn trong lĩnh vực công nghệ thông tin cho những bạn trẻ kém may mắn bằng cách tận dụng tiềm năng và ý chí của họ. Chúng tôi nỗ lực để thực sự phát triển khả năng tuyển dụng của họ để giúp họ và gia đình họ thoát nghèo một cách bền vững và đóng góp vào sự phát triển kinh tế và xã hội của đất nước.
                                    </p>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                               
                                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                <div className="thumbnail">
                                        <img className="card-img-top " src="/images/content/selection.jpg" />
                                      </div>
                                    
                                </div>
                                 <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                                 <h3>Mục tiêu</h3>
                                    <p>
                                        Mục tiêu của PN là ít nhất 90% sinh viên đăng ký các chương trình của chúng tôi có thể thoát nghèo và tận dụng lợi thế của 'Cánh cổng cho cuộc sống'.
                                        <br/><br/>
                                        Mục tiêu bổ sung của PN là giảm bất bình đẳng giới tính. Do đó, PN phấn đấu thu nhận tỷ lệ ít nhất 50% là trẻ em gái (hoặc tối đa là 2/3) tại mỗi trung tâm của chúng tôi.
                                    </p>
                                </div>
                            </div>
                          </div>
                          <br></br>
                              <div class="col-lg-12">
                                <div class="row">
                                  <div class="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                    <h3>Giá trị</h3>
                                  </div>
                                </div>
                                  <div className="value-content-one">
                                    <div className="row">
                                      {this.state.data!=null && this.state.data.map(e=>{
                                        if(e.id<=3)
                                        return(
                                        <div className="col-sm-4 col-xs-12">
                                        <div className="value-single text-center">
                                          <div className="value-img">
                                            <img src={e.image} alt="image of service" />
                                          </div>
                                          <div className="value-txt">
                                            <h2>
                                              <h5>{e.name_value}</h5>
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
                                      {this.state.data!=null && this.state.data.map(e=>{
                                        if(e.id>3)
                                        return(
                                        <div className="col-sm-4 col-xs-12">
                                        <div className="value-single text-center">
                                          <div className="value-img">
                                            <img src={e.image} alt="image of service" />
                                          </div>
                                          <div className="value-txt">
                                            <h2>
                                              <h5>{e.name_value}</h5>
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
                              </div>
                          </div>
                        </div>
                        
                        
                      </div>
          
      
            
    </section>
        );
    }
}

export default About;