import React, { Component } from 'react';

export default class IVsedation extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">IV Sedation</h2> 
                        </div>
                    </div>
                </div>
                <section className="Wfluoride-varnish">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <img src="/assets/img/sedation.jpg" alt=""/>
                            </div>
                            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                                <h2 className="Wfluoride-varnish_title">DENTAL TREATMENT UNDER SEDATION OR GENERAL ANESTHESIA</h2>
                                <p>Scientifically known as pharmacologic behavior management techniques, these are procedures that are used to aid dental treatment in patients who are unable to cooperate in routine chairside techniques. The patient is sedated using age-appropriate drugs by an experienced pediatric anesthesiologist according to the needs of the case, under a controlled environment.</p>
                            </div>    
                        </div>
                    </div>
                </section>
                <section className="pharma">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <h2>OUR SERVICES</h2>
                                <p>For the little segment of children who are unable to cope up with regular chairside treatment are ideal candidates fr treatment under sedation or general anesthesia.</p>
                                <p><strong>Who needs Pharmacologic management techniques?</strong></p>
                            </div>
                        </div>
                        <div className="row pharma_blocks">    
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <a className="pharma-icon"><i className="fa fa-cogs"></i></a>
                                <h3>Children with special healthcare needs</h3>
                                <p>Some children and individuals with special care needs who have extensive oral healthcare needs</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <a className="pharma-icon"><i className="fa fa-cogs"></i></a>
                                <h3>Acute situational anxiety</h3>
                                <p>Children who are extremely very anxious of treatment, with their fear impacting their ease, psychological and general well-being.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <a className="pharma-icon"><i className="fa fa-cogs"></i></a>
                                <h3>Uncooperative age-appropriate behavior</h3>
                                <p>Very young children who do dont comprehend and communicate due to their age</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <a className="pharma-icon"><i className="fa fa-cogs"></i></a>
                                <h3>Immature cognitive functioning</h3>
                                <p>Children who are immature and unable to cope up with the treatment.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <a className="pharma-icon"><i className="fa fa-cogs"></i></a>
                                <h3>Disabilities, or medical conditions</h3>
                                <p>Any medical condition which warrant supportive medical care and monitoring.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="emergency-accordion">
                    <div class="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                <h2>What benefit does treatment under sedation/ general anesthesia provide?</h2>
                            </div>
                        </div>
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Improved access to care
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="panel-body">
                                    All the dental procedures can be scheduled and completed simultaneously on the same day. All the minor major procedures can be accomplished without any physical hindrance.
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Improved ease and efficiancy of scheduling
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                    The appointment can be scheduled at the convenience of the patient and healthcare providers. 
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Decreased patient movement which may optimise quality of care
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div class="panel-body">
                                    While routine chairside treatment, children’s disruptive behavior can cause difficulty in using instruments and equipments. While under pharmacologic techniques, such movements are prevented altogether, which allows better control of treatment quality.
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>        
                </section>  
            </div>
        )
    }
}
