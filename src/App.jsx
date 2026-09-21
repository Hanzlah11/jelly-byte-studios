import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ReleasesPage from './pages/releases/ReleasesPage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Profile from './pages/profile/Profile'
import TermsOfServices from './pages/Terms-of-Services/TermsOfServices'
import PrivacyPolicy from './pages/Privacy-Policy/PrivacyPolicy'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/releases" element={<ReleasesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/terms-of-services" element={<TermsOfServices />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
