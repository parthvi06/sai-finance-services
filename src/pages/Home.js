import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export class Home extends Component {
    render() {
        const settings = {
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            className: "slider"
        };
        const multiples = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          autoplay: true,
          slidesToScroll: 2,
          autoplaySpeed: 2500,
          arrows: true,
          className: "slider1"
        };    

        return (
            <div>
                <section className="banner-slider" id={1}>
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <Slider {...settings}>
                                    <div className="slide-1">
                                        <img src="/assets/img/Kids-Dentist-04.jpg" alt="slider media-1"/>
                                        <div className="container-fluid">
                                            <div className="slider-content">
                                                <div className="slider_title">
                                                    <h2>Experts in Children’s Dentistry </h2>
                                                </div>
                                                <div className="slider__content">
                                                    <p>What’s more, parents love us too! Book an appointment and see for yourself.</p>
                                                    <p><a className="jumbo1" href="/book-now/">Book Online</a><a className="jumbo2" href="tel:02070780822"><i className="fa fa-phone"></i> Call</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="slide-2">
                                        <img src="/assets/img/Kids-Dentist-03.jpg" alt="slider media-2"/>
                                        <h4 className="slide_text">Dentists that your child loves to be with </h4>
                                        <h2 className="slide_heading">Experts in children's Dentistry</h2>
                                        <div className="button-appointment">
                                            <a href="#" className="button-link " role="button">
                                                <span className="button-text">Book An Appointment</span>
                                            </a>
                                        </div>
                                    </div>  
                                    <div className="slide-3">
                                        <img src="/assets/img/Kids-Dentist-05.jpg" alt="slider media-3"/>
                                        <h4 className="slide_text">Dentists that your child loves to be with </h4>
                                        <h2 className="slide_heading">Experts in children's Dentistry</h2>
                                        <div className="button-appointment">
                                            <a href="#" className="button-link " role="button">
                                                <span className="button-text">Book An Appointment</span>
                                            </a>
                                        </div>
                                    </div>
                                </Slider> 
                            </div>
                        </div>
                    </div> 
                </section>
                <section className="Hdifferent" id={2}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 Hdifferent_heading">
                                <h2>How Are We Different</h2>
                            </div>    
                        </div>
                        <div className="row align-items-center">   
                            <div className="col-12 col-lg-3 col-md-3 col-sm-12 Hdifferent-left">
                                <img src="/assets/img/dr.anu.jpg" />
                            </div>
                            <div className="col-12 col-lg-9 col-md-9 col-sm-12 Hdifferent-right">
                                <p><span>Kidsville Children’s Dentistry</span> is unique in providing comprehensive dental care to kids of all ages.  We are committed to providing best experience to our patients.</p>
                                <p> Our focus is to treat our patients with compassion, care and understanding. We are obsessively passionate to improve and innovate to exceed expectations.</p>
                                <p>We challenge ourselves to do things differently. We envision being a globally respected oral care organization known for clinical excellence and distinctive patient care.</p>
                                <p><a className="more" href="/why-are-we-different/">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clinic" id={3}>
                    <div className="container-fluid">
                        <h2> Multiple items </h2>
                        <Slider {...multiples}>
                            <div>
                                <img src="/assets/img/car-0.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-1.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-2.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-3.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-4.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-5.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-6.png" alt="" />
                            </div>
                            <div>
                                <img src="/assets/img/car-7.png" alt="" />
                            </div>
                        </Slider>
                    </div>
                </section>
                <section className="team" id={4}>
                    <div className="container p-5">
                        <div className="row team-row">
                            <h2 className="team_heading">Team kidsville</h2>
                        </div>    
                        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="img-hover-zoom img-hover-zoom--colorize">
                                            <img className="shadow" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Another Image zoom-on-hover effect" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                    </div>
                                    <div className="my-2 text-center">
                                            <h2>Robert Wood</h2>
                                        </div>
                                        <div className="mb-3">
                                            <h2 className="text-uppercase text-center role">BDS MDS Orthodontics</h2>
                                        </div>
                                        <div className="box">
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
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="img-hover-zoom img-hover-zoom--colorize">
                                            <img className="shadow" src="/assets/img/dr.anu.jpg" alt="Another Image zoom-on-hover effect" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                    </div>
                                    <div className="my-2 text-center">
                                            <h2>Dr. Anupriya Malonia</h2>
                                        </div>
                                        <div className="mb-3">
                                            <h2 className="text-uppercase text-center role">BDS MDS Ph.D* Pediatric Dentist</h2>
                                        </div>
                                        <div className="box">
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
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="img-hover-zoom img-hover-zoom--colorize">
                                            <img className="shadow" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Another Image zoom-on-hover effect" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3"></div>
                                        <div className="my-2 text-center">
                                            <h2>Dr. Ankit Modi</h2>
                                        </div>
                                        <div className="mb-3">
                                            <h2 className="text-uppercase text-center role">MBBS MD Pediatrics</h2>
                                        </div>
                                        <div className="box">
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
                    </div>
                </section>
                <section className="review" id={5}>
                    <div className="container">
                        <div className="row">
                            <h2>Parent Reviews</h2>
                        </div>
                    </div>
                    <div className="carousel-reviews broun-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div id="carousel-reviews" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <div className="col-md-4 col-sm-6">
                                                <div className="block-text rel zmin">
                                                    <a title="" href="#">Payal Shah</a>
                                                    <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3" className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star-empty"></span></span></div>
                                                    <p>"Our daughter had a bad dental experience. A friend of mine talked to me about Kidsville children’s Dentistry. Its been 4 appointments to complete her entire treatment and now she misses her dental visit. They made my life easier."</p>
                                                    <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                                                </div>
                                                <div className="person-text rel">
                                                    <img src="/assets/img/mother.jpg"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 hidden-xs">
                                                <div className="block-text rel zmin">
                                                    <a title="" href="#">Preeti Patel</a>
                                                    <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3" className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star-empty"></span></span></div>
                                                    <p>"My son had developed a swelling in his lower tooth and was in pain all night. We called kidsville right away and the emergency was looked into immediately. The doctor was very patient and took great care of my sony."  </p>
                                                    <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                                                </div>
                                                <div className="person-text rel">
                                                    <img src="/assets/img/mother.jpg"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                                <div className="block-text rel zmin">
                                                    <a title="" href="#">Shrushti Arora</a>
                                                    <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3" className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span></div>
                                                    <p>"My son eats a lot of chocolates. It caused 7 cavities in his mouth. I was worried as he is a hyperactive child. Initially, he was not complying with the doctor, eventually, with consistency, he not only got all his cavities filled, he looks forward to seeing the doctor."</p>
                                                    <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                                                </div>
                                                <div className="person-text rel">
                                                    <img src="/assets/img/mother.jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col-md-4 col-sm-6">
                                                <div className="block-text rel zmin">
                                                    <a title="" href="#">Tanisha Panchal</a>
                                                    <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3" className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star-empty"></span></span></div>
                                                    <p>"The service here is always excellent! My children love coming here. The staff is always friendly and the doctors are great. I would advise anyone looking for a good dentist to come try them out."</p>
                                                    <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                                                </div>
                                                <div className="person-text rel">
                                                    <img alt="" src="/assets/img/mother.jpg"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 hidden-xs">
                                                <div className="block-text rel zmin">
                                                    <a title="" href="#">Sunil Patel</a>
                                                    <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3" className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span></div>
                                                    <p>"Thank you all so much for always being so understanding and patient with our daughter!. She really likes to visit you and follows your advices too. She want to be a dentist like you. You are the best "</p>
                                                    <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                                                </div>
                                                <div className="person-text rel">
                                                    <img alt="" src="/assets/img/father.jpg"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                                <div className="block-text rel zmin">
                                                    <a title="" href="#">Chirag Parekh</a>
                                                    <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3" className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span></div>
                                                    <p>My son had the appointment today for a routine cleaning. Once again, we were very pleased with your service.We highly recommend Dr.Anupriya for anyone in the market for a pediatric dentist!!!  </p>
                                                    <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                                                </div>
                                                <div className="person-text rel">
                                                    <img alt="" src="/assets/img/father.jpg"/>
                                                </div>
                                            </div>
                                        </div>                    
                                    </div>
                                    <a className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left"></span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                    </a>
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