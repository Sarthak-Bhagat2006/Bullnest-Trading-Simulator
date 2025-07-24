import React from 'react'

function Education() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img
                        src="media/images/education.svg"
                        alt="Education"
                        className="img-fluid"
                    />
                </div>

                {/* Right Content */}
                <div className="col-12 col-md-6">
                    <h1 className="mb-4">Free and open market education</h1>

                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <div className="mb-3">
                        <a href="#" style={{ textDecoration: "none" }}>
                            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    <p>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <div>
                        <a href="#" style={{ textDecoration: "none" }}>
                            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education