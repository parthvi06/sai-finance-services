import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Blogs extends Component {
    state = { blogs: [], isLoaded: false }
    componentDidMount() {
        axios.get('https://1scriptics.com//wp-json/wp/v2/blogs/?_embed&order=asc')
            .then(res => this.setState({ blogs: res.data, isLoaded: true }))
            .catch(err => console.log(err));     
    }

    render() {
        const { blogs, isLoaded } = this.state;
            if(isLoaded){}
        return (
            <div>
                <section>
                    <div className="blogs">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 blogs_col text-center">  
                                    <h2 className="blogs_heading">Blog Posts</h2>
                                    <p className="blogs_para">We are committed to providing each patient with the same level of care and compassion that we would want for our own children. We offer a fun atmosphere where children will establish many positive memories.</p>
                                </div> 
                            </div>  
                            <div className="row">
                                {blogs.map( (blog ,i) => {
                                    return <div className="col-12 col-lg-6 col-md-6 col-sm-12 blog-posts" key={i}>
                                        <div className="card">
                                            <div className="col-lg-12 col-md-12 col-xs-12 px-0">
                                                <img src={ blog._embedded['wp:featuredmedia']['0'].source_url } alt="blog featuredmedia" />
                                                <div className="blog-column">
                                                    <h3>{blog.title.rendered}</h3>
                                                    <div dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}></div>
                                                    <Link className="read-more-btn" to={`/blogs/${blog.id}`}>Read More ....</Link>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>       
                                })}
                            </div>    
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Blogs
