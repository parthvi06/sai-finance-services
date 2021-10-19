import React, { Component } from 'react'

export default class Retainers extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Retainers</h2>
                        </div>
                    </div>    
                </div>
                <section className="cap_children_teeth">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>WHAT TO KNOW BEFORE YOU GET A RETAINER?</h2>
                                <p>A retainer keeps your teeth from moving after they’ve been straightened with braces. It can take at least<strong> four to six months </strong>for the new position of your teeth to become permanent. During that time, your teeth will try to shift back to their original position, which is called relapse. When used as instructed, a retainer prevents this from happening.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cap_children_teeth">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>TYPES OF ORAL HABITS</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how_Rcanal">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Hawley's Retainer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</p>
                                <img src="/assets/img/hawley.jpeg" alt="" />
                           </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Clear Plastic Retainer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</p>
                                <img src="/assets/img/plastic-retainer.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Bonded Retainer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</p>
                                <img src="/assets/img/Bondedretainer.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="how_sealant">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <p><strong>Why do you need a retainer?</strong></p>
                                <h2>WHAT RETAINERS DO?</h2><hr />
                                <p>Even after your teeth have successfully moved to a new position, the effects of eating, chewing and everyday wear can cause relapse. Retainers prevent this relapse and allow bone formation around the teeth and safeguarding the effects of treatment. If you have been prescribed a removable retainer, it’s important that you wear it exactly according to your orthodontist’s instructions or you may lose some or all benefits of the braces. You should see your orthodontist in case you lose your retainer, it cracks or breaks.</p>
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
