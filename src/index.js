import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import App from "./App";
import Shows from "./routes/Shows";
import ShowId from "./routes/ShowId";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="shows/:term" element={<Shows />} />
            <Route path="show/:id" element={<ShowId /> } />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);