import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
            <div className="text-center">
                <h1 className="display-4 mb-3">404 - Page Not Found</h1>
                <p className="text-muted mb-4">
                    Oops! We couldn’t find the page you were looking for.
                </p>
                <Link to="/" className="btn btn-primary">
                    Go to Bullnest Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;