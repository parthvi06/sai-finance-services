import React, { Component } from 'react';

export default class EmergencyDentist extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h1 className="main-title__primary">Children's Emergency Dentist</h1>
                        </div>
                    </div>
                    <section>    
                        <div className="container">
                            <div className="row">
                                <h4>Dental Emergency Hotline: <a href="tel:+91 6358834088">+91 6358834088</a></h4>
                            </div>
                        </div>
                    </section>
                    <section>    
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                    <h4>Children's Emergency Dentist</h4>
                                    <p>For any dental emergency keep calm, and immediately contact us for assistance.</p>
                                </div>    
                            </div>
                        </div>
                    </section>
                    <section>    
                        <div className="container">
                            <div className="row">
                                <h2>Call us right in, if you are dealing with any of these!</h2>
                            </div>
                            <div class="row">    
                                <div className="col-12 col-lg-4 col-md-2 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <div className="text">
                                        <p className="para">If your child complains of pain, intense enough which doesn't allow him to sleep through the night.</p>
                                        <h4>Pain in cogs</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-2 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <div className="text">
                                        <p className="para">f your child has hit himself on the face while in some activity with and impact on the face.</p>
                                        <h4>Broken/knocked out cogs</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-2 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <div className="text">
                                        <p className="para">If there is development of swelling in the upper or lower jaw of your child.</p>
                                        <h4>Swelling</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-2 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <div className="text">
                                        <p className="para">If there is pus oozing from the gums or any of the teeth.</p>
                                        <h4>Pus discharge</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-2 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <div className="text">
                                        <p className="para">If there is bleeding from the gums or any oral tissue</p>
                                        <h4>Bleeding</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-2 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <div className="text">
                                        <p className="para">Your child has developed fever due to dental infection.</p>
                                        <h4>Fever</h4>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </section>
                    <section>    
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                    <h4>Emergency Services Include</h4>
                                    <p>At Kidsville, every dental emergency is handled in an organised and scientific manner will long term follow ups.</p>
                                </div>
                                <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <h4>Alleviate pain</h4>
                                    <p>Your dentist will provide emergency symptomatic treatment based on the diagnosis</p>
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <h4>Trauma managemnt</h4>
                                    <p>Your dentist will take a detailed history and diagnosis of the trauma its impact on oro-dental structures. Address the impact and put you on follow up</p>
                                    <div className="icon">
                                        <span className="fa fa-cogs"></span>
                                    </div>
                                    <h4>Prescriptions</h4>
                                    <p>Your child may be prescribed pain-killers and antibiotics to control the spread of infection.</p>
                                </div>     
                            </div>
                        </div>
                    </section>
                    <section className="bring_child_title">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                    <h2>Any severe unbearable pain in tooth</h2>
                                    <p>Tooth decay is the most common cause of dental pain in children.</p>
                                    <img src="/assets/img/ChewingPain1.jpg" />
                                </div>
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                    <h2>Swelling in teeth or face</h2>
                                    <p>Long-standing chronic infections can be a trigger to the development of swelling.</p>
                                    <img src="/assets/img/KC26-dental-abscess.jpg" />
                                </div>
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
                                    <h2>Broken tooth/ Knocked out tooth</h2>
                                    <p>Kids with their active lifestyle are prone to injury and blows causing trauma to teeth.</p>
                                    <img src="/assets/img/broken-tooth.jpg" alt="" />
                                </div>       
                            </div>
                        </div>
                    </section>   
                </div>       
            </div>
        )
    }
}
