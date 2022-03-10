import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ['<div class="blog-nav-group">Previous Post<i class="fa fa-arrow-left" id="pre-post" aria-hidden="true"></i></div>', '<div class="blog-nav-group">Next Post<i class="fa fa-arrow-right" id="next-post" aria-hidden="true"></i></div>'],
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
            items: 2,

        }
    },
};

export class BlogPage extends Component {
        state ={ blog: {}, blog_title: {}, isLoaded: false }

        componentDidMount(){
            const blog = axios.get( `https://1scriptics.com//wp-json/wp/v2/blogs/${this.props.match.params.id}`);
            const blog_title = axios.get('https://1scriptics.com//wp-json/wp/v2/blogs');
            Promise.all([blog, blog_title]).then(res =>{
                this.setState({ blog: res[0].data, blog_title: res[1].data, isLoaded: true });
            });
        }
    render() {
        const {blog,blog_title, isLoaded} =this.state;
        if(isLoaded){
            return (
                <div>
                    <section className="post-cover" style={{background:`url(${blog.acf.feature_image}) no-repeat`}}>
                    </section>
                    <section className="blog-post-section blog">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center">
                                    <div className="post-worl-col">
                                        <div className="blog-content">
                                            <h2 className="blog_title">{`${blog.title.rendered}`}</h2>
                                            <div className="txt-blog" dangerouslySetInnerHTML={{ __html: blog.content.rendered}}></div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>    
                    </section>
                    <section className="WK-section">
                        <div className="container">
                            <div className="row WK-contact">
                                <h3 className="WK-txt">Want to know more about how we create healthy, happy and cavity-free smiles? Pop into the practice for a tour, or call us on  +9163&nbsp;5883&nbsp;4088 to arrange a consultation!</h3>
                                <a className="cont-today" href="tel:+91 6358834088">Contact Us Today</a>
                            </div>
                        </div>
                    </section>
                    <section className="blog-slider">
                        <OwlCarousel className="owl-theme" {...options}>
                            {blog_title.map(( name,i)=>(
                                <div className="item" key={i}>
                                    <div className="container">
                                        <div className="row slider-featured_image" style={{background:`url(${name.acf.feature_image}) no-repeat`}}>
                                            <Link to={`/blogs/${name.id}`} target="_blank"><h2 className="blog-title-txt nav-blog-title">{name.title.rendered}</h2></Link>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </OwlCarousel>
                    </section>
                </div>
            )
        } 
        return null;   
    }
}

export default BlogPage
