import React, { Component } from 'react'
import axios from 'axios';
export class Footer extends Component {
    state = { blogs: [], isLoaded: false }
    componentDidMount() {
        axios.get('https://blog.kidsvilledental.in//wp-json/wp/v2/blogs/?_embed&per_page=2&order=desc')
            .then(res => this.setState({ blogs: res.data, isLoaded: true }))
            .catch(err => console.log(err));     
    }

    render() {
        const { blogs, isLoaded } = this.state;
        console.log(this.state);
        if(isLoaded){}
        return (
            <div>
            <footer>
            <section className="socialmedia">
                <div className="socials">
                    <h6 className="footer__headings">Connect with Us</h6>
                    <ul>
                        <li><a target="_blank" href="https://twitter.com/kidsville"><i className="fa fa-twitter"></i> </a></li>
                        <li><a target="_blank" href="https://www.facebook.com/kidsville/"><i className="fa fa-facebook"></i> </a></li>
                        <li><a target="_blank" href="https://www.whatsapp.com/"><i className="fa fa-whatsapp"></i> </a></li>
                        <li><a target="_blank" href="https://www.instagram.com/kidsville/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </section>    
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="  col-xs-12  col-md-3">
                            <div className="widget  widget_black_studio_tinymce  push-down-30"><h6  className="footer__headings">Contact Us</h6>
                                <div className="textwidget">
                                    <h4><a href="tel:+91 6358834088"><i  className="fa fa-phone"></i>&nbsp;+91 6358834088</a></h4>
                                    <h4><a href="tel: 07926922152 "><i  className="fa fa-phone"></i>&nbsp;07926922152</a></h4>
                                    <p><a href="mailto:info@kidsville.in">Send an Email</a></p>
                                    <p className="clinics"><strong>Kidsville Dental,</strong>
                                        <br/>Adhyashakti Society, Beside Maharaja Complex, Near Balaji garden restaurant, Prernatirth Derasar Road, Prahladnagar,
                                        <br/> Satellite, Ahmedabad – 380015<br/>
                                        <a href="https://goo.gl/maps/4tN2SwXfwUNnU4DF7" rel="noopener" target="_blank"><i className="fa fa-map-pin"></i> Get directions</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" opening col-xs-12  col-md-3">
                            <div className="widget  widget_black_studio_tinymce  push-down-30">
                                <h6 className="footer__headings">Opening Hours</h6>
                                <div className="textwidget">
                                    <p>We will be open the following hours<br/></p>
                                    <h3><strong>Monday - Saturday:</strong><br/></h3>
                                    <p>10:30am – 8:30pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12  col-md-3">
                            <div className="widget  push-down-30">
                                <div id="rpwwt-recent-posts-widget-with-thumbnails-2" className="rpwwt-widget">
                                    <h6 className="footer__headings">Latest Blog Posts</h6>
                                    {blogs.map(blog=>(
                                        <div>
                                        <ul>
                                            <li><a href={`/blogs/${blog.id}`}>
                                            <div className="footer-post"><img src={ blog._embedded['wp:featuredmedia']['0'].source_url }/></div>
                                            <div className="footer-title">{blog.title.rendered}</div></a>
                                            {blog.date.slice(0,-9)}
                                            </li>
                                         </ul>
                                        </div>
                                     ))}
                                </div>      
                            </div>
                       </div>
                        <div className="col-xs-12  col-md-3">
                            <div className="widget  push-down-30">
                                <h6 className="footer__headings">Information</h6>
                                <div className="menu-footer-menu-container">
                                    <details>
                                        <summary>HOME</summary>
                                        <ul className="menu" id="menu-footer-menu">
                                            <li className=""><a href="/our-team">Meet Our Team!</a></li>
                                            <li className=""><a href="/about">About Us</a></li>
                                            <li className=""><a href="/why-us">Why US?</a></li>
                                            <li className=""><a href="/blogs">Blogs</a></li>
                                            <li className=""><a href="/location">Location</a></li>
                                        </ul>
                                    </details>
                                    <details>
                                        <summary>Children's Dentistry</summary>
                                        <ul className="menu" id="menu-footer-menu">
                                            <li className=""><a href="/your-first">Your First Visit</a></li>
                                            <li className=""><a href="/fillings">Filling</a></li>
                                            <li className=""><a href="/root-canal">Root Canal Treatment in children</a></li>
                                            <li className=""><a href="/children-crown">Children's Crowns</a></li>
                                            <li className=""><a href="/tooth-removal">Tooth Removal</a></li>
                                            <li><a href="/space-maintainer">Space Maintainer</a></li>
                                            <li><a href="/digital-xray">Digital X-ray</a></li>
                                            <li><a href="/emergency-treatment">Emergency Dental Treatment</a></li>
                                        </ul>
                                    </details>
                                    <details>
                                        <summary>Preventive Dentistry</summary>
                                        <ul className="menu" id="menu-footer-menu">
                                            <li className=""><a href="/dental-hygiene">Dental Hygiene For Children</a></li>
                                            <li className=""><a href="/dental-hypomineralization">Dental Hypomineralization</a></li>
                                            <li className=""><a href="/dental-sealant">Dental Sealants</a></li>
                                            <li className=""><a href="/fluoride-varnish">Fluoride Varnish</a></li>
                                        </ul>
                                    </details>
                                    <details>
                                        <summary>Sedation Services</summary>
                                        <ul className="menu" id="menu-footer-menu">
                                            <li className=""><a href="/iv-sedation">Treatment under IV Sedation</a></li>
                                            <li className=""><a href="/gerenal-anesthesia">Treatment Under General Anesthesia</a></li>
                                        </ul>
                                    </details>
                                    <details>
                                        <summary>Orthodontics</summary>
                                        <ul className="menu" id="menu-footer-menu">
                                            <li className=""><a href="/braces-consult">Braces Consult</a></li>
                                            <li className=""><a href="/orthodontic_corrections">Orthodontic Corrections</a></li>
                                            <li className=""><a href="/braces">Braces</a></li>
                                            <li className=""><a href="/invisalign">Invisalign</a></li>
                                            <li className=""><a href="/clear-aligner-braces">Clear Aligners or Braces?</a></li>
                                            <li><a href="/early-orthodontics">Early Orthodontics</a></li>
                                            <li><a href="oral-habits">Management of Oral Habits</a></li>
                                            <li><a href="orthodontics-teen">Orthodontics for Teens</a></li>
                                            <li><a href="myfunctional-treatment">Myfunctional Treatment</a></li>
                                            <li><a href="/retainers">Retainers</a></li>
                                        </ul>
                                    </details>
                                    <details>
                                        <summary>Contact</summary>
                                        <ul className="menu" id="menu-footer-menu">
                                            <li className=""><a href="/contact-us">Contact Us</a></li>
                                            <li className=""><a href="/covid-update">Covid 19 Updates</a></li>
                                            <li className=""><a href="/sign-up">Newsletter Sign-Up</a></li>
                                            <li className=""><a href='/faq'>FAQs</a></li>
                                        </ul>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__center">
                       © 2021 Copyright | pediatrician Dentist in Ahmedabad<strong> Kidsville Dental</strong> | All Rights Reserved by<span style={{color:"red"}}> &hearts;</span><a href="https://scriptics.ai"><strong> Scriptics.</strong></a>
                    </div>
                </div>
            </section>					
        </footer>
            </div>
        )
    }
}

export default Footer
