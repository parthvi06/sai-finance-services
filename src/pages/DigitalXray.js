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
                <section className="digital-xray">
                    <div className="container">
                        <div className="row child_Xray reverse_col">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <h2>Are dental X-rays safe for my child?</h2>
                                <p>Absolutely. The amount of radiation exposure in dental x-rays and more specifically using digital machines is very minimal which causes minimal harm.</p>
                                <a className="more">FEEL FREE TO CONTACT US</a>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <img src="/assets/img/Dental-X-ray.jpg" alt="" />
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
                                <a className="book_app more inner-btn">Book online</a>&nbsp;<a className="num_app more inner-btn" href="tel:+91 6358834088"><i  className="fa fa-phone"></i>&nbsp;+91 6358834088</a>
                            </div>
                        </div>
                    </div>   
                </section>      
            </div>
        )
    }
}
