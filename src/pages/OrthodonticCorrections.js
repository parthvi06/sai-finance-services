import React, { Component } from 'react';

export default class OrthodonticsCorrections extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Orthodontics Corrections</h2>
                        </div>
                    </div>    
                </div>
                <section className="space_detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <p><strong>In children and young adults of this age, the aim of orthodontic treatment is to straighten teeth, correct any remaining issues with the bite and set up a ‘smile for life’.</strong></p>
                                <p><strong>Here are some common orthodontic issues that can be treated with braces:</strong></p>
                            </div>
                        </div>
                    </div>        
                </section>
                <section className="orthodontics-correction">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 service_item">
                                <img src="/assets/img/Overly crowded.png" alt="Overly crowded" />
                                <p className="srv-para">Overly crowded teeth can get worse over time, and result in severely crooked teeth. This crowding can lead to plaque accumulation, tooth decay and an increased chance of gum disease.</p>    
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 service_item">
                                <img src="/assets/img/Gapped Teeth.png" alt="Overly crowded" />
                                <p className="srv-para">Spacing issues and gaps between teeth can lead to gum problems (due to lack of protection by the teeth), periodontal pockets and increased risk of periodontal disease.</p>    
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 service_item">
                                <img src="/assets/img/Deep Bite.png" alt="Overly crowded" />
                                <p className="srv-para">Deep bite can lead to gum problems or irritation, and/or wear on the lower teeth, and can cause painful jaw and joint problems.</p>    
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 service_item">
                                <img src="/assets/img/Underbite.png" alt="Overly crowded" />
                                <p className="srv-para">An underbite can prevent the normal function of front teeth or molars, which can lead to tooth wear. It can also cause painful jaw and joint problems.</p>    
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 service_item">
                                <img src="/assets/img/Open Bite.png" alt="Overly crowded" />
                                <p className="srv-para">Open bite can cause poor or painful chewing, and even speech impairment. It can also lead to greater issues like temporomandibular joint disorder (TMJD)</p>    
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 service_item">
                                <img src="/assets/img/Crossbite.png" alt="Overly crowded" />
                                <p className="srv-para">Crossbite causes one or more upper teeth to bite on the inside of the lower teeth. This can cause wear of the teeth, gum disease and bone loss.</p>    
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
