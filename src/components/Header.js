import React from "react";
import { Link } from "react-router-dom";

//CSS
import "../App.css";

// Main Function
function Header() {

    /////////////////////////////////////////// RENDER
    return (

        <Link className="header-link" to="/">

            <div className="Header bg-white p-3 shadow">

                <h1>tvBook</h1>

                <p className="m-0">{`{ find your favorite show }`}</p>

            </div>

        </Link>


    )
}

export default Header;