import React from 'react'

function LeftSection({ imgUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='gap-4 d-flex'>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore}>Learn More</a>
                    </div>
                    <div className='mt-5 gap-4 d-flex'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="media/images/appStoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection
