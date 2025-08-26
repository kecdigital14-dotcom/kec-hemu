import React from 'react'
import Navbar from '../Components/Navbar'
import Herohome from "../Components/Herohome";
import Footer from '../Components/Footer'
import ProductList from '../Components/ProductList';


const ServiceScreen = () => {
  return (
    <div>
        <Navbar/>
         <Herohome/>
<ProductList/>
        <Footer/>
    </div>
  )
}

export default ServiceScreen