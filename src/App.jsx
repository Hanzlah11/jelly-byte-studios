import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GettingUnderYourNervePage from "./pages/GettingUnderYourNervePage";
import HowToPlayGettingUnderYourNerve from "./pages/HowToPlayGettingUnderYourNerve";
import LoginPage from "./pages/LoginPage";
import { PrivacyPolicy, TermsAndConditions } from "./pages/HomePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* ABOUT PAGE */}
          <Route
            path="/about"
            element={<AboutPage />}
          />

          {/* GAME PAGE */}
          <Route
            path="/games/getting-under-your-nerve"
            element={<GettingUnderYourNervePage />}
          />

          {/* HOW TO PLAY PAGE */}
          <Route
            path="/howtoplaygettingunderyournerve"
            element={<HowToPlayGettingUnderYourNerve />}
          />

          {/* LOGIN PAGE */}
          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}