import React from 'react'
import ProjectInfo from '../Components/ProjectInfo'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Aboutbanner from '../Components/Aboutbanner'

const page = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Aboutbanner bannertitle= "Our Projects"/>
        <ProjectInfo/>
        <Footer/>
      </div>
    </div>
  )
}

export default page