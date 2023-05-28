import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage";
import DestinationPage from "./pages/DestinationPage/DestinationPage";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<MainPage />} /> */}
                <Route path="/" element={<DestinationPage />} />
                {/* <Route path="/" element={<ProfilePage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;