import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import GettingUnderYourNervePage from "./pages/GettingUnderYourNervePage";
// 1. IMPORT YOUR NEW PAGE HERE
import HowToPlayGettingUnderYourNerve from "./pages/HowToPlayGettingUnderYourNerve"; 
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          {/* MAIN WEBSITE */}
          <Route path="/" element={<HomePage />} />

          {/* GAME PAGE */}
          <Route
            path="/games/getting-under-your-nerve"
            element={<GettingUnderYourNervePage />}
          />

          {/* 2. ADD THE NEW ROUTE HERE */}
          <Route
            path="/howtoplaygettingunderyournerve"
            element={<HowToPlayGettingUnderYourNerve />}
          />

          {/* LOGIN PAGE */}
          <Route path="/login" element={<LoginPage />} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}