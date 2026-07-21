import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        
        <div className="sidebar bg-white p-3">
        

            <NavLink
            to="/dashboard"
                className={({ isActive }) =>
                    `d-block mb-3 text-decoration-none ${isActive ? "fw-bold text-success" : "text-dark"}`
                }
            >
                Dashboard
            </NavLink>

            <NavLink
            to="/projects"
                className={({ isActive }) =>
                    `d-block mb-3 text-decoration-none ${isActive ? "fw-bold text-success" : "text-dark"}`
                }
            >
                Projects
            </NavLink>

            <NavLink
            to="/tasks"
                className={({ isActive }) =>
                    `d-block mb-3 text-decoration-none  ${isActive ? "fw-bold text-success" : "text-dark"}`
                }
            >
                Tasks
            </NavLink>

            <NavLink
            to="/logs"
                className={({ isActive }) =>
                    `d-block mb-3 text-decoration-none ${isActive ? "fw-bold text-success" : "text-dark"}`
                }
            >
                Logs
            </NavLink>

        </div>

    );

}

export default Sidebar;