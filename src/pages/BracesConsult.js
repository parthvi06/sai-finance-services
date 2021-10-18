import React, { Component } from 'react'

export default class BracesConsult extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Dental Hygiene for Children</h2>
                        </div>
                    </div>    
                </div>
                <section className="braces-hygiene">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/assets/img/LearningToBrushTeeth.jpg" alt=""/>
                            </div>
                            <div className="col-12 col-lg-8 col-md-12 col-sm-12">
                                <h2 className="hygiene_title">From when should i begin to care about my child's oral hygiene?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus.</p>
                                <a className="more">Book an Appointment</a>
                            </div>    
                        </div>
                    </div>
                </section>
                <section>
                <div className="container">
                    <div className="ortho-treatment">
                        <h2>What is orthodontic treatment?</h2>
                        <p>Orthodontic treatment commonly uses fixed or removable braces to treat misalignment of the teeth or jaws, or sometimes both. Common problems that are corrected by an orthodontist include:</p>
                        <ul>
                            <li>Crooked teeth</li>
                            <li>Protruding front teeth</li>
                            <li>Crossbites</li>
                            <li>Cessation of habits, like thumb sucking and correcting the bite once this has stopped.</li>
                        </ul>
                        <p>Another key aspect of orthodontic treatment is managing the development of the teeth. This means making sure all the teeth are present, in the right location at the right time, and developing normally. If not, then an orthodontist will often make recommendations or plan treatment to ensure development is normal.</p>
                    </div>
                </div>
                </section>
                <section className="before-ortho">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>Things to consider before orthodontic treatment</h2>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card">
                                    <p>some orthodontic issues are better treated early, and others later. For instance, thumb-sucking habits and crossbites are better managed as early as 8 to avoid less desirable permanent effects on the teeth and bite.</p>
                                    <div className="ortho-text row">
                                        <img src="/assets/img/mother.jpg" />
                                        <p>The nature of the problem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card">
                                    <p>for example, if a problem like protruding teeth is having a negative impact on a child’s self-esteem (e.g. not smiling, bullying at school, feeling self-conscious) - then this can be treated as early as 8 years old.</p>
                                    <div className="ortho-text row">
                                        <img src="/assets/img/father.jpg" />
                                        <p>Your child’s overall wellbeing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card">
                                    <p>before starting any orthodontic treatment, it is essential the teeth and gums are healthy. If the orthodontist identifies an issue at your child’s examination, they refer to the dentist/ therapist to stabilise his/her oral health before starting any orthodontic treatment.</p>
                                    <div className="ortho-text row">
                                        <img src="/assets/img/mother.jpg" />
                                        <p>Your child’s dental health</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="card">
                                        <p>do you think your child will be able to complete the whole orthodontic timescale without undue stress to them, or damage to the equipment? Some children will find it harder than others to adapt to orthodontic treatment.</p>
                                        <div className="ortho-text row">
                                            <img src="/assets/img/mother.jpg" />
                                            <p>The cooperation of your child</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                    </div>
                </section>
                <section className="emergency-accordion">
                    <div class="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                    <h2>Tips for dealing with common dental emergencies</h2>
                                </div>
                        </div>
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Knocked-out baby tooth 
                                        </a>
                                        </h4>
                                    </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                         Don’t attempt to put it back in the socket, as this could risk damaging the permanent tooth underneath. Instead, try and stop the bleeding by applying gentle pressure with gauze or a muslin for around 10 minutes. Give your child paracetamol or ibuprofen for the pain, but never place aspirin or any other painkiller directly on the gums, as this can cause them to burn.
                                </div>
                                </div>
                                </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                         Knocked-out permanent tooth 
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                        Hold the tooth by the crown, not the root end, and rinse it clean - don’t scrub. Do not remove any attached fragments of tissue. If you can, try and put the tooth back in its place, ensuring it is facing the right way, and bite down on a clean towel to keep the tooth secure. At least 85 percent of teeth that are put back in the tooth socket within five minutes survive, compared to very few teeth that are stored dry and reimplanted after an hour or longer. If you can’t put the tooth back, put it in a cup of milk. If you don’t have milk, salty water is also effective. You’ll be seen as soon as possible by the Happy Kids Dental team.
                                </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Chipped or broken baby tooth 
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                        Take your child to the dentist as soon as possible, where the right course of action can be decided; this could include smoothing the tooth down, rebuilding it with a resin material, or removing it.
                                </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading4">
                                    <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Chipped or broken permanent tooth 
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                <div class="panel-body">
                                        Usually these can be repaired successfully, either through reattaching the broken fragments or using a tooth-coloured resin material. Store any fragments in tap water and visit Happy Kids Dental as soon as possible.                                    </div>
                                </div>
                                </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading5">
                                    <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Objects caught between teeth 
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                <div class="panel-body">
                                        If you can’t remove the object using dental floss, contact Happy Kids Dental immediately. Do not attempt to remove the object with anything sharp, like a pin, as you’ll risk hurting your child’s gums or damaging their tooth enamel.                                    
                                </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading6">
                                    <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        Broken braces  
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapse6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                <div class="panel-body">
                                        If a brace wire has come loose, try using the rubber end of a pencil to push it into a more comfortable position. If this isn’t possible, try covering the wire with dental wax, a small cotton ball or a piece of gauze until you can get to Happy Kids Dental. Never cut the wire, as you could end up swallowing or inhaling it.                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                <section className="braces-exceptation">
                    <div className="container">
                        <div className="row">
                            <div className="bx-title col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>WHAT TO EXPECT AT A BRACES CONSULTATION AT KIDSVILLE?</h2>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>New patient registration Form</h3>
                                <p>In order to provide you with the best service, we need these basic information about you and enroll you on board.</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Medical and Dental History</h3>
                                <p>A patient's medical history is a vital part of his or her dental history and increases the dentist's awareness of diseases and medication which might interfere with the patient's dental treatment. A medical history helps to identify conditions relevant to your dental health or which could have an impact on how treatment is carried out.</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Check up and clinical Examination</h3>
                                <p>This preliminary check up based on your dental concern is done by our orthodontist to determine the severity and need of treatment. All parameters related to orthodontic treatment like bite pattern, muscle forces, habits, parafunctional forces, joint movements etc., will be evaluated and necessary investigations required will be prescribed to you.</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>X rays</h3>
                                <p>Full Mouth OPG and Skull x ray is mandatory before any orthodontic treatment. These X rays give us all the details of every structure and help us plan out the future course of action</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Clinical Photographs</h3>
                                <p>Photographs of teeth, face, smile, oro-facial structures, profile pictures will be needed to analyse esthetics and co-relate with other clinical findings</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Preparation of problem list and treatment plan</h3>
                                <p>Based on all the above findings and your dental concern, a list of problems will be made which need to be corrected during the course of treatment. A treatment plan will be generated according to the corrections needed.</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Discussion of the selected treatment Plan and estimated time</h3>
                                <p>The entire diagnosis and treatment plan that is formulated will be discussed with you on the next appointment. This is time you should ask all queries regarding every aspect of treatment. All the phases of treatment, their importance and estimated time required for the whole journey.</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Payment Methods</h3>
                                <p>Most orthodontic treatments will require you to make payments in installments as we proceed. We have flexible payment options at Kidsville.</p>
                            </div>
                            <div className="bx-grid col-lg-4 col-md-3 col-sm-12">
                                <h3>Coordination of entire Treatment journey</h3>
                                <p>Every part of the treatment will be well coordinated with you in advance. You shall be guided all through procedure and beyond.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
