import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "../App.css";

// Main Function
function Search() {

    /////////////////////////////////////////// STATE
    const [searchTerm, setsearchTerm] = useState("");

    /////////////////////////////////////////// HANDLERS
    function onInputChange(event) {

        if (event.target.name === "SearchField") {

            setsearchTerm(event.target.value);

        } else {

            console.log(event);

        }

    }

    /////////////////////////////////////////// RENDER
    return (

        <div className="Search">

            <form>

                <div className="input-group">

                    <input type="text" name="SearchField" placeholder="Search..." className="form-control" onChange={onInputChange} value={searchTerm} />

                    <div className="input-group-append">
                        <Link to={`/shows/${searchTerm}`}><button type="submit" className="input-group-text"><i className="bi bi-search"></i></button></Link>
                    </div>

                </div>

            </form>

        </div>

    )

}

export default Search;