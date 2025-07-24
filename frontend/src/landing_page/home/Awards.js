import React from 'react'

function Awards() {
    return (
        <div className='container py-5'>
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="AwardImage"
                        className="img-fluid mt-3"
                    />
                </div>

                {/* Text and Lists Column */}
                <div className="col-12 col-md-6">
                    <h1 className="mb-3">Trusted by aspiring traders across India</h1>
                    <p className="mb-4">
                        Bullnest users simulate real-time trades daily, closely mirroring real market conditions. They learn and invest virtually across:

                    </p>
                    <p>Every new user gets  &#36;10,000 virtual cash and 20 top Indian stocks to begin their trading journey.</p>



                    {/* Press Logos */}
                    <div className="mt-4">
                        <img
                            src="media/images/pressLogos.png"
                            alt="Press Logos"
                            className="img-fluid"
                            style={{ maxWidth: "90%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards