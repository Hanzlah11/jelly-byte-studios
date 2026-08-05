import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GettingUnderYourNervePage from "./pages/GettingUnderYourNervePage";
import HowToPlayGettingUnderYourNerve from "./pages/HowToPlayGettingUnderYourNerve";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

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

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}