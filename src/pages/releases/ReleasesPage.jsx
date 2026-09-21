import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../layout/releases/hero/Hero'
import AboutGame from '../../layout/releases/about-game/AboutGame'
import Trailer from '../../layout/releases/trailer/Trailer'
import ReviewsForm from '../../layout/releases/reviews-form/ReviewsForm'
import Footer from '../../components/footer/Footer'

const ReleasesPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutGame />
      <Trailer />
      <ReviewsForm />
      <Footer />
    </>
  )
}

export default ReleasesPage
