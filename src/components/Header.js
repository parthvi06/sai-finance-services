import React from 'react';
function Header() {
    return (
            <header className="header navbar-light" role="banner">
                <div className="container-fuild" id="head-stuff">
                    <div className="logo">
                        <a href="https://kidsvilledental.in">
                            <img src="/assets/img/kidsville logo-2.png" alt="kidsville Dental" className="img-responsive" width="250" height="120" />
                        </a>
                    </div>
                    <div className="header-widgets  header-widgets-desktop">
                        <div className="pink-offer widget  widget_black_studio_tinymce">
                            <div className="top-header-left">
                                <ul class="list-inline xs-text-center m-0">
                                    <li class="styled-icons icon-sm icon-bordered icon-circled clearfix topicon"> <a className="white-text" href="https://www.facebook.com/kidsville/" target="_blank"><i class="fa fa-facebook"></i></a> <a className="white-text" href="https://www.instagram.com/kidsville/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="top-header-right">
                                <a href="/" class="btn appointment-btn white-text">APPOINTMENT</a>&emsp;<a class="white-text" href="/"> Mon - Sat 11:00am to 8:00pm </a> | <a class="white-text" href="/"> Sunday By Appointment</a> | <a class="white-text" href="tel:+91 6358834088"> Emergency Treatment 24 x 7 - Call 6358834088</a>
                            </div>        
                        </div>        
                    </div>
                </div>
                <div className="container-fuild">  
                    <div className="navbar navbar-expand-lg">
                        <div className="kidsville-logo">
                            <a href="https://kidsville.in">
                                <img src="/assets/img/kidsville logo-2.png" alt="kidsville Dental" className="img-responsive" width="180" height="100" />
                            </a>
                        </div>    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>         
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/" data-toggle="dropdown" aria-expanded="false">Home</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/our-team">Meet Our Team!</a>
                                        <a href="/about">About Us</a>
                                        <a href="/why-us">Why US?</a>
                                        <a href="/blogs">Blogs</a>
                                        <a href="/location">Location</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/children-dentistry" data-toggle="dropdown" aria-expanded="false">Children's Dentistry</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/your-first">Your First Visit</a>
                                        <a href="/filling">Filling</a>
                                        <a href="#">Root Canal Treatment in children</a>
                                        <a href="#">Children's Crowns</a>
                                        <a href="#">Tooth Removal</a>
                                        <a href="#">Space Maintainer</a>
                                        <a href="#">Digital X-ray</a>
                                        <a href="#">Emergency Dental Treatment</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className=" dropdown-toggle" href="/preventive-dentistry" data-toggle="dropdown" aria-expanded="false">Preventive Dentistry</a>
                                        <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="/dental-hygiene">Dental Hygiene For Children</a>
                                            <a href="/dental-hypomineralization">Dental Hypomineralization</a>
                                            <a href="/dental-sealant">Dental Sealants</a>
                                            <a href="/fluoride-varnish">Fluoride Varnish</a>
                                        </div>
                                    </button>
                                </div>    
                            <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/sedation-services" data-toggle="dropdown" aria-expanded="false">Sedation Services</a>
                                        <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="/iv-sedation">Treatment under IV Sedation</a>
                                            <a href="/gerenal-anesthesia">Treatment Under General Anesthesia</a>
                                        </div>
                                    </button>
                                </div>    
                            <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/othodontics" data-toggle="dropdown" aria-expanded="false">Orthodontics</a>
                                        <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="#">Braces Consdivt</a>
                                            <a href="#">Orthodontic Corrections</a>
                                            <a href="#">Braces</a>
                                            <a href="#">Invisalign</a>
                                            <a href="#">Clear Aligners or Braces?</a>
                                            <a href="#">Early Orthodontics</a>
                                            <a href="#">Management of Oral Habits</a>
                                            <a href="#">Orthodontics for Teens</a>
                                            <a href="#">Myofunctional Treatment</a>
                                            <a href="#">Retainers</a>
                                        </div>
                                    </button>
                                </div>
                                <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/kidsville-max" data-toggle="dropdown" aria-expanded="false">Contact US</a>
                                        <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="/covid-update">Covid 19 Updates</a>
                                            <a href="/sign-up">Newsletter Sign-Up</a>
                                            <a href='/faq'>FAQs</a>
                                        </div>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>   
            </header>
    )
}
        
export default Header                    