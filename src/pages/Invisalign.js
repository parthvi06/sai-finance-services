import React, { Component } from 'react';

export default class Invisalign extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Invisalign </h2>
                        </div>
                    </div>    
                </div>
                <section className="invisalign_treatment">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12 invisalign_img">
                                <img src="/assets/img/invisalign.png" alt="invisalign"/>
                            </div>
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <h2 className="invisalign_treatment_title">Invisalign</h2>
                                <p>Invisalign treatment differs from traditional non-removable metal brackets because Invisalign comprises a set of a few transparent, custom-moulded clear aligners, which can be removed for up to 2 hours each day. This allows for more freedom in any busy teenager’s lifestyle. Invisalign Teen also has a few special features, designed specifically for teenagers:</p>
                                <ul>
                                    <li>Invisalign Teen comes with blue wear-indicators. These fade from blue to clear on each clear aligner to help you, your orthodontist and your teenager themselves to gauge wear over time.</li>
                                    <li>Six free replacement aligners are included (in case any get lost or misplaced, e.g. when playing sports).</li>
                                    <li>Invisalign Teen aligners have special features designed to guide the growth of new teeth (canines, second premolars and second molars), helping them to get to a planned, straighter position.</li>
                                </ul>
                                <a className="more" href="">BOOK AN APPOINTMENT</a>
                            </div>    
                        </div>
                    </div>
                </section>
                <section className="invisalign_tooth_remove">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <h2>INVISALIGN TREATMENT PROCESS</h2>
                                <p><strong>Invisalign is clinically and scientifically proven to correct irregular teeth. At Kidsville Dental it is used to treat mild to complex cases.</strong></p>
                            </div>
                        </div>
                        <div className="row pharma_blocks">    
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <div className="text-center">
                                    <img src="/assets/img/kidsvilleicon.png" alt="invisalign-treatment"/>
                                </div>
                                <h3 className="text-center">Consultation</h3>
                                <p>Once your Invisalign Provider has confirmed you’re eligible for treatment, they will take photos, X-rays and digital scans, or a dental impression, of your teeth. These records will be used to create a ClinCheck® 3D treatment plan, just for you.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <div className="text-center">
                                    <img src="/assets/img/kidsvilleicon.png" alt="invisalign-treatment"/>
                                </div>
                                <h3 className="text-center">The Aligners</h3>
                                <p>After being custom-made and shipped to your Provider’s office, you’ll receive a series of aligners to wear every day and change at home – on average every 1-2 weeks.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <div className="text-center">
                                    <img src="/assets/img/kidsvilleicon.png" alt="invisalign-treatment"/>
                                </div>
                                <h3 className="text-center">The results</h3>
                                <p>You’ll visit your Provider around every 6-8 weeks to monitor progress and receive new aligners. After finishing your treatment plan, retainers will be required to maintain your new smile.</p>
                            </div>
                        </div>
                    </div>
                </section>           
                <section className="remember">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
                                <h2 className="text-center">BENEFITS OF INVISALIGN</h2>
                                <p className="text-center"><strong>Invisalign is designed to fit your lifestyle completely. you can be social, take selfies, post pictures, or participate in any activity without being conscious of your smile.</strong></p>
                                <ol>
                                    <li>Discreet and clear, Invisalign® makes aligners almost impossible to notice</li>
                                    <li>Custom designed for each person, creating a more comfortable experience when worn than traditional braces</li>
                                    <li>Freedom to play contact sports or play musical instruments, because aligners can be removed during the activity</li>
                                    <li>Teens can eat with freedom, as aligners can be easily removed during mealtimes</li>
                                </ol>
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
