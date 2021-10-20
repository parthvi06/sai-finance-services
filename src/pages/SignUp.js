import React, { Component } from 'react'
import emailjs from 'emailjs-com';
export default class SignUp extends Component {
    render() {
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_2tkmjdw', 'template_g65vp8i', e.target, 'user_tzNJc0uTowFy9Odjifo2c')
              .then((result) => {
                  console.log(result.text + 'mail send');
                  alert("Your subscription has been sent");
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }
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
                    <div className="container">
                        <div className="card"> 
                            <div className="row">   
                                <div className="col-12 col-lg-3 col-md-2 col-sm-12">
                                    <img src="/assets/img/Kidsville Castle.png" alt="join-list" />
                                </div>
                                <div className="col-12 col-lg-9 col-md-10 col-sm-12">
                                    <h2>Join the List!</h2>
                                    <p>We are curating a list of communities wherein we would provide information and help you take better care of your child’s oral health. Give us your mail ID and stay tuned for more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="newsletter-signup">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <form id="contact-form" action="/action_page.php" onSubmit={sendEmail}>
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name" required/>
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name" required />
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
                <section className="sign_contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <a className="more" href="">Do you have a questions about Kidsville Dental? Contact us today</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
