import React from 'react'
import Navbar from '../Components/Navbar'
import Herohome from "../Components/Herohome";
import Aboutbanner from '../Components/Aboutbanner'
import Footer from '../Components/Footer'
import IncentiveFarmer from '../Components/IncentiveFarmer';
import VeterinaryServices from '../Components/VeterinaryServices';


const ServiceScreen = () => {
    return (
        <div>
            <Navbar />
            <Aboutbanner bannertitle="Social Responsibility"
                bannerImage="/allpagesbanner.png"
            />
            <IncentiveFarmer />
            <VeterinaryServices />
            <Footer />
        </div>
    )
}

export default ServiceScreen