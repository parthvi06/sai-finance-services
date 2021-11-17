import React, { Component } from 'react';

export default class Location extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Kidsville Dental Location</h2>
                        </div>
                    </div>
                </div>
                <section className="loc_gallery">
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                                <img src="/assets/img/Kidsville Operatory.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                                <img src="/assets/img/Exterior.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                                <img src="/assets/img/Post operative area For Sedation Procedures (Image 1).jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                                <img src="/assets/img/Consultation area.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                                <img src="/assets/img/Reception.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                                <img src="/assets/img/Post Operative Area (image 2).png" alt="" />
                            </div>
                        </div>
                    </div>   
                </section>
                <section className="loc_doc_team">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2 className="team_title">DOCTORS AT KIDSVILLE</h2>
                            </div>    
                        </div>
                        <div className="row">    
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <div className="loc_doc align-items-center card">
                                    <img src="/assets/img/Dr. Anupriya Malonia(team).jpg" alt="dr.anu" />
                                    <h3>Dr. Anupriya Malonia</h3>
                                    <p className="title">Pediatric Dentist</p>
                                    <p>dranupriyapedodontist@gmail.com</p>
                                    <div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <div className="loc_doc align-items-center card">
                                    <img src="/assets/img/Dr. Manish Panchal (Anesthesiologist).jpg" alt="dr. manish" />
                                    <h3>Dr. Manish Panchal</h3>
                                    <p className="title">MD Pediatric Anesthesiologist</p>
                                    <p>kidsvilledental@gmail.com</p>
                                    <div className="team-social-icon">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <div className="loc_doc align-items-center card">
                                    <img src="/assets/img/Dr ist(Hteam).jpg" alt="james king" />
                                    <h3>Dr. Ipsit Trivedi</h3>
                                    <p className="title">MDS Orthodontics</p>
                                    <p>kidsvilledental@gmail.com</p>
                                    <div className="team-social-icon">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="kdifferent">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>HOW IS KIDSVILLE DIFFERENT?</h2>
                                <p>We are excited to simplify dentistry for children through child centric approach.</p>
                            </div>    
                        </div>    
                        <div className="row kdiff_det"> 
                            <div className="col-12 col-lg-12 col-md-6 col-sm-12">
                                <div className="kdiff_1">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                            <img src="/assets/img/Dental-Sealant.jpg" alt="" />
                                        </div>
                                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                            <h3>We offer most innovative, advanced, and comprehensive dental care to kids</h3>
                                            <hr className="sep_line" />
                                            <p>Young and developing minds require a totally different approach to dentistry than adults. To bridge this gap, we have innovated our style to cater to the needs of this segment.</p>
                                            <a className="more">Book Now</a>
                                        </div>
                                    </div>    
                                </div>
                            </div>    
                            <div className="col-12 col-lg-12 col-md-6 col-sm-12">    
                                <div className="kdiff_2">
                                    <div className="row reverse_col">    
                                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                            <h3>Our State of the art dental clinic focusses on making dental visit a fun experience for kids</h3>
                                            <hr className="sep_line" />
                                            <p>Alleviating anxiety and making dentistry stress-free for kids along with an advanced and scientific approach is the core concept of Kidsville.</p>
                                            <a className="more">Book Now</a>
                                        </div>
                                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                            <img src="/assets/img/visit_fun.jpg" alt="" />
                                        </div>
                                    </div>    
                                </div>
                            </div>        
                        </div>
                    </div>        
                </section>
                <section className="treatment">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="trt_title">
                                    <h2>What types of dental treatments are provided at Kidsville?</h2>
                                </div>
                            </div>    
                        </div> 
                        <div className="row trt_txt">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 trt_txt_1">  
                                <p>Dental examination and monitoring with low dose digital x ray unit</p>   
                                <p>Preventive and restorative dentistry</p>
                                <p>Sedation services including general anesthesia</p>
                                <p>Early and teen orthodontics</p>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 trt_txt_2">     
                                <p>Emergency services</p>   
                                <p>Management of oral habits</p>
                                <p>Sports dentistry</p>
                                <p>Children’s root canal treatment and crowns</p>
                            </div>
                        </div>
                    </div>       
                </section>
                <section className="intouch">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-8 col-sm-12 intouch_del">
                                <h3>Get in touch</h3>
                                <p><a href="mailto:info@kidsville.in"><i className="fa fa-envelope">Send an Email</i></a></p>
                                <a className="book_now">Book Online</a>
                                <div className="loc_time">
                                    <h3 className="">Opening Hours</h3>
                                    <p><strong>Monday - Saturday:</strong><br/>10:30am – 8:30pm<br/>
                                    <br/><strong>Sunday : Closed</strong></p>
                                </div>
                                <div className="loc_addrs">    
                                    <p className="clinics"><strong>Kidsville Dental,</strong>
                                        <br/>Adhyashakti Society, Beside Maharaja Complex, Near Balaji garden restaurant, Prernatirth Derasar Road, Prahladnagar,
                                        <br/> Satellite, Ahmedabad – 380015<br/>
                                    </p>    
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-md-8 col-sm-12">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.125078255007!2d72.51774251496775!3d23.019179284954767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bda21b9e281%3A0xdb2787e8ce40fe7e!2sKidsville%20Dental-%20Best%20pediatric%20dentist%2F%20pediatric%20dentist%20in%20Ahmedabad%2Fchildren&#39;s%20dentist%2Fkids%20dental%20clinic%2F%20root%20canal%20in%20children!5e0!3m2!1sen!2sin!4v1635413214230!5m2!1sen!2sin" allowFullScreen="" className="loc_map" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>        
        )
    }
}




