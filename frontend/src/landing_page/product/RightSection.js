import React from 'react'

function RightSection({ imgUrl, productName, productDescription, tryDemo, learnMore }) {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='gap-4 d-flex'>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore}>Learn More</a>
                    </div>


                </div>
                <div className="col-6">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default RightSection
