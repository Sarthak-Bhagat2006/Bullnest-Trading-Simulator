import React from 'react';

function Team() {
    return (
        <div className="container py-5">
            {/* Heading */}
            <div className="row mb-4">
                <div className="col text-center">
                    <h1 className="fw-bold">Built by</h1>
                </div>
            </div>

            {/* Profile Section */}
            <div className="row align-items-center">
                {/* Left - Image and Name */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="media/images/me.jpg"
                        alt="Sarthak Bhagat"
                        className="img-fluid rounded-circle"
                        style={{ width: "60%", maxWidth: "250px", height: "auto", objectFit: "cover" }}
                    />
                    <h4 className="mt-4">Sarthak Bhagat</h4>
                    <h6 className="text-muted">Web Developer</h6>
                </div>

                {/* Right - About */}
                <div className="col-12 col-md-6">

                    <p className="text-muted" style={{ lineHeight: "1.7" }}>
                        I'm a passionate MERN stack web developer and an Electronics & Communication Engineering student at P.E.S. Modern College of Engineering. I love building full-stack applications that solve real-world problems. From designing elegant UIs in React to implementing powerful REST APIs in Node.js, I enjoy every part of the development process.
                    </p>
                    <p className="text-muted" style={{ lineHeight: "1.7" }}>
                        I’ve built projects like <strong>ModernMentor</strong> (a collaboration platform for students) and <strong>Elite Stay</strong> (a listings-based rental platform). I'm always exploring new technologies and aim to make a difference with clean, user-focused design and logic-driven development.
                    </p>
                    <p>
                        Connect on &nbsp;
                        <a href="https://www.linkedin.com/in/sarthak-bhagat-8984b9279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;
                        /
                        &nbsp;<a href="mailto:sarthakbhagat2006@gmail.com">Email</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;