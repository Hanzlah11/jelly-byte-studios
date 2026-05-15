import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GettingUnderYourNervePage from "./pages/GettingUnderYourNervePage";

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

      </Routes>

    </BrowserRouter>
  );
}