import React from 'react';

function Brockerag() {
    return (
        <div className="container py-5">
            <div className="row text-center">
                {/* Left Column */}
                <div className="col-12 col-md-8 mb-4 mb-md-0 text-md-start">
                    <a href="#" className="text-decoration-none">
                        <h3 className="fs-5 mb-4">Brokerage Calculator</h3>
                    </a>
                    <ul className="text-muted" style={{ lineHeight: "2", fontSize: "14px" }}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via email.</li>
                        <li>Physical copies of contract notes, if required, will be charged ₹20 per note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS): 0.5% or ₹100 per executed equity order (whichever is lower).</li>
                        <li>For NRI account (PIS): 0.5% or ₹200 per executed equity order (whichever is lower).</li>
                        <li>If the account is in debit, ₹40 will be charged per executed order instead of ₹20.</li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="col-12 col-md-4 text-md-start">
                    <a href="#" className="text-decoration-none">
                        <h3 className="fs-5 mb-3">List of Charges</h3>
                    </a>
                    <p className="text-muted" style={{ fontSize: "14px" }}>
                        Download the full list of applicable charges, including exchange fees, account maintenance, and more.
                    </p>
                    <a href="#" className="btn btn-outline-primary btn-sm">Download PDF</a>
                </div>
            </div>
        </div>
    );
}

export default Brockerag;