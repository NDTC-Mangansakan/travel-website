import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Testimonials from './pages/Testimonials'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './pages/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Destination/>
      <Testimonials/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App