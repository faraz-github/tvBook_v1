import React from "react";

//Components
import Header from "./components/Header";
import Search from "./components/Search";

//CSS
import "./App.css";

// Main Function
function App() {

    /////////////////////////////////////////// RENDER
    return (

        <div className="App container">

            <Header />

            <div className="app-wrapper">
            
                <div className="homepage-search">
                    <div className="tv-art">
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-8 col-10 p-1">
                        <Search />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default App;