import React, { Component } from 'react';

export default class SpaceMaintainer extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary"> Space Maintainer</h2>
                        </div>
                    </div>
                </div>
                <section className="space_detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <h3>Your Child Need Not Have Crocked Teeth. Just By Monitoring The Eruption Of Each Tooth By Regular Check Ups, Children Can Have Naturally Well Aligned Teeth.</h3>
                            </div>
                        </div>
                    </div>        
                </section>    
                <section className="oral_hygiene">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                                <img src="/assets/img/spacemaintener.jpg" alt=""/>
                            </div>
                            <div className="col-12 col-lg-8 col-md-12 col-sm-12">
                                <h2 className="hygiene_title">A Device To Have Well Aligned Teeth</h2>
                                <p>You should begin to care about your child’s oral hygiene from his infancy itself. Ask your pedodontist for the detailed manner to do so. Schedule your child’s first dental appointment before their first birthday or after his or her first baby tooth is visible, whichever comes first.</p>
                            </div>    
                        </div>
                    </div>
                </section>
                <section className="pharma">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-sm-12 text-center">
                                <h2>How To Care For Your Child's Space Maintainer Appliance</h2>
                            </div>
                        </div>
                        <div className="row pharma_blocks">    
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <img src="/assets/img/chewingGum.jpg" alt="" />
                                <h3>Avoid sticky sweets, popcorn, ice and or chewing gum.</h3>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <img src="/assets/img/don'tpush.jpg" alt="" />
                                <h3>Don't tug or push on the space maintainer with your fingers or tongue.</h3>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <img src="/assets/img/Teethbrushing.jpg" alt="" />
                                <h3>Keep it clean with brushing and flossing.</h3>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <img src="/assets/img/wire.jpg" alt="" />
                                <h3>At night carefully clean around all wires, bands and other areas of the appliance, as it tends to trap food.</h3>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <img src="/assets/img/candy.jpg" alt="" />
                                <h3>Make sure your child avoids the following: Chewing gum. Sticky candy such as Jolly Ranchers, Tootsie Rolls, gummies, and caramel.</h3>
                            </div>
                            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                <img src="/assets/img/sMaintainer.jpg" alt="" />
                                <h3>Children readily adapt to space maintainers</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
