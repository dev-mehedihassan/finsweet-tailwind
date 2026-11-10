import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/homepage/Banner'
import Features from '../../components/pages/homepage/Features'
import Footer from '../../components/layouts/Footer'

const HomeIndex = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Features />
        <Footer />
    </>
  )
}

export default HomeIndex