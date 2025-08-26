"use client";

import React from 'react'
import AboutfirstSection from '../Components/AboutfirstSection'
import Navbar from '../Components/Navbar'
import Herohome from "../Components/Herohome";
import Aboutbanner from '../Components/Aboutbanner'
import Objectives from '../Components/Objectives'
import PioneeringPathSection from "../Components/Poineering_Paths"
import OperationKec from "../Components/OperationKec"
import AboutfifthSection from '../Components/AboutfifthSection'
import Dairy from "../Components/Dairy"
import Initiative from '../Components/Initiative'
import Footer from '../Components/Footer';
import Home2ndsection from '../Components/Home2ndsection';
import Homefocusareas from '../Components/Homefocusareas';
import VisionAndMission from '../Components/Visionandmission';
import Accordian from '../Components/Accordian';

const AboutScreen = () => {
  return (
    <div>
      <Navbar/>
          <Herohome/>
       {/* <Aboutbanner bannertitle="About us"/> */}
       <Home2ndsection/>
       <Homefocusareas/>
       <VisionAndMission/>
  
      <Objectives/>
      <Initiative/>
      <PioneeringPathSection/>
     
      {/* <OperationKec/> */}
  
      <Dairy/>
           <Accordian/>
      {/* <Abouttestimonials/> */}
      <Footer/>
    </div>
  )
}

export default AboutScreen