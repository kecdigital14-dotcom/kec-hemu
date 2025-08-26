import React from 'react'
import Navbar from '../Components/Navbar'
import Herohome from "../Components/Herohome";
import Footer from '../Components/Footer'
import IncentiveFarmer from '../Components/IncentiveFarmer';
import VeterinaryServices from '../Components/VeterinaryServices';


const ServiceScreen = () => {
    return (
        <div>
            <Navbar />
            <Herohome />
            <IncentiveFarmer />
            <VeterinaryServices/>
            <Footer/>
        </div>
    )
}

export default ServiceScreen