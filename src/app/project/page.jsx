import React from 'react'
import ProjectInfo from '../Components/ProjectInfo'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Herohome from "../Components/Herohome";
import CarbonCredit from '../Components/CarbonCredit'
import TechnologicalInnovations from '../Components/TechnologicalInnovations';
import HomecbgProcess from '../Components/HomecbgProcess';

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Herohome />
        <CarbonCredit />
        <TechnologicalInnovations />
           <HomecbgProcess/>
        <Footer />
      </div>
    </div>
  )
}

export default page