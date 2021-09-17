import React, { Component } from 'react';

export class ContactUs extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="main-title">
                    <div className="container">
                        <h1 className="main-title__primary">Contact Us</h1>
                    </div>
                </div>
                <div className="container contact_section">
                   <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 contact-left">
                            <h2 className="contact-left_heading">We Would Love to Hear from You</h2>
                            <p>Please write or call us with your questions or comments.</p>
                            <h4>Address:</h4>
                            <p>Kidsville Dental,  New Adhyashakti Society,  Beside Maharaja Complex, Near Balaji Restaurant,  Prernatirth Derasar Road,  Prahladnagar,<br/>Satellite, Ahmedabad -380015</p>
                            <h4>Contact:</h4>
                            <p><i className="fa fa-phone"></i><span>&emsp;+91 6358834088</span></p>
                            <p><i className="fa fa-envelope"></i><span>&emsp;kidsvilledental@gmail.com</span></p>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <form action="/action_page.php">
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
            </div>
        )
    }
}

export default ContactUs