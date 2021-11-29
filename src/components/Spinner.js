import React from "react";

//CSS
import "../App.css";

// Main Function
function Spinner() {

    return (

        <div className="Spinner">

            <div className="spinner-grow text-danger" role="status">

                <span className="visually-hidden">Loading...</span>

            </div>

        </div>

    )

}

export default Spinner;