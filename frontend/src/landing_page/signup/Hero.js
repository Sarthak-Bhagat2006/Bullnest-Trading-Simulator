import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Hero() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [submitted, setSubmitted] = useState(false);


    const { email, password, username } = formData;

    const commonHandler = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);


        if (!username || !email || !password) {
            return;
        }

        try {
            const { data } = await axios.post("http://localhost:3002/signup", {
                ...formData,
            },
                { withCredentials: true })

            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setFormData({
            ...formData,
            email: "",
            password: "",
        });

    }


    return (
        <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center p-5">
                <h1>Open a free demat and trading account online</h1>
                <p>
                    Start investing brokerage free and join a community of 1.6+ crore
                    investors and traders
                </p>
            </div>
            <div className="col-6 justify-content-center">
                <h2>Sign Up</h2>
                <form className="border p-4 rounded shadow" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={commonHandler}
                            value={username}
                        />

                        {!username && submitted ? <p style={{ color: "red" }}>Username is required</p> : <></>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Enter Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="example@xyz"
                            onChange={commonHandler}
                            value={email}
                        />
                        {!email && submitted ? <p style={{ color: "red" }}>email is required</p> : <></>}
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={commonHandler}
                        />
                        {!password && submitted ? <p style={{ color: "red" }}>password is required</p> : <></>}
                    </div>

                    <div>
                        Already have an account? <Link to={"/login"}>Login</Link>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Hero;
