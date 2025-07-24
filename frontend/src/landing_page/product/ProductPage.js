import React from "react";
import Hero from "./Hero.js";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from './Universe.js'

function productPage({ imgUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <>
            <Hero />
            <LeftSection
                imgUrl="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
                imgUrl="media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Bullnest account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo=""
                learnMore=""

            />
            <LeftSection
                imgUrl="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
                imgUrl="media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                tryDemo=""
                learnMore=""

            />
            <LeftSection
                imgUrl="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />


            <p className="text-center m-5 fs-2">Want to know more about our technology stack? Check out the Bullnest.tech blog.</p>
            <Universe />
        </>
    );
}

export default productPage;
