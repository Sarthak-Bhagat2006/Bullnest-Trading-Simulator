import React from 'react'

function Pricing() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <h1>Unbeatable transparency</h1>
                    <p className="mt-3">
                        We bring the concept of simulated discount broking with zero hidden charges. Practice trading with real-time data — no actual costs involved.
                    </p>
                    <div className="mt-3">
                        <a href="#" style={{ textDecoration: "none" }}>
                            See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* Right Boxes */}
                <div className="col-12 col-md-6">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                            <div className="border p-3 h-100">
                                <h1>₹10,000</h1>
                                <h2>Coins</h2>
                                <p>
                                    Every user gets a head start
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="border p-3 h-100">
                                <h1>20 Free Stocks</h1>
                                <p>
                                    Test strategies with pre-loaded virtual funds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing