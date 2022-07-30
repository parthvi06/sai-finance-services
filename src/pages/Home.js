import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Helmet } from 'react-helmet';
const parent_review = {
    margin: 10,
    responsiveClass: true,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    loop:true,
    autoplay: true,
    smartSpeed: 1800,
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
            items: 3,
        }
    },
};
const clinic_slider = {
    margin: 10,
    responsiveClass: true,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    loop:true,
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
const home_slider = {
    margin: 10,
    responsiveClass: true,
    dots:true,
    loop:true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    },
};

export class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Kidsville | Pediatric Dental Hospital</title>
                    <meta name="description" content="kidsville "/>
                </Helmet>
                
                <section className="Sai-service" id={4}>
                    <div className="container">
                    <h2 className="service_heading">Apply For Citi Credit Card</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/IndianOil-Citi-Platinum-Credit-Card-2.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Indian Oil Citi Credit Card</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/Citi-Rewards-Credit-Card.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Citi Rewards Credit Card</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/Citi-Cash-Back-Credit-Card.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Citi CashBack Credit Card</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/Citi-PremierMiles-Card.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Citi PremierMiles Card</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </section>
            </div>
            
        )
    }
}


export default Home