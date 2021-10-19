import React, { Component } from 'react'
import axios from 'axios';
export class Footer extends Component {
    state = { blogs: [], isLoaded: false }
    componentDidMount() {
        axios.get('https://blog.kidsvilledental.in//wp-json/wp/v2/blogs/?_embed&per_page=4&order=desc')
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
                                    <h3><a href="tel: 07926922152 "><i  className="fa fa-phone"></i>&nbsp;07926922152</a></h3>
                                    <h4>Emergency<br /><a href="tel:+91 6358834088"><i  className="fa fa-phone"></i>&nbsp;+91 6358834088</a></h4>
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
                                    <p><strong>We will be open the following hours</strong><br/></p>
                                    <p><strong>Morning:</strong><br/>Mon-Sat : 10:30am – 2pm<br/></p>
                                    <p><strong>Evening:</strong><br/>Mon-Sat : 4:30pm – 8:30pm<br/>Sunday : Closed</p>
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
                                            <div>{blog.date}</div>
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
                                    <ul id="menu-footer-menu"  className="menu">
                                        <li className="inform-menu"><a href="/">Home</a></li>
                                        <li className="inform-menu"><a href="/children-dentistry">Children's Dentistry</a></li>
                                        <li className="inform-menu"><a href="/preventive-dentistry">Preventive Dentistry</a></li>
                                        <li className="inform-menu"><a href="/sedation-services">Sedation Services</a></li>
                                        <li className="inform-menu"><a href="/orthodontics">Orthodontics</a></li>
                                        <li className="inform-menu"><a href="/contact-us">Contact Us</a></li>
                                        <li className="inform-menu"><a href="/kidsville-max">Kidsville Max</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div  className=" foot-cta col-xs-12  col-md-3">
                            <div  className="widget push-down-30">
                                <div  className="textwidget">
                                    <a href="/book-now/" className="action">Book&nbsp;Online</a>
                                    <a href="/contact/" className="more"><i  className="fa fa-paper-plane"></i>&nbsp;Contact</a>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__center">
                       © 2021 Copyright | pediatrician Dentist in Ahmedabad<strong> Kidsville Dental</strong> | All Rights Reserved by<a href="https://scriptics.ai">Scriptics.</a>
                    </div>
                </div>
            </section>					
        </footer>
            </div>
        )
    }
}

export default Footer
