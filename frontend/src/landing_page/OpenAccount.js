import React from 'react'
import { Link } from 'react-router-dom'

function OpenAccount() {
    return (
        <div className='container p-5'>
            <div className="row text-center justify-content-center">

                <h1 className='mt-5 p-2'>Open a Bullnest account</h1>

                <p className='p-2 text-muted'>Modern web platforms. &#36;10,000 coins + 20 free stocks to begin. Designed for immersive learning — no real money involved.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link className="btn btn-primary px-4 py-2 mt-3 fs-5" style={{ color: "white", textDecoration: "none" }} to="/signup">Sign up for free
                    </Link>
                </div>

            </div>


        </div>
    )
}

export default OpenAccount
