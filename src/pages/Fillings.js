import React, { Component } from 'react';

export default class fillings extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Fillings</h2>
                        </div>
                    </div>
                </div>
                <section className="fiss_sealant">
                    <div className="container">
                        <div className="row pit_sealant">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>Tooth coloured fillings in children</h2>
                                <p>Decay in teeth creates cavitations in them. these cavities and the decay are managed by removing the decay mechanically and filling the cavities using biocompatible, durable, and esthetic filling material. These fillings prevent further tooth decay and retain the teeth healthy and strong.</p>
                            </div>
                        </div>
                        <div className="row  P_F_sealants">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 sealant">
                                <img src="/assets/img/G_I_fillings.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 sealant">
                                <h3>Glass Ionomer Fillings</h3>
                                <p>These fillings bond chemically to the dentin. These are fluoride-releasing cement that gives the tooth long-term benefits of fluoride. Since they are easily placed, they are more commonly used in very young children who are difficult to manage in the dental chair</p>
                                <a className="more">Got a cavity? Book and appointment</a>
                            </div>
                        </div>
                        <div className="row P_F_sealants reverse_col">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <h3>Composite Fillings</h3>
                                <p>Sealants are only applied to the back teeth – the molars and premolars. These are the teeth that have ‘pits’ (small hollows) and ‘fissures’ (grooves) on their biting surfaces. Some teeth naturally have deep grooves which will need to be sealed; others have shallow ones which will not need sealing.</p>
                                <a className="more">BOOK MORE</a>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <img src="/assets/img/Composite_fillings.jpg" alt="" />
                            </div>
                        </div>
                    </div>   
                </section>
                <section className="fill_teeth">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <h2>When to fill children's teeth?</h2>
                                <p>A filling can be done at any age. Regular dental check-up helps to keep a check on the status of your child’s teeth. Initial stages of tooth decay may require minimal preparation and minimal intervention. the best time to fill is the moment a cavity is detected. Delaying can cause the decay to progress inwards into the teeth and and hence more extensive treatment procedures.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cavity_untreat">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <h2>What happens when cavitations are left untreated?</h2>
                                <p>Leaving cavitations untreated allows the decay to reach the dental nerve areas. This causes pain and damage to the roots of the tooth. leaving it still untreated will cause slow decay of the entire nerve area and formation of pus and subsequent swelling. Dental decay is a unidirectional process. once decay starts it cannot revert back until the infection is mechanically removed.</p>
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
