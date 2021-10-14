import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Newsletter Signup</h2> 
                        </div>
                    </div>
                </div>
                <section className="join-list">
                </section>
                <section className="newsletter-signup">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-6 col-sm-12">
                                <form id="contact-form" action="/action_page.php">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name" />
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name" />
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject.." />
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Please give your message..." />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>          
                </section>
            </div>
        )
    }
}
