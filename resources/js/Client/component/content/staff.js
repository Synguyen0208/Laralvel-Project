
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './staff.css';
import API from "../../../Admin/components/API/API";
import { toPairsIn } from 'lodash-es';
import InforStaff from './inforStaff';


class Staff extends Component {
    call = new API();
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataShow: [],
            readMore: true,
            buttonSeeMore: true,
        };

    }

    setDataShow = (max) => {
        let itemData = [];
        let numberMax = max;
        let lengthData = this.state.data.length;
        if(max > 5){
            numberMax = lengthData-1,
            this.setState({buttonSeeMore: false})
        }else{
            this.setState({buttonSeeMore: true}) 
        }
        this.state.data.map((e, index )=> {
            if(index < numberMax)
                itemData.push(e)
            else {
                this.setState({
                    dataShow: itemData,
                });
                return true;
            }

        })
    }


    componentDidMount() {
        this.call.callAPI("getstaff", "get", "").then((response) => {
            this.setState({ data: response.data });
           this.setDataShow(3)
        });
    }
    render() {
        return (
            <section id="staffss" class="clients">
                <div className="container-xl">
                    <div className="row">
                        <div class="section-header">
                            <h2>  EMPLOYEES </h2>
                        </div>
                        
                        {
                            this.state.data != null && this.state.dataShow.map(e => {
                                return (
                                    <InforStaff image={e.image} name={e.name} description={e.description}/>
                                )

                            })
                        }
                        {
                            this.state.buttonSeeMore    ? <p  style={{ color: 'rgb(255, 136, 0)' }} onClick={()=>this.setDataShow(6)}> See All... </p> 
                                                        : <p style={{ color: 'rgb(255, 136, 0)' }} onClick={()=>this.setDataShow(3)}> ...Compact </p> 
                        }
                    

                        <div className="col-md-12">
                        <ul>
                            <li className="list active" data-filter="all">All</li>
                            <li className="list" data-filter="mobile">Mobile</li>
                            <li className="list" data-filter="camera">Camera</li>
                            <li className="list" data-filter="watch ">Watch</li>
                            <li className="list" data-filter="shoe">Shoe</li>
                            <li className="list" data-filter="headphone">headphone</li>
                            </ul>
                            <div className="product">
                            <div className="itemBox mobile"><img src="mobile1.jpg" /></div>
                            <div className="itemBox camera"><img src="camera1.jpg" /></div>
                            <div className="itemBox watch"><img src="watch.jpg" /></div>
                            <div className="itemBox shoe"><img src="shoe1.jpg" /></div>
                            <div className="itemBox headphone"><img src="headphone1.jpg" /></div>
                            <div className="itemBox mobile"><img src="mobile2.jpg" /></div>
                            <div className="itemBox camera"><img src="camera2.jpg" /></div>
                            <div className="itemBox watch"><img src="watch2.jpg" /></div>
                            <div className="itemBox shoe"><img src="shoe2.jpg" /></div>
                            <div className="itemBox headphone"><img src="headphone2.jpg" /></div>
                            </div>
                        </div>
                    
                        <div className="col-md-12">
                        
                            
     
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>

                                <div className="carousel-inner">
                                    <div className="item carousel-item active">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Trang.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Generral  Manager </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Võ Hoàng Thùy Trang
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Thanh.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Selection Manager</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Đoàn Triệu Thành
                                                            </div>
                                                        </div>
                                                        {/* <a href="PNV_OrgaChart_April2021.pdf" class="btn btn-primary">Sơ đồ</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Lucas.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>IT &amp; Training Manager</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Lucas INROD
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Oanh.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>External Relations Manage </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Huỳnh Thị Kim Oanh
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Phuong.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Admin, HR &amp; Finance Manager </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Đặng.N Uyên Phương
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Ngoc.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Education Manager</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Châu Mỹ Ngọc
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Diep.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Selection Officer</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Trần Thị Diệp
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Truc.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>IT Trainer</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Trần Thị Thanh Trúc
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Binh.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>IT Admin </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Vũ Thanh Bình
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Dinh.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>IT Trainer</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Võ Công Đình
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_ThuyIT.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>IT Trainer</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Lê Thị Hồng Thủy
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Uyen.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>English Coordinator</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Trần Thị Khánh Uyên
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Thuy.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>English Teacher </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                NGuyễn Thị Thúy
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Thuy.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>English Teacher</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Nguyen Thi Thuy Trang
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Nguyen.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>PLT Coordinator</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Trần Đông Nguyên
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_NgocHR.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Admin, HR &amp; Finance Officer </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Trần Thị Mỹ Ngọc
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="item carousel-item">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Hai.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Educator </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Nguyễn Long Hải
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Nhai.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Educator</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Hồ Thị Ngọc Nhài
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_So.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Cleaner</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Hồ Thị Sô
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Tam.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Security </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Đinh Trường Tam
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Trang.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>GENERRAL MANAGER </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                VÕ Hoàng Thùy Trang
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Thanh.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>Selection Manager</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Đoàn Triệu Thành
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Mr_Lucas.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>IT &amp; Training Manager</h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Lucas INROD
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                    <div className="img-box">
                                                        <img src="images/staffs/Ms_Oanh.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4 style={{ color: 'rgb(255, 136, 0)' }}>External Relations Manage </h4>
                                                        <div className="star-rating">
                                                            <div>
                                                                Huỳnh Thị Kim Oanh
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                {/* Carousel controls */}
                                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                    <i className="fa fa-angle-left" />
                                </a>
                                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                    <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Staff;
