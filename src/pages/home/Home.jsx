import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../layout/home/hero/Hero'
import Releases from '../../layout/home/releases/Releases'
import About from '../../layout/home/about/About'
import HomeContact from '../../layout/home/contact/Contact'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Releases />
      <About />
      <HomeContact />
      <Footer />
    </>
  )
}

export default Home
