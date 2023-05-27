import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                {/* <Route path="/" element={<ProfilePage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;