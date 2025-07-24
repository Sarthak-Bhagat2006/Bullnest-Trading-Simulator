import React from 'react';

function Footer() {
    return (
        <footer className="border-top" style={{ backgroundColor: 'rgb(250,250,250)' }}>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-5">
                    {/* Logo & Socials */}
                    <div className="col mb-4">
                        <img src="media/images/logo.png" alt="Logo" className="img-fluid mb-2" style={{ width: "30%" }} />
                        <p className="text-muted">
                            &copy;Bullnest Broking Ltd. <br />
                            All rights reserved.
                        </p>

                        {/* Social Media Icons Set 1 */}
                        <ul className="d-flex gap-3 list-unstyled p-0">
                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                            <li><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                            <li><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                        </ul>

                        <hr />

                        {/* Social Media Icons Set 2 */}
                        <ul className="d-flex gap-3 list-unstyled p-0">
                            <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                            <li><i className="fa fa-whatsapp" aria-hidden="true"></i></li>
                            <li><i className="fa fa-telegram" aria-hidden="true"></i></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="col mb-4">
                        <h5>Account</h5>
                        {[
                            "Open demat account",
                            "Minor demat account",
                            "NRI demat account",
                            "Commodity",
                            "Dematerialisation",
                            "Fund transfer",
                            "MTF",
                            "Referral program"
                        ].map((item, index) => (
                            <a key={index} className="text-muted d-block mt-2 text-decoration-none" href="#">{item}</a>
                        ))}
                    </div>

                    {/* Support */}
                    <div className="col mb-4">
                        <h5>Support</h5>
                        {[
                            "Contact us",
                            "Support portal",
                            "How to file a complaint?",
                            "Status of your complaints",
                            "Bulletin",
                            "Circular",
                            "Z-Connect blog",
                            "Downloads"
                        ].map((item, index) => (
                            <a key={index} className="text-muted d-block mt-2 text-decoration-none" href="#">{item}</a>
                        ))}
                    </div>

                    {/* Company */}
                    <div className="col mb-4">
                        <h5>Company</h5>
                        {[
                            "About",
                            "Philosophy",
                            "Press & media",
                            "Careers",
                            "Bullnest Cares (CSR)",
                            "Bullnest.tech",
                            "Open source"
                        ].map((item, index) => (
                            <a key={index} className="text-muted d-block mt-2 text-decoration-none" href="#">{item}</a>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div className="col mb-4">
                        <h5>Quick links</h5>
                        {[
                            "Upcoming IPOs",
                            "Brokerage charges",
                            "Market holidays",
                            "Economic calendar",
                            "Calculators",
                            "Markets",
                            "Sectors"
                        ].map((item, index) => (
                            <a key={index} className="text-muted d-block mt-2 text-decoration-none" href="#">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;