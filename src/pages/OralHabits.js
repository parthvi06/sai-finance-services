import React, { Component } from 'react'

export default class OralHabits extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Mangement of Oral Habits</h2>
                        </div>
                    </div>    
                </div>
                <section className="cap_children_teeth">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>TYPES OF ORAL HABITS</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how_Rcanal">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <img src="/assets/img/" alt="" />
                                <h3>Thumb Sucking</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</p>
                                <a className="more">Read More</a>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <img src="/assets/img/" alt="" />
                                <h3>Mouth Breathing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</p>
                                <a className="more">Read More</a>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <img src="/assets/img/" alt="" />
                                <h3>Tongue thrusting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</p>
                                <a className="more">Read More</a>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="how_sealant">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>IMAPCT OF IMPROPER ORAL HABITS ON DENTITION AND BITE OF CHILDREN. WHAT TO DO ABOUT IT?</h2><hr />
                                <p>Depending upon the duration, severity and intensity of the oral habits, the bite, and oral structures get molded. Most of these habits exert damaging effects on the positions of teeth and subsequent malocclusion. These habits happen to be one the prime reasons your child’s teeth become crooked. Addressing and correcting these patterns eatly on can save your child from having crocked teeth and braces altogether. </p>
                            </div>
                        </div>
                    </div>    
                </section>
                <section className="next-appoint">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingBottom:20}}>
                                <h2 style={{fontSize:40}}>Ready to book your next appointment?</h2>
                            </div>
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingBottom:40}}>
                                <a className="book_app more inner-btn">Book online</a>&nbsp;<a className="num_app more inner-btn" href="tel:+91 6358834088"><i  className="fa fa-phone"></i>&nbsp;+91 6358834088</a>
                            </div>
                        </div>
                    </div>   
                </section>  
            </div>
        )
    }
}
