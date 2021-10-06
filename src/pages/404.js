import React, { Component } from 'react';

export class Page404 extends Component {
    render() {
        return (
            <div className="container">
                <div className="content para-404">
                    <div className="row align-items-center ">
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <img src="/assets/img/something-lost.png" />
                        <h1>Oops, looks like the page is lost.</h1>
                        <p className="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page404

