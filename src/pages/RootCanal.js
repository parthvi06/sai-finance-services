import React, { Component } from 'react';

export default class RootCanal extends Component {
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="main-title">
                        <div className="container">
                            <h2 className="main-title__primary">Pulp Therapy<br />(Root Canal Treatment)</h2>
                        </div>
                    </div>
                </div>
                <section className="root_canal">
                    <div className="container">
                        <div className="row pit_sealant">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <h2 className="text-center">WHAT IS ROOT CANAL TREATMENT IN CHILDREN'S TEETH?</h2>
                                <p>Root canal therapy is performed when the pulp which is composed of nerves and blood vessels in the tooth becomes infected or damaged. During root canal therapy, the pulp is removed, and the inside of the tooth is cleaned and sealed.</p>
                                <p>Primary teeth have the same functions as adult teeth- and a missing tooth at any age can cause problems with speech and eating. Baby teeth have another important role: They serve as guides for the proper placement of the permanent teeth. Without primary teeth to guide them in, permanent teeth tend to emerge in a crooked fashion, often becoming tilted or crowded because of inadequate space. This can result in bite problems that may require extensive orthodontic treatment later.<br/><strong>Saving a child’s tooth is always the best.</strong></p>
                                <p>Unlike its hard outer surface, soft pulp inside the tooth is rich on blood vessels and nerves. Problems in this area are often signaled by tooth sensitivity and pain. When we find these symptoms during an examination, we generally use radiographs to confirm that the pulp is diseased, or dying. That’s when we need to take action, before an abscess or further infection can develop. If possible, we prefer to use treatment methods such as:</p>
                                    <ul>
                                        <li><strong>Indirect pulp treatment</strong>: If pulp damage is minimal, its possible to remove most of the decay (not the pulp), apply an antibacterial and pulp soothing material, and then seal the tooth up again; that’s referred to as an “indirect pulp capping)</li>
                                        <li><strong>Pulpotomy treatment</strong>: Alternatively, if decay is limited to the upper portion of the pulp, we may receommed a “pulpotomy”. This involves removing the damaged part of the pulp, stabilizing the remaining healthy portion, and them disinfecting and sealing the tooth. This “partial” root canal is a time- tested technique that’s successful in many cases.</li>
                                        <li><strong>Pulpectomy treatment</strong>: If pulp tissue is infected through the entire tooth structure, a Pulpectomy may be needed. Here we remove all pulp tissue, disinfect and shape the canals, then fill and seal them with inert material. Afterwards, crown (the visble part) of the tooth will be restored. This resembles traditional root canal treatment, with a crucial difference: The sealant we use in children is capable of being dissolved by the body. That way, when it’s time for a permanent tooth to erupt, the baby tooth’s roots can be naturally resorbed/dissolved and the tooth development can proceed normally.
                                        </li>
                                    </ul>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="how_Rcanal">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <img src="" alt="" />
                                <h3>Clearing infected tissue</h3>
                                <p>Removal of decayed tissues and cleaning roots</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <img src="" alt="" />
                                <h3>Biocompatible root filling material</h3>
                                <p>Replacing roots with resorbable filling material</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <img src="" alt="" />
                                <h3>Permanent filling</h3>
                                <p>Sealing the tooth with permanent filling</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="what_Rcanal">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <h2>When Does My Child Need To Have A Root Canal Done?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Toothache</h3>
                                <p>Severe toothache upon chewing or application of pressure</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 need_Rcanal">
                                <h3>Extreme sensitivity</h3>
                                <p>Prolonged sensitivity (pain) to hot or cold temperatures</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Discoloured dark tooth</h3>
                                <p>Discoloration (darkening) of the tooth</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Swelling</h3>
                                <p>Swelling and tenderness in nearby gums</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12 need_Rcanal">
                                <h3>Pus discharge</h3>
                                <p>A persistent or recurring pimple on the gums</p>
                            </div>
                            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                <h3>Symptomless</h3>
                                <p>Sometimes no symptoms are present.</p>
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
