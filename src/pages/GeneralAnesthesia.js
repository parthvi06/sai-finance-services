import React, { Component } from 'react';

export default class GeneralAnesthesia extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">General Anesthesia</h2> 
                        </div>
                    </div>
                </div>
                <section className="Wfluoride-varnish">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12 general-anthe">
                                <img src="/assets/img/general.jpg" alt=""/>
                            </div>
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <h2>WHAT IS GENERAL ANAESTHESIA?</h2>
                                <p>Your pediatric dentist who carried out the initial assessment of your child will be carrying out all treatment under general anesthesia in the hospital. All children having surgery with us will be cared for by a specialist pediatric anesthetist who is specially trained to give general anesthetic to children. All our anesthetists have a minimum of 12 years’ experience and perform these procedures on a regular basis.</p>
                                <a className="more" href="tel:+91 6358834088">Have questions? Feel free to contact us</a>
                            </div>    
                        </div>
                    </div>
                </section>
                <section className="remember">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
                                <p>Order to carry out GA safely and effectively, we have partnered with a Harley Street Clinic where the procedure will take place.</p>
                                <p>The Harley Street Clinic is known as one of the best private hospitals in Europe. Here, world-class complex medical care and surgery is supported by our paediatric intensive care unit, where clinical specialists have access to the most highly advanced medical technology. They share Happy Kids Dental’s holistic ethos for family-centred care, delivered in a state-of- the-art facility by leading consultants and specialists and supported by an expert team of healthcare professionals.</p>
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
                                <a className="book_app more inner-btn" href="https://www.1scriptics.com/appointment/">Book online</a>&nbsp;<a className="num_app more inner-btn" href="tel:+91 6358834088"><i  className="fa fa-phone"></i>&nbsp;+91 6358834088</a>
                            </div>
                        </div>
                    </div>   
                </section>
            </div>
        )
    }
}
