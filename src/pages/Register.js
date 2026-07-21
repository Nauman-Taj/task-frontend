import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "",

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await register(user);

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

                        <h3 className="text-center text-success mb-4">

                            Register

                        </h3>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label>Name</label>

                                <input
                                    className="form-control"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Email</label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={user.email}
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
                                    value={user.password}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <button
                                className="btn btn-primary w-100"
                            >
                                Register
                            </button>

                        </form>

                        <p className="text-center mt-3">

                            Already have an account?

                            <Link to="/">

                                <span> <u>Login</u></span>

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;