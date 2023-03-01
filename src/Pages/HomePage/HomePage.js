import React from 'react'
import { SunnyjpgURL } from '../../Universalcomponents/UniversalVariables'
import Navbar from '../../Universalcomponents/Navbar/Navbar'

import Header from './Header'
import About from './About'
import MySkills from './MySkills'
import References from './References/References'
import Portfolio from './Portfolio/Portfolio.js'
import ProjectsOverview from './Projects/ProjectsOverview'
import Prices from './Prices/Prices'
import Gallery from './Portfolio/Portfolio.js'
import ContactForm from './ContactPage/ContactForm'




export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='w3-padding-large ' id="main">

        <Header />
        <About />
        <MySkills />
        <Prices />
        <References />
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <Gallery />
        <div id="contact" className="w3-content">
          <ContactForm />
        </div>
      </div ></div>
  )
}