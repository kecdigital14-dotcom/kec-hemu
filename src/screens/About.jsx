"use client";

import React from 'react'
import AboutfirstSection from '../Components/AboutfirstSection'
import Navbar from '../Components/Navbar'
import Herohome from "../Components/Herohome";
import Aboutbanner from '../Components/Aboutbanner'
import Abouttestimonials from '../Components/Abouttestimonials'
import Objectives from '../Components/Objectives'
import PioneeringPathSection from "../Components/Poineering_Paths"
import OperationKec from "../Components/OperationKec"
import AboutfifthSection from '../Components/AboutfifthSection'
import Dairy from "../Components/Dairy"
import Footer from '../Components/Footer';

const AboutScreen = () => {
  return (
    <div>
      <Navbar/>
       {/* <Aboutbanner bannertitle="About us"/> */}
       <Herohome/>
      <AboutfirstSection/>
      <Objectives/>
      <PioneeringPathSection/>
      <OperationKec/>
      <AboutfifthSection/>
      <Dairy/>
      <Abouttestimonials/>
      <Footer/>
    </div>
  )
}

export default AboutScreen