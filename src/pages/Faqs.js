import React, { Component } from 'react'

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">FAQs</h2> 
                        </div>
                    </div>
                </div>
                <section className="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                <h2>Frequently Asked Questions</h2>
                                <p>Do you have any questions not answered here? Contact us Today.</p>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        When should I take my child for their first ever check-up?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    As soon as the first tooth appears and no later than the age of one, regardless. Visiting Kidsville Dental from an early age gives you as a parent the chance to discuss potentially harmful habits, check you’re following the right nutritional advice for your child, and put in place practices that will prevent the formation of cavities in the future.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why do we need to care about primary (Milk teeth)?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    Your child’s baby teeth have some big responsibilities. Until the adolescent years, they will not only help your child to bite and chew (i.e. get proper nutrition), and speak correctly, but also help guide the permanent teeth underneath them into their proper positions. In fact, a major function of baby teeth is to hold space for the adult teeth that will eventually push them out.<br />
                                        <br/>If your child loses a tooth due to injury, infection or because an extraction is required, the missing space between the teeth may lead to overcrowding or crooked teeth. This is because the teeth coming in on either side of the space will begin to drift into the empty space, meaning there is insufficient space for their adult teeth. 
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What should I use to clean my child's teeth?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    To begin with, a small, soft-bristled toothbrush is ideal for removing the plaque and bacteria that cause cavities, together with age-appropriate toothpaste – a smear for under-twos; a pea-sized amount for everyone else. It’s much easier to instil good habits in children when they are very young – so it’s never too early to start the practice of brushing for two minutes, twice a day to get your child familiar with a good tooth-brushing routine. For younger kids, parents should do the brushing themselves; for older children, parents should be on-hand to assist and check it’s being done correctly.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Should I worry about my child's thumb sucking?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    Only if they are still in the habit past the age of three, as that is the point where sucking may impact on your child’s palate, bite and the alignment of their underlying adult teeth. We recommend curbing sucking habits by the age of three, and we will offer lots of advice and encouragement to help both you and your child, as well as special appliances where necessary.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading5">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Why is fluoride so important?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                    <div className="panel-body">
                                    Fluoride is a naturally occurring mineral that protects teeth by making them stronger and more resistant to acid, which in turn reduces the risk of cavities.<br />
                                    <br />Seventy years of research has proven that fluoride prevents cavities and, at the moment, there is no other toothpaste ingredient with this kind of track record. For this reason, dentists have been recommending fluoride toothpaste and fluoride varnish to their patients for decades.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading6">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        What is the best way to introduce kids to dentistry?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                                    <div className="panel-body">
                                    Visiting the dentist early and often is the key to securing a lifetime of good oral health for your family. Get this right, and your kids will develop positive associations with the dentist that will remain with them for life. Get this wrong, and your children could grow up with unhappy memories of the dentist – which, by the time they’re an adult, may lead them to avoid visiting the dentist and, ultimately, to poor oral health.
                                    <br /><strong>Top Tips for Patients & Carers:</strong>
                                    <ul>
                                        <li>Describe going to the dentist as a highlight in the calendar – yes really! At Kidsville Dental, they will only associate the dentist with fun, excitement and contentment.</li>
                                        <li>Avoid using negative dental words – injection, pull, or needle, for example. At Kidsville Dental, we take great care to use kid-friendly, non-threatening language – so we “tickle their teeth” rather than clean them; and we call cavities by their real name: “sugar bugs”.</li>
                                        <li>Keep your own memories of visiting the dentist to yourself, because they will have no bearing on what your child experiences at Kidsville Dental. It’s all too easy to use a visit to the dentist as a threat to make them brush better at bedtime – but this simply reinforces negative attitudes. While certain adult generations may have lingering memories of bad dental care from their childhood, there’s no need to pass them on to your children!</li>
                                        <li>Any new experience may cause feelings of anxiety in children. Our goal at Kidsville Dental is to help your child put their trust in us, so that each visit becomes something they really look forward to. As well as visiting the practice in advance, do let your child bring in a special toy or security blanket if they are at all anxious.</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading7">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                        What can I do to prevent cavities?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse7" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7">
                                    <div className="panel-body">
                                        At home, diet is really important: make sure your children’s meals are rich in leafy vegetables, whole grains and fruits. Avoid sugary and fizzy drinks – juices, flavoured milks, sports drinks and even mineral water – as much as possible, as their high levels or sugar and acid cause direct damage to teeth.<br />
                                        <br />It’s better for your kids to have an occasional sweet-fest than to constantly snack on one sweet every few minutes or hours.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading8">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                        What can a pediatric dentist do prevent cavities?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse8" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8">
                                    <div className="panel-body">
                                    Main measures that will begin a lifetime of good dental health are; regular visits to Children’s dentist, good oral hygiene, fluoride (in correct doses advised by dentist), preventative techniques such as fissure sealants and limiting of sugar intake in your child’s diet.ent
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading9">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                        My child has injured tooth. What should I do ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse9" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9">
                                    <div className="panel-body">
                                    Stay calm, and contact Kidsville Dental immediately for a same-day emergency appointment. If your child’s tooth has been knocked out, retrieve the tooth and any fractured pieces, and be careful not to touch the tooth root. Do not attempt to place a baby tooth back in the mouth – this can cause long-term damage to the permanent tooth bud. Rinse with cool water only. If your child has experienced a blow to the head or jaw, medical attention for this should take priority over getting to the dentist.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading10">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                        Are dental X-rays safe?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse10" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading10">
                                    <div className="panel-body">
                                    Yes. Kidsville Dental has invested in state-of-the-art dental x-rays that focus only on the area of interest and produce the lowest possible levels of radiation.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading11">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                        My child has special needs. What should I do?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse11" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11">
                                    <div className="panel-body">
                                    All the staff at Kidsville are experienced in working with children with all kinds of special health or educational needs. Please inform us prior to your child’s first appointment at Kidsville Dental so that we can compile a full medical history and make any additional arrangements, be it extra time or stimulating distractions. As with all our patients, your child may benefit from visiting the practice before their appointment so that they are familiar with the Kidsville Dental environment, and we encourage them to bring any special toys or entertainment that will help them to relax.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading12">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                        When should my child have Pit and fissure sealants?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading12">
                                    <div className="panel-body">
                                    Fissure sealants protect your child’s adult teeth, so as soon as their permanent teeth have come through, you can bring your child in to get this special coating applied. It’s a quick and completely painless process – most kids even think it’s fun!
                                   </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading13">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                        Can my child have teeth whitened?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse13" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                    <div className="panel-body">
                                    Not until they’re 18 years old, except in certain circumstances, for example to correct discolouration due to a diseased tooth.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading14">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                        My child is very nervous to see a dentist. What should I do?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse14" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading14">
                                    <div className="panel-body">
                                    Here at Kidsville Dental, treating nervous children is our whole reason for being! In addition to knowing how to speak with them on their level, distract and entertain them, we offer several different sedation options that can help put them at ease.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading15">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                        When can my child's teeth be straightened?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse15" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading15">
                                    <div className="panel-body">
                                    We recommend you bring your child in from age 7 for an early orthodontic assessment, as there’s much that can be done even at that early stage to prevent or reduce the need for treatment later.
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
