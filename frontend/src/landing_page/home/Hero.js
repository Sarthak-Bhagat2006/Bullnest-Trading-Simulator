import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
    return (
        <div className='container p-5'>
            <div className="row text-center justify-content-center">

                <img src="/media/images/homeHero.png" alt="heroImage" className='mb-5' style={{ width: "70%" }} />

                <h1 className='mt-5'>Invest Smarter with Bullnest</h1>
                <h4>Start with &#36;10,000 coins and 20 virtual stocks.</h4>
                <p>Learn, trade, and simulate the markets — no real money required.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link className="btn btn-primary px-4 py-2 mt-3 fs-5" style={{ color: "white", textDecoration: "none" }} to="/signup">Sign up for free
                    </Link>
                </div>

            </div>


        </div>
    )
}

export default Hero
