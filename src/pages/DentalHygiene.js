import React, { Component } from 'react'

export default class DentalHygiene extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Dental Hygiene for Children</h2>
                        </div>
                    </div>
                    <section className="oral_hygiene">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                    <img src="/assets/img/LearningToBrushTeeth.jpg" alt=""/>
                                </div>
                                <div className="col-12 col-lg-8 col-md-12 col-sm-12">
                                    <h2 className="hygiene_title">From when should i begin to care about my child's oral hygiene?</h2>
                                    <p>You should begin to care about your child’s oral hygiene from his infancy itself. Ask your pedodontist for the detailed manner to do so. Schedule your child’s first dental appointment before their first birthday or after his or her first baby tooth is visible, whichever comes first.</p>
                                    <p>As kids grow up, their oral hygiene habits should grow with them. Kids have all their baby teeth by the age of 3. These are called primary teeth. Baby teeth start falling out around age 6; that’s when the permanent, or adult, teeth start coming in. Gaps between baby teeth are normal. They make room for permanent teeth. Most permanent teeth come in by age 13.</p>
                                    <a className="more">Book an Appointment</a>
                                </div>    
                            </div>
                        </div>
                    </section>
                    <section className="Hservice" id={4}>
                     <div className="container">
                        <h2 className="service_heading">Try these tips to keep your Teen on track:</h2>
                        <p>Motivating children and teens towards oral health go a long way in they being cavity-free all through their life. Start young! Establish habits which empower them towards better oral health.</p>
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 service_item">
                                   <span className="srv-iconfont fa fa-cogs"></span>
                                    <h3 className="srv-title">For pre-teens</h3>
                                    <p className="srv-para">Oral Hygiene for Preteens As children grow older and more of their permanent teeth come in, a rigorous daily dental hygiene routine is crucial to keeping teeth and gums healthy. However, it can be difficult to keep preteens interested in their oral care. As preteens become more conscious of their appearance, it can be helpful to remind them that good oral care can help them look and feel better. ·        </p>    
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 service_item">
                                   <span className="srv-iconfont fa fa-cogs"></span>
                                    <h3 className="srv-title">Brush and powerbrush</h3>
                                    <p className="srv-para">Remind your child to brush twice a day with a fluoride toothpaste for a full two minutes which not only fights cavities and strengthens teeth, but also gives older kids the confidence of having fresh breath. A power toothbrush might make brushing more fun for preteens.</p>    
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 service_item">
                                   <span className="srv-iconfont fa fa-cogs"></span>
                                    <h3 className="srv-title">Floss</h3>
                                    <p className="srv-para">Flossing is extremely important at this point as most permanent teeth have erupted and cleaning between them will help prevent cavities and keep their mouth fresh.</p>    
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 service_item">
                                   <span className="srv-iconfont fa fa-cogs"></span>
                                    <h3 className="srv-title">Mouth Guard</h3>
                                    <p className="srv-para">Encourage children who play sports to wear a mouth guard to protect their teeth from injuries.</p>    
                                </div>
                            </div>
                        </div>    
                    </section>
                    <section className="emergency-accordion">
                        <div class="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                    <h4>#cavityfree #zerocavity</h4>
                                    <h2>Here are some tips to help keep your child’s teeth healthy and strong starting at age 3:</h2>
                                    <p>We want oral care to become your child’s lifestyle. We want them to carry these habits right up to adulthood.</p>
                                </div>
                            </div>
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How much toothpaste? 
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body">
                                            Use a pea-sized amount of fluoride toothpaste and make sure your child spits it out after brushing
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How long to brush? 
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body">
                                            Be sure your child brushes for at least 2 minutes twice a day
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            When to floss? 
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div class="panel-body">
                                        Start flossing as soon as teeth touch, or even earlier to help build good habits.
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="heading4">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Frequency of dental visit?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                        <div class="panel-body">
                                        Visit the dentist every 6 months.                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </section>
                    <section className="hygiene_text">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:20}}>
                                    <p>At Happy Kidsville Dental we are advocates for preventative dental care. We ensure that our patients receive professional oral hygiene appointments, at least twice a year as part of their regular dental routine. This allows us to review our patients’ brushing techniques, protect our patient’s teeth and further motivate our patients to maintain better oral and systemic health.</p>
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
            </div>    
        )
    }
}
