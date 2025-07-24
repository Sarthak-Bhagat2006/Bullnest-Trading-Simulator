import React from 'react'
import { Link } from 'react-router-dom'

function Universe() {
    return (
        <div className='container'>
            <div className="row text-center mb-2">
                <h1 className='mb-5'>The Bullnest Universe</h1>
                <p className='mb-5 fs-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3">
                    <img src="media/images/smallcaseLogo.png" />
                    <p className='text-small text-muted mt-2'>Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
                    <p className='text-small text-muted mt-2'>Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/sensibullLogo.svg" style={{ width: "50%" }} className='mb-2' />
                    <p className='text-small text-muted mt-2'>Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more. <br />
                    </p>
                </div>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link className="btn btn-primary px-4 py-2 mt-3 fs-5" style={{ color: "white", textDecoration: "none" }} to="/signup">Sign up for free
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Universe
