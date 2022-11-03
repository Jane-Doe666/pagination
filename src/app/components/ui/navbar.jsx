import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Menu</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/usersListOrUser">Users</Link>
            </li>
        </ul>
    );
};

export default NavBar;
