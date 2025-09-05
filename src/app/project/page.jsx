import React from 'react'
import ProjectInfo from '../Components/ProjectInfo'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Herohome from "../Components/Herohome";
import Aboutbanner from '../Components/Aboutbanner'
import CarbonCredit from '../Components/CarbonCredit'
import TechnologicalInnovations from '../Components/TechnologicalInnovations';
import HomecbgProcess from '../Components/HomecbgProcess';
import HemuHeroSection from '../Components/SustainableBioFuelHero';

const page = () => {
  return (
    <div>
        <Navbar />
        <Aboutbanner bannertitle="Our Projects" 
                 bannerImage="/allpagesbanner.png" 
               />
        <HemuHeroSection/>
        <CarbonCredit />
        <TechnologicalInnovations />
           <HomecbgProcess/>
        <Footer />
    </div>
  )
}

export default page