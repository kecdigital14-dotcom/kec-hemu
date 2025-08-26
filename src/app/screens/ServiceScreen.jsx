import React from 'react'
import Navbar from '../Components/Navbar'
import HemuServices from '../Components/HemuServices'
import Herohome from "../Components/Herohome";
import Footer from '../Components/Footer'
import DairyDevelopment from '../Components/DairyDevelopment';
import Home3rdSection from '../Components/Home3rdsection';
import AreaofBusiness from '../Components/AreaofBusiness';
import AboutfifthSection from '../Components/AboutfifthSection';

const ServiceScreen = () => {
  return (
    <div>
        <Navbar/>
         <Herohome/>
        <HemuServices/>
        <AreaofBusiness/>
        <DairyDevelopment/>
         <Home3rdSection/>
             <AboutfifthSection/>
        <Footer/>
    </div>
  )
}

export default ServiceScreen