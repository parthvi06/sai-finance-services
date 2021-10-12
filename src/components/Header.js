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
                        <div className=" teal-offer widget  widget_black_studio_tinymce">
                            <h2 className="widgettitle">Covid Notice</h2>
                            <div className="textwidget"><strong>Covid-19 Update</strong> - Important Information.<a href="/"><strong>Read More</strong></a>
                            </div>
                        </div>
                        <div className="pink-offer widget  widget_black_studio_tinymce">
                            <h2 className="widgettitle">Special Offer 1</h2>
                            <div className="textwidget"><strong>Braces/Invisalign Consultations</strong> - Schedule a consultation.<a href="/"><strong>Click Here</strong></a>
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
                                        <a href="#">Meet Our Team!</a>
                                        <a href="#">About Us</a>
                                        <a href="#">Why US?</a>
                                        <a href="#">Location</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/children-dentistry" data-toggle="dropdown" aria-expanded="false">Children's Dentistry</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="#">Your First Visit</a>
                                        <a href="#">Filling</a>
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
                                            <a href="#">Dental Hygiene For Children</a>
                                            <a href="#">Dental Hypomineralization</a>
                                            <a href="#">Dental Sealants</a>
                                            <a href="#">Fluoride Varnish</a>
                                        </div>
                                    </button>
                                </div>    
                            <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/sedation-services" data-toggle="dropdown" aria-expanded="false">Sedation Services</a>
                                        <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="#">Treatment under IV Sedation</a>
                                            <a href="#">Treatment Under General Anesthesia</a>
                                        </div>
                                    </button>
                                </div>    
                            <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/othodontics" data-toggle="dropdown" aria-expanded="false">Othodontics</a>
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
                                    <button className="contact-menu dropbtn"><a href="/contact-us">Contact US</a></button>
                                </div> 
                            <div className="dropdown navbar-nav end">
                                    <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/kidsville-max" data-toggle="dropdown" aria-expanded="false">Kidsville Max</a>
                                        <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="/blogs">Blogs</a>
                                            <a href="#">Covid 19 Updates</a>
                                            <a href="#">Newsletter Sign-Up</a>
                                                <a href='#'>FAQs</a>
                                        </div>
                                    </button>
                                </div>
                            <div className="appointment-btn dropdown navbar-nav end"><a href="/">appointment</a></div>  
                        </div>
                    </div>
                </div>   
            </header>
    )
}
        
export default Header                    