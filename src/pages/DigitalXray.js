import React, { Component } from 'react';

export default class DigitalXray extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Digital X-ray</h2>
                        </div>
                    </div>    
                </div>
                <section className="invisalign_treatment">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <h2>When Should Your Child Get an X-Ray</h2>
                                <p>There are many areas in your child's mouth that the dentist can't see during a regular examination, like under the gums or inside the teeth. That's when <strong>X-rays can be quite useful</strong>. Dentists won't typically recommend an X-ray unless they've done a full clinical examination and still have some unanswered questions about your child's teeth or oral health.</p>
                                <p><strong>Here are some cases where a dentist might recommend an X-ray:</strong><br/></p>
                                <ul>
                                    <li>To figure out if there's room in your child's mouth for all incoming teeth</li>
                                    <li>To determine if your child is losing primary teeth quickly enough to make room for all permanent teeth</li>
                                    <li>To check for preliminary development of wisdom teeth or any teeth unable to emerge from the gums (known as impacted).</li>
                                    <li>To check for early signs of tooth decay</li>
                                    <li>To look for any developmental abnormalities like cysts or tumors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="digital-xray">
                    <div className="container">
                        <div className="row child_Xray reverse_col">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <h2>Are dental X-rays safe for my child?</h2>
                                <p>Absolutely. The amount of radiation exposure in dental x-rays and more specifically using digital machines is very minimal which causes minimal harm.</p>
                                <p>Now you might know more about when X-rays are needed for your child but do you still have questions about their safety? According to <strong>Mouth Healthy by the American Dental Association</strong>, dental X-rays are safe. They will expose your child to low radiation levels, but the possibility of experiencing any harmful effects is also low. Additionally, most dental professionals follow the new pediatric X-ray guidelines from <strong>the Food and Drug Administration</strong>. These guidelines recommend that "medical X-ray imaging exams be optimized to use the lowest radiation dose needed."</p>
                                <a className="more" href="tel:+91 6358834088">FEEL FREE TO CONTACT US</a>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <img src="/assets/img/X ray.jpg" alt="" />
                            </div>
                        </div>
                    </div>   
                </section>
                <section className="put_cap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>Digital Dental X-Ray For Children</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 put_cap_tooth">
                                <a><i></i></a>
                                <h3>Supports Diagnosis</h3>
                                <p>X-rays are a fundamental part of a pediatric dentist’s ability to diagnose and monitor the health of children’s dental health.</p>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <a><i></i></a>
                                <h3>Provides internal details​</h3>
                                <p>Examinations that only rely on the visual examination by the dentist is not enough, because there are many aspects that the eye cannot see.</p>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 put_cap_tooth">
                                <a><i></i></a>
                                <h3>Check eruption pattern/ anomaly​</h3>
                                <p>By taking x-rays paediatric dentists will be able to see much more, including the baby and permanent teeth, their growth and eruption and any dental and bone disease.</p>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <a><i></i></a>
                                <h3>​​​Depth of cavities</h3>
                                <p>Digital x-rays also provide us with information regarding the size of the cavities, the diagnoses of any bone disease or oral pathology and signs of abscess, cyst or tumour development. These factors are unable to be detected by a regular oral exam.</p>
                            </div>
                        </div>    
                    </div>
                </section>
                <section className="remember">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
                                <p className="text-center"><strong>Why we need to use dental x rays for children?</strong></p>
                                <h2 className="text-center">Digital low dose X- rays at kidsville</h2>
                                <p className="text-center">We use digital x rays at Kidsville to minimize exposure to radiation and at the same time provide the most accurate image clarity. Precision with safety is our objective.</p>
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
