import React from "react";
import Navbar from "../Components/Navbar";
import ContactInfo from '../Components/ContactInfo'
import Footer from "../Components/Footer";
import Herohome from "../Components/Herohome";
import Aboutbanner from "../Components/Aboutbanner";

const Contact = () => {
  return (
    <div>
      <Navbar />
     <Aboutbanner bannertitle="About us" 
                bannerImage="/Contactuspagebanne.jpeg" 
               />
   <ContactInfo />
      <Footer/>
    </div>
  );
};

export default Contact;
