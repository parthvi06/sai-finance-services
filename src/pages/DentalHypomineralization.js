import React, { Component } from 'react';

export default class DentalHypomineralization extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Dental Hypomineralization for Children</h2>
                        </div>
                    </div>
                </div>
                <section className="hypomineralise">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:20}}>
                                <h2>HYPOMINERALIZATION OF TOOTH</h2>
                                <p>Hypomineralisation is a condition that affects the outer layer (enamel) of your child’s teeth. It occurs due to a disturbance during tooth development, either during pregnancy or in the first two years of life. Disturbances can occur as a result of coughs, colds, or antibiotics during pregnancy, severe illness during the first two years of life, dioxins in breastmilk or for no known reason. It has been suggested that there may also be a small genetic element.</p>
                                <p>Hypomineralisation causes the tooth enamel to be softer and therefore more prone to breakdown and decay. Because of the nature of these teeth, they are sometimes harder to numb up for treatment and fillings are not as durable as they are in healthy teeth. Hypomineralised teeth have chalky white or yellow patches and increased sensitivity. Although primary and permanent can be affected by hypominerazation, the most common teeth are molar-incisors.</p>
                            </div>
                        </div>
                    </div>   
                </section>
                <section>
                    <div className="detect_trt">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">  
                                    <h2 className="detect_trt_heading">Detection and treatment of hypomineralised tooth</h2>
                                </div> 
                            </div>  
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 detect_trt_post" >
                                    <img src="/assets/img/Toothpaste.jpg" alt="detect_trt_post" width="100%" />
                                    <h3>Toothpaste with higher fluoride concentration</h3>
                                    <p>If your child has very sensitive teeth, your dentist may recommend a toothpaste with a higher fluoride concentration, regular fluoride varnish application, or a tooth mousse to help with the sensitivity.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 detect_trt_post">
                                    <img src="/assets/img/metalcr.jpg" alt="detect_trt_post" width="100%" />
                                    <h3>Preformed metal crowns</h3>
                                    <p>For primary teeth, your dentist may recommend preformed metal crowns to seal the healthy tooth structure and keep the teeth in the mouth until their natural exfoliation.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 detect_trt_post">
                                    <img src="/assets/img/Dental-Sealant.jpg" alt="detect_trt_post" width="100%" />
                                    <h3>Sealants or tooth coloured fillings</h3>
                                    <p> For adult molars, treatment depends on severity and can range from fissure sealants and regular fluoride application to white fillings or interceptive extraction of the affected teeth.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 detect_trt_post">
                                    <img src="/assets/img/oral-bug.jpg" alt="detect_trt_post" width="100%" />
                                    <h3>Microabrasion, bleaching, resin- infiltration</h3>
                                    <p>Adult incisors do not tend to break down and the issue can be purely cosmetic. There are several options available for treatment including microabrasion, bleaching, resin infiltration or restorations. Your dentist will explain all options available and recommend the best option for your child.</p>
                                </div>
                            </div> 
                        </div>    
                    </div>
                </section>
                <section className="remember">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
                                <h2 className="text-center">Important to Remember</h2>
                                <p>If your child has hypomineralisation, regular dental check-ups and hygiene appointments as well as fluoride applications are essential, as problems can occur and progress very quickly.</p>
                                <p>We advise that your child brushes their teeth twice a day with a fluoride toothpaste.</p>
                                <p>We also recommend to limit all sugary foods and drinks to mealtimes only and not every day, to help prevent cavities.</p>
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
