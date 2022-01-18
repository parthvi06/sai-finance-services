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
                
                <section className="banner-slider" id={1}>
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 px-0">
                                <OwlCarousel className="owl-theme tech-slider banner-box" {...home_slider}>
                                    <div className="slide-1">
                                        <img src="/assets/img/banner1.jpg" alt="slider media-1" />
                                        <div className="container-fluid">
                                            <div className="slider-content">
                                                <div className="banner_shadow" id="element">
                                                    <div className="slider_title">
                                                        <h2>Exclusive Pediatric Dental Operatory</h2>
                                                    </div>
                                                    <div className="slider__content">
                                                        <p><a className="more" href="https://blog.kidsvilledental.in/appointment/">Book Online</a><a className="more" href="tel:02070780822"><i className="fa fa-phone"></i> Call</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="slide-2">
                                        <img src="/assets/img/banner2.jpg" alt="slider media-2"/>
                                        <div className="slider-content">
                                            <h2 className="slide_heading">Child Friendly Atmosphere</h2>
                                            <div className="button-appointment">
                                                <a href="https://blog.kidsvilledental.in/appointment/" className="more">Book An Appointment</a>
                                            </div>
                                        </div>    
                                    </div>  
                                    <div className="slide-3">
                                        <img src="/assets/img/banner3.jpg" alt="slider media-3"/>
                                        <div className="slider-content">
                                            <h4 className="slide_text">International Standards Of Sterillization</h4>
                                            <h2>Equipped With Advance Technologies</h2>
                                            <div className="button-appointment">
                                                <a href="https://blog.kidsvilledental.in/appointment/" className="more">Book An Appointment</a>
                                            </div>
                                        </div>    
                                    </div>
                                </OwlCarousel> 
                            </div>
                        </div>
                    </div> 
                </section>
                <section className="Hdifferent" id={2}>
                    <div className="container">
                        <div className="row">  
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 Hdifferent-left text-center">
                                <img src="/assets/img/Dr. Anupriya Malonia(Hdiff).jpg" />  
                            </div>    
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 Hdifferent-right">
                                <div className="col-12 Hdifferent_heading">
                                    <h2>How Are We Different<hr className="Hdifferent_heading_line" /></h2>
                                </div>
                                <p><span>Kidsville Children’s Dentistry</span> is unique in providing comprehensive dental care to kids of all ages.  We are committed to providing best experience to our patients. Our focus is to treat our patients with compassion, care and understanding. We are obsessively passionate to improve and innovate to exceed expectations.We challenge ourselves to do things differently. We envision being a globally respected oral care organization known for clinical excellence and distinctive patient care.</p>
                                <p><a className="more" href="/why-us/">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clinic" id={3}>
                    <div className="container-fluid">
                        <OwlCarousel className="owl-theme tech-slider" {...clinic_slider}>
                            <div>
                                <img src="/assets/img/clinic_slider/Entrance-(2).png" alt="Entrance" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/Operatory.png" alt="Operatory" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/FrontDesk.png" alt="Front Desk" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/Sortingandstorage.png" alt="Sorting and storage" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/FacilityForDaycare.png" alt="Facility For Day care" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/Sterilization@Kidsville.jpg" alt="Sterilization @Kidsville" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/PackagingInstruments.png" alt="Packaging Instruments" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/ReceptionATKidsville.png" alt="Reception @ Kidsville" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/FrontDesk-(2).png" alt="Front Desk" />
                            </div> 
                            <div>
                                <img src="/assets/img/clinic_slider/consultationDesk.png" alt="consultation Desk" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/Operatory(3).png" alt="Operatory" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/ReceptionATKidsville.png" alt="Reception@kidsville" />
                            </div>
                            
                            <div>
                                <img src="/assets/img/clinic_slider/Operatory(3).png" alt="Operatory" />
                            </div>
                            <div>
                                <img src="/assets/img/clinic_slider/Reception@kidsville(2).png" alt="Reception @kidsville" />
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
                <section className="Hservice" id={4}>
                    <div className="container">
                    <h2 className="service_heading">Dental Services</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/kidsvilleicon.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Children's Dentitsry</h3>
                                        <p className="srv-para">Kidsville has been crafted to provide advanced and scientific dental care to infants, toddlers, and children. We have an explicit and precise method of solving all the oral needs which a child could possibly have. Be it a small cavity to extensive procedures, we are committed to providing the highest standard of care.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/kidsvilleicon.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Preventive treatments</h3>
                                        <p className="srv-para">At Kidsville Dental, our pediatric team will recommend a custom-made preventive plan for your child as the needs of each child may vary. Most preventive procedures are quick and easy and go a long way in maintaining a cavity-free mouth. Prevention the best treatment as it allows you to nib the disease at the bud and saves your children all the suffering in the long haul.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/kidsvilleicon.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Early Orthodontics</h3>
                                        <p className="srv-para">Treatment with early orthodontics can minimize the need for braces and is increasingly considered the modern approach. At Kidsville Dental, we can assess your child’s bite and teeth positioning as early as age seven. Taking advantage of a child’s still-growing jaw means we can use gentle treatments that may prevent the need for surgery or long-term braces in the future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/kidsvilleicon.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Sedation services</h3>
                                        <p className="srv-para">Children often feel worried or frightened when visiting the dentist and receiving treatment. We find that one of the alternate ways to lessen their fear is to carry out dental treatment under sedation or General anesthesia. At Kidsville Dental, sedation is provided by a highly skilled team that includes sedation-trained children’s dentists, therapists, and nurses. So, parents can rest assured that their children will receive the highest level of care with us.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/kidsvilleicon.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Dental Emergency</h3>
                                        <p className="srv-para">Dental infection can be notorious in causing pain to your child’s teeth. Depending on the intensity and stage of the disease the nature of the pain can be mild to excruciating, leaving the child unable to eat and sleep. Long standing infections which may have been silent or ignored may suddenly develop into a swelling that may be intraoral or extra oral.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/kidsvilleicon.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Dentistry For Teens</h3>
                                        <p className="srv-para">Every Stage of human development has its own demands of care and we get that. Dentistry for adolescents and teens requires a special emphasis on esthetics and orofacial development. At Kidsville, Pediatric dentists along with orthodontists, provide your teenager with the best smile possible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </section>
                <section className="team" id={5}>
                    <div className="container p-5">
                        <div className="row team-row">
                            <h2 className="team_heading">Team kidsville</h2>
                        </div>    
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 text-center">
                                <div className="card h-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="img-hover-zoom img-hover-zoom--colorize">
                                            <img className="shadow" src="/assets/img/Dr ist(Hteam).jpg" alt="Dr. Ipsit Trivedi" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                    </div>
                                    <div className="my-2 text-center">
                                            <h3>Dr. Ipsit Trivedi</h3>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="text-uppercase text-center role">MDS Orthodontics</h6>
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
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 text-center">
                                <div className="card h-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="img-hover-zoom img-hover-zoom--colorize">
                                            <img className="shadow" src="/assets/img/Dr. Anupriya Malonia(team).jpg" alt="Dr. Anupriya Malonia" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                    </div>
                                    <div className="my-2 text-center">
                                            <h3>Dr. Anupriya Malonia</h3>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="text-uppercase text-center role">BDS MDS Ph.D* Pediatric Dentist</h6>
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
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 text-center">
                                <div className="card h-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="img-hover-zoom img-hover-zoom--colorize">
                                            <img className="shadow" src="/assets/img/Dr. Manish Panchal (Anesthesiologist).jpg" alt="Dr. Manish Panchal" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3"></div>
                                        <div className="my-2 text-center">
                                            <h3>Dr. Manish Panchal</h3>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="text-uppercase text-center role">MD Pediatric Anesthesiologist</h6>
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
                <section className="review" id={6}>
                    <div className="container">
                        <div className="row review_heading justify-content-center">
                            <h2>Parent Reviews</h2>
                        </div>
                    </div>
                    <div className="parent_reviews">
                        <div className="container-fluid">
                            <div className="row">
                                <OwlCarousel className="owl-theme tech-slider" {...parent_review}>
                                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 pa_review text-center">
                                        <div className="pa_review_block">
                                            <div className="pa_review_qoute">
                                                <a className="qoute_icon"><i className="fa fa-quote-right"></i></a>
                                            </div>
                                            <p>"Our daughter had a bad dental experience. A friend of mine talked to me about Kidsville children’s Dentistry. Its been 4 appointments to complete her entire treatment and now she misses her dental visit. They made my life easier."</p>
                                            <a>Payal Shah</a>
                                            <div className="mark"><span className="rating-input"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></span></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 pa_review text-center">
                                        <div className="pa_review_block">
                                            <div className="pa_review_qoute">
                                                <a className="qoute_icon"><i className="fa fa-quote-right"></i></a>
                                            </div>
                                            <p>"My son had developed a swelling in his lower tooth and was in pain all night. We called kidsville right away and the emergency was looked into immediately. The doctor was very patient and took great care of my son."</p>
                                            <a>Preeti Patel</a>
                                            <div className="mark"><span className="rating-input"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></span></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 pa_review text-center">
                                        <div className="pa_review_block">
                                            <div className="pa_review_qoute">
                                                <a className="qoute_icon"><i className="fa fa-quote-right"></i></a>
                                            </div>
                                            <p>"My son eats a lot of chocolates. It caused 7 cavities in his mouth. I was worried as he is a hyperactive child. Initially, he was not complying with the doctor, eventually, with consistency, he not only got all his cavities filled, he looks forward to seeing the doctor."</p>
                                            <a>Shrushti Arora</a>
                                            <div className="mark"><span className="rating-input"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></span></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 pa_review text-center">
                                        <div className="pa_review_block">
                                            <div className="pa_review_qoute">
                                                <a className="qoute_icon"><i className="fa fa-quote-right"></i></a>
                                            </div>
                                            <p>"The service here is always excellent! My children love coming here. The staff is always friendly and the doctors are great. I would advise anyone looking for a good dentist to come try them out."</p>
                                            <a>Tanisha Panchal</a>
                                            <div className="mark"><span className="rating-input"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></span></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 pa_review text-center">
                                        <div className="pa_review_block">
                                            <div className="pa_review_qoute">
                                                <a className="qoute_icon"><i className="fa fa-quote-right"></i></a>
                                            </div>
                                           <p>"Thank you all so much for always being so understanding and patient with our daughter!. She really likes to visit you and follows your advices too. She want to be a dentist like you. You are the best "</p> 
                                            <a>Sunil Patel</a>
                                            <div className="mark"><span className="rating-input"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></span></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 pa_review text-center">
                                        <div className="pa_review_block">
                                            <div className="pa_review_qoute">
                                                <a className="qoute_icon"><i className="fa fa-quote-right"></i></a>
                                            </div>
                                          <p>My son had the appointment today for a routine cleaning. Once again, we were very pleased with your service.We highly recommend Dr.Anupriya for anyone in the market for a pediatric dentist!!!  </p>
                                            <a>Chirag Parekh</a>
                                            <div className="mark"><span className="rating-input"><span className="fa fa-star"></span><span className="fa fa-star"></span><span data-value="2" className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></span></div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>    
                    </div>
                </section>
            </div>
            
        )
    }
}


export default Home