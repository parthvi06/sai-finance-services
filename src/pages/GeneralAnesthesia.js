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
                                <h2 className="Wfluoride-varnish_title">WHAT IS GENERAL ANAESTHESIA?</h2>
                                <p>GA is a controlled state of unconsciousness, which ensures that your child is fully asleep and free from any sensation during their procedure. GAs are only given by anesthetists and are performed in a hospital setting. Anesthetists are specialist doctors who look after children before, during, and after a test or operation and it is their role to ensure children are ‘asleep’ and safe throughout the test or operation and wake up comfortably at the end.</p>
                                <h3>Why is my child recommended to have treatment under GA?</h3>
                                <ol>
                                    <li>One of the reasons that your child was recommended GA is because it allows the dentist to carry out lengthy and complex treatments such as teeth requiring surgical removal or exposure.</li>
                                    <li>There could be a number of procedures that need to be performed in a single session and your child’s age or medical status may not allow this to be carried out under other sedation methods.</li>
                                    <li>It might also be advised due to the co-operative ability of your child, the degree of surgical trauma anticipated, the complexity of the operative procedure, or their special-needs status.</li>
                                </ol>
                                <p>No matter the reason – we are here to help.</p>
                                <a className="more" href="">Have questions? Feel free to contact us</a>
                            </div>    
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
