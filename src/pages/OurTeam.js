import React, { Component } from 'react'

export default class OurTeam extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h1 className="main-title__primary">Meet Our Team</h1>
                        </div>
                    </div>
                    <section>
                        <div className="container team_box">
                            <div className="row">
                                <h2>DOCTORS AT KIDSVILLE</h2>
                            </div>
                            <div className="row">    
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                    <div class="card">
                                        <img src="/assets/img/Dr. Anupriya Malonia (Pediatric Dentist).jpg" alt="dr.anu" style={{width:"100%"}} />
                                        <div class="container">
                                            <h2>Dr. Anupriya Malonia</h2>
                                            <p class="title">Pediatric Dentist</p>
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
                                </div>
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                    <div class="card">
                                        <img src="/assets/img/Dr. Manish Panchal (Anesthesiologist).jpg" alt="dr. manish" style={{width:"100%"}} />
                                        <div class="container">
                                            <h2>Dr. Manish Panchal</h2>
                                            <p class="title">MBBS MD PEDIATRICS</p>
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
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                    <div class="card align-items-center">
                                        <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="james king" style={{width:"100%"}} />
                                        <div class="container">
                                            <h2>James King</h2>
                                            <p class="title">Anesthesiologist</p>
                                            <p>kidsvilledental@gmail.com</p>
                                            <div>
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
                        </div>
                    </section>
                    <section className="nurse_box">
                        <div className="container nurse_info">
                            <div className="row ">
                                <h2 className="meet_nur">MEET OUR DENTAL NURSES</h2>
                            </div>
                            <div className="row nurse_txt">    
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                    <p>They keep us organised. They keep us safe. They ensure our patients receive the best from us. Our support staff is impeccable and aligned with the goals of the practice.</p>
                                    <div className="nurse_social_icon">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-linkedin"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-dribbble"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12">   
                                        <div class="card align-items-center">
                                            <img src="/assets/img/nurse.jpg" alt="kajal thakor" style={{width:"50%"}} />
                                            <div class="container">
                                                <h2>Kajal Thakor</h2>
                                                <p class="title">Dental Assistant</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12">   
                                        <div class="card align-items-center">
                                            <img src="/assets/img/nurse.jpg" alt="geeta masi" style={{width:"50%"}} />
                                            <div class="container">
                                                <h2>Geeta Masi</h2>
                                                <p class="title">In-House nurse</p>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                            </div>
                        </div>        
                    </section>     
                </div> 
            </div>         
        )
    }
}
