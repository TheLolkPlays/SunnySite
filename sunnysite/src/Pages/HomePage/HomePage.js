import React from 'react'
import { SunnyjpgURL } from '../../Universalcomponents/UniversalVariables'
import Navbar from '../../Universalcomponents/Navbar/Navbar'

import Header from './Header'
import About from './About'
import MySkills from './MySkills'


import ProjectsOverview from './Projects/ProjectsOverview'
import Prices from './Prices/Prices'



export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='w3-padding-large ' id="main">

        <Header />
        <About />
        <MySkills />
        <Prices />


      </div ></div>
  )
}