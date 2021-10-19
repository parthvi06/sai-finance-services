import React, { Component } from 'react'

export default class Braces extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Braces</h2>
                        </div>
                    </div>    
                </div>
                <section className="Emergency_Dentist">
                    <div className="container">
                        <div className="row child_Xray">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <p><strong>Confused about which braces are best for you?</strong></p>
                                <h2>TYPES OF BRACES</h2>
                                <p>We specialize and provide many different types of braces and treatment modalities to our patients, making it easy for every individual to have the best treatment option that fits their unique goals and needs.</p>
                            </div>
                        </div>
                    </div>   
                </section>
                <section className="braces_types">
                    <div className="container">
                        <div className="row braces_types_block">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <div className="card">
                                    <img src="/assets/img/metal-braces.jpg" alt="" />
                                    <h3>Traditional Metal Braces</h3>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div> 
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <div className="card">
                                    <img src="/assets/img/Ceramic-Braces.jpg" alt="" />
                                    <h3>Ceramic Braces</h3>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div> 
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <div className="card">
                                    <img src="/assets/img/Lingual.jpg" alt="" />
                                    <h3>Lingual braces</h3>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </section>
                <section className="emergency-accordion">
                    <div class="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                <h2>FREQUENTLY ASKED QUESTIONS.</h2>
                            </div>
                        </div>
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What type of braces work the fastest?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="panel-body">
                                    While the speed of the process is highly determined by the type of issue you are dealing with, most experts seem to agree that the <strong>clear aligners</strong> are the quickest way to straighten your teeth.
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is the cheapest type of braces?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                    Metal braces tend to be the cheapest form of braces in orthodontics. Invisalign tend to be a bit more expensive than metal braces.
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How fast do braces move?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div class="panel-body">
                                    You should expect to notice minor shifts in your teeth <strong>approximately 4 weeks from after bonding.</strong> Greater shifts that are more visible require more time as they become noticeable after approximately 2-3 months.
                                    </div>
                                </div>    
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingfour">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            Can teens get ceramic Braces?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapsefour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                                    <div class="panel-body">
                                    Ceramic braces are <strong>more expensive than</strong> metal braces and can stain if not taken care of properly, but they could be a great choice for teens who don’t want shiny metal flickering from the front of their teeth.
                                    </div>
                                </div>    
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
