import React from "react";
import Navbar from "../Components/Navbar";
import ContactInfo from '../Components/ContactInfo'
import Footer from "../Components/Footer";
import Herohome from "../Components/Herohome";
import Accordian from '../Components/Accordian';
import Aboutbanner from "../Components/Aboutbanner";

const Contact = () => {
  return (
    <div>
      <Navbar />
    <Aboutbanner bannertitle="Contact Us"
                bannerImage="/allpagesbanner.png"
            />
   <ContactInfo />
   <Accordian/>
      <Footer/>
    </div>
  );
};

export default Contact;
