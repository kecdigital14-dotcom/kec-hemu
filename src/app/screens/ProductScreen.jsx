import React from 'react'
import Navbar from '../Components/Navbar'
import Herohome from "../Components/Herohome";
import Aboutbanner from '../Components/Aboutbanner'
import Footer from '../Components/Footer'
import ProductList from '../Components/ProductList';


const ServiceScreen = () => {
  return (
    <div>
      <Navbar />
      <Aboutbanner bannertitle="About us"
        bannerImage="/Shopnowpagebanner.png"
      />
      <ProductList />
      <Footer />
    </div>
  )
}

export default ServiceScreen