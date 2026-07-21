import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setCredentials({

            ...credentials,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login(credentials);

            localStorage.setItem("token", response.authtoken);

            navigate("/dashboard");

        }

        catch (error) {

            alert(error.message);

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-5">

                    <div className="card p-4" style={{ backgroundColor: "#f8f9fa", maxWidth: "400px", margin: "0 auto" }}>

                        <h3 className="text-center text-success h2 mb-4">

                            Login

                        </h3>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label>Email</label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <button
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>

                        </form>

                        <p className="text-center mt-3">

                            Don't have an account? 

                            <Link to="/register">

                                <span> <u>Register</u></span>

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;