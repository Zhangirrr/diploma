import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage";
import DestinationPage from "./pages/DestinationPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import AboutPage from "./pages/AboutPage";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/destination" element={<DestinationPage />} />
                <Route path="/authorization" component={AuthorizationPage} />
                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/" element={<ProfilePage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;