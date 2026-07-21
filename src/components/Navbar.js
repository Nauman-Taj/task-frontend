import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <nav className="navbar navbar-dark px-4" style={{ backgroundColor: "#20c997" }}>

            <span className="navbar-brand mb-0">

                Task Management System

            </span>

            <button
                className="btn btn-light btn-sm"
                onClick={logout}
            >
                Logout
            </button>

        </nav>

    );

}

export default Navbar;