import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../layout/about/hero/Hero'
import Details from '../../layout/about/details/Details'
import VisionMission from '../../layout/about/vision-mission/VisionMission'
import Squad from '../../layout/about/squad/Squad'
import Values from '../../layout/about/values/Values'
import Quote from '../../layout/about/quote/Quote'
import Footer from '../../components/footer/Footer'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <VisionMission />
      <Squad />
      <Values />
      <Quote />
      <Footer />
    </>
  )
}

export default AboutPage
