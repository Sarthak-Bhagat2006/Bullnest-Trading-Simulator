import React from 'react';

function Stats() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Left Column */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <h1 className="fs-2 mb-3">Trust with confidence</h1>

                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted mb-4">
                        That's why thousands of smart investors trust <strong>Bullnest</strong> to track real-time stock data, manage their holdings, and stay ahead in the market — all from a single, intuitive dashboard.
                    </p>

                    <h2 className="fs-4">Built for focus, not FOMO</h2>
                    <p className="text-muted mb-4">
                        <strong>Bullnest</strong> doesn’t believe in spam, gimmicks, or flashy distractions. Just fast, reliable stock data — delivered in a dashboard that puts your goals first.
                    </p>

                    <h2 className="fs-4">The Bullnest universe</h2>
                    <p className="text-muted mb-4">
                        <strong>Bullnest</strong> is just getting started. Our vision is to create a connected ecosystem where real-time insights, portfolio tools, and investor communities come together — all in one place.
                    </p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">
                        At <strong>Bullnest</strong>, we don't just show you stock data — we help you make sense of it. With real-time insights and a clean, distraction-free dashboard, you're always one step ahead in managing your money smarter.
                    </p>
                </div>

                {/* Right Column */}
                <div className="col-12 col-md-6 text-center">
                    <img
                        src="media/images/ecosystem.png"
                        alt="Ecosystem"
                        className="img-fluid mb-4"
                        style={{ maxWidth: '90%' }}
                    />
                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                        <a href="#" className="text-decoration-none">
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;