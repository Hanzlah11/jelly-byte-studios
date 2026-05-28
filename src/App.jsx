import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GettingUnderYourNervePage from "./pages/GettingUnderYourNervePage";
// 1. IMPORT YOUR NEW PAGE HERE
import HowToPlayGettingUnderYourNerve from "./pages/HowToPlayGettingUnderYourNerve"; 

export default function App() {
  return (
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

      </Routes>

    </BrowserRouter>
  );
}