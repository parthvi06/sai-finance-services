import React from 'react';
function Header() {
    return (
            <header id="masthead" className="site-header">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <a className="navbar-brand site-logo" href="/">
                                <img src="/assets/img/kidsville logo.png" alt="scriptics logo"/>
                            </a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/">Home <span className=""></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Meet Our Team!</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Why US?</a></li>
                                        <li><a href="#">Location</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/children-dentistry">Children's Dentistry <span className=""></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Your First Visit</a></li>
                                        <li><a href="#">Filling</a></li>
                                        <li><a href="#">Root Canal Treatment in children</a></li>
                                        <li><a href="#">Children's Crowns</a></li>
                                        <li><a href="#">Tooth Removal</a></li>
                                        <li><a href="#">Space Maintainer</a></li>
                                        <li><a href="#">Digital X-ray</a></li>
                                        <li><a href="#">Emergency Dental Treatment</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/preventive-dentistry">Preventive Dentistry <span className=""></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Dental Hygiene For Children</a></li>
                                        <li><a href="#">Dental Hypomineralization</a></li>
                                        <li><a href="#">Dental Sealants</a></li>
                                        <li><a href="#">Fluoride Varnish</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/sedation-services">Sedation Services <span className=""></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Treatment under IV Sedation</a></li>
                                        <li><a href="#">Treatment Under General Anesthesia</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/orthodontics">Orthodontics <span className=""></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Braces Consult</a></li>
                                        <li><a href="#">Orthodontic Corrections</a></li>
                                        <li><a href="#">Braces</a></li>
                                        <li><a href="#">Invisalign</a></li>
                                        <li><a href="#">Clear Aligners or Braces?</a></li>
                                        <li><a href="#">Early Orthodontics</a></li>
                                        <li><a href="#">Management of Oral Habits</a></li>
                                        <li><a href="#">Orthodontics for Teens</a></li>
                                        <li><a href="#">Myofunctional Treatment</a></li>
                                        <li><a href="#">Retainers</a></li>
                                    </ul>
                                </li>
                                <li className=""><a href="/contact-us">Contact US</a></li>
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/kidsville-max">Kidsville  Max<span className=""></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Blogs</a></li>
                                        <li><a href="#">Covid 19 Updates</a></li>
                                        <li><a href="#">Newsletter Sign-Up</a></li>
                                        <li><a href='#'>FAQs</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                
            </header>
    )
}
        


export default Header                    