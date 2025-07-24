import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className="row p-5 mb-5">
                <h1 className='fs-2 text-center'>We pioneered the discount broking model in India.</h1><br />
                <h1 className='fs-2 text-center'>Now, we are breaking ground with our technology.</h1>
            </div>
            <div className="row p-5 mt-5">
                <hr />
                <div className="col-6">
                    <p className='fs-5 text-muted' style={{ lineHeight: "1.8" }}>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Bullnest, a combination of 'Bull' and 'Nest'. 'Bull' represents the market, while 'Nest' symbolizes safety and security.</p>

                    <p className='fs-5 text-muted' style={{ lineHeight: "1.8" }}>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p className='fs-5 text-muted' style={{ lineHeight: "1.8" }}>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-6">
                    <p className='fs-5 text-muted' style={{ lineHeight: "1.8" }}>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className='fs-5 text-muted' style={{ lineHeight: "1.8" }}>
                        Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className='fs-5 text-muted' style={{ lineHeight: "1.8" }}>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
