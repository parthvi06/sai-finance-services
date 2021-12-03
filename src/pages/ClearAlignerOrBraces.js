import React, { Component } from 'react'

export default class AlignerBraces extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Clear Aligner or Braces</h2>
                        </div>
                    </div>    
                </div>            
                <section className="invisalign_tooth_remove">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <p><strong>Benefits of clear aligners</strong></p>
                                <h2>WHETHER TO CHOOSE CLEAR ALIGNERS OR BRACES?</h2>
                            </div>
                        </div>
                        <div className="row pharma_blocks">    
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12 text-center">
                                <img src="/assets/img/kidsvilleicon.png" alt="Clear aligners are invisible"/>
                                <h3>Clear aligners are invisible</h3>
                                <p>As clear aligners are made of transparent material they are invisible compared to braces.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12 text-center">
                                <img src="/assets/img/kidsvilleicon.png" alt="Eating food is easy"/>
                                <h3>Eating  food is  easy</h3>
                                <p>Food would easily get stuck in between the traditional braces. With clear aligners, as the are to be removed when eating, there are no food restrictions.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12 text-center">
                                <img src="/assets/img/kidsvilleicon.png" alt="Easy oral hygiene maintainance"/>
                                <h3>Easy oral hygiene maintainance</h3>
                                <p>Tooth brushing and flossing can be carried out as regular as the clear aligners are removed when doing so unlike fixed braces which require special effort and attention</p>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="invisalign_tooth_remove">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <p><strong>Drawbacks of clear aligners</strong></p>
                                <h2>WHETHER TO CHOOSE CLEAR ALIGNERS OR BRACES?</h2>
                            </div>
                        </div>
                        <div className="row pharma_blocks">    
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12 text-center">
                                <img src="/assets/img/kidsvilleicon.png" alt="Complaince and discipline"/>
                                <h3>Complaince and discipline</h3>
                                <p>Clear aligners are to be worn 22 to 24 hours a day. They are removed only while eating drinking brushing, flossing and to clean. This requires discipline on part of the patient.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12 text-center">
                                <img src="/assets/img/kidsvilleicon.png" alt="Types of corrections"/>
                                <h3>Types of corrections that can be achieved with clear aligners</h3>
                                <p>Not all range of teeth irregularities can be corrected using clear aligners. Some malocclusions are better treated using traditional fixed braces.</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12 text-center">
                                <img src="/assets/img/kidsvilleicon.png" alt="Age"/>
                                <h3>Age</h3>
                                <p>Clear aligners are better suited for older children as all their permanent teeth would have erupted by then.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="remember">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
                                <h2 className="text-center">BENEFITS OF INVISALIGN</h2>
                                <p className="text-center"><strong>Invisalign is designed to fit your lifestyle completely. you can be social, take selfies, post pictures, or participate in any activity without being conscious of your smile.</strong></p>
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
                                <a className="book_app more inner-btn" href="https://blog.kidsvilledental.in/appointment/">Book online</a>&nbsp;<a className="num_app more inner-btn" href="tel:+91 6358834088"><i  className="fa fa-phone"></i>&nbsp;+91 6358834088</a>
                            </div>
                        </div>
                    </div>   
                </section>            
            </div>
        )
    }
}
