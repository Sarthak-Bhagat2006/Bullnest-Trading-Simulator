import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container-fluid">
                {/* Logo on the left */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="media/images/logo.png"
                        alt="Logo"
                        width="75"
                        height="60"
                        className="d-inline-block align-text-top ms-5"
                    />
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links on the right */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <br /><br />
        </nav>

    );
}

export default Navbar;