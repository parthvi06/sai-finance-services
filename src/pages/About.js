import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const about_slider = {
    margin: 0,
    responsiveClass: true,
    dots: true,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    },
};

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">About Us</h2>
                        </div>
                    </div>
                </div>
                <section className="about_exper">
                    <div className="container">
                        <div className="row dental_exper">
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <img src="/assets/img/Kidsville Castle.png" atl="" />
                            </div>
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <h2 className="team_intro_title">Sai Financial Services is a collective of amazing people striving to build delightful service experience.</h2>
                                <p>At Sai Financial Services, we believe that people with their young developing minds should be cared for with tenderness and compassion. We are obsessively passionate about our mission to provide a seamless and bespoke service experience. We focus on customizing our services. We are excited to simplify financial advisory for our elite customer through our customer-centric approach.</p>
                                <a className="more inner-btn" href="https://www.1scriptics.com/appointment/">Book Your Appointment</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-slider" id={3}>
                    <div className="container-fluid">
                        <OwlCarousel className="owl-theme tech-slider" {...about_slider}>
                            <div>
                                <img src="/assets/img/Kidsville Castle.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Kidsville Operatory.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Exterior.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Post operative area For Sedation Procedures (Image 1).jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Post Operative Area (image 2).png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Sterilization Room.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Reception.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Consultation area.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/Operatory.jpg" alt="" />
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
                <section className="clinic_tour">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="belief_title">OUR BELIEF</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12 text-center clinic_tour_block">
                                <div className="belief_panel card">
                                    <img src="/assets/img/image-1.jpg" alt="" />
                                    <p>We want customers to consider financial advisory visits an integral part of their wealthy lifestyle</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12 text-center clinic_tour_block">
                                <div className="belief_panel card">
                                    <img src="/assets/img/oral-doc.jpg" alt="" />
                                    <p>We go down to clients' level of understanding to inculcate positive attitude towards their wealth</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12 text-center clinic_tour_block">
                                <div className="belief_panel card">
                                    <img src="/assets/img/oral-bug.jpg" alt="" />
                                    <p>We believe to the saving of the soul.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12 text-center clinic_tour_block">
                                <div className="belief_panel card">
                                    <img src="/assets/img/hero-girl2.jpg" alt="" />
                                    <p>We believe in providing enhanced level of service to our valuable clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about_motto">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12 align-items-center">
                                <h2>Sai Financial Services's Motto</h2>
                                <p>Do good, touches every aspect of our practice. From our compassionate and comprehensive model to our practice standards, we see our service as a vehicle to make an impact.</p>
                                <hr className="sep_line" />
                                <a><i className="fa fa-youtube"></i></a>
                                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <img src="/assets/img/banner-happier.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Cbetter-section">
                    <div className="container">
                        <div className="row Cbetter-contact">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <h2 className="Cbetter-txt">CREATE BETTER WEALTH</h2>
                                <a className="cont-today" href="tel:+91 6358834088">Book an appointment</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
