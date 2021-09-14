import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            className: "slider"
        };    
        return (
            <div>
                <section className="banner-slider" id={1}>
                    <div className="container-fuild">
                        <div className="row" >
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <Slider {...settings}>
                                    <div className="slide-1">
                                        <img src="/assets/img/Kids-Dentist-03.jpg" alt="slider media-1"/>
                                    </div>
                                    <div className="silde-2">
                                        <img src="/assets/img/Kids-Dentist-04.jpg" alt="slider media-2"/>
                                    </div>  
                                    <div className="slide-3">
                                        <img src="/assets/img/Kids-Dentist-05.jpg" alt="slider media-3"/>
                                    </div>
                                </Slider>  
                            </div>
                        </div>
                    </div> 
                </section>
            </div>
        )
    }
}


export default Home