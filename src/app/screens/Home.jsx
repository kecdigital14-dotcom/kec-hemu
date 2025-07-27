import React from "react";
import Navbar from "../Components/Navbar";
import Herohome from "../Components/Herohome";
import Home2ndsection from "../Components/Home2ndsection";
import Home3rdsection from "../Components/Home3rdsection";
import HomecbgProcess from "../Components/HomecbgProcess";
import Accordian from "../Components/Accordian";
import Footer from "../Components/Footer";
import Abouttestimonials from "../Components/Abouttestimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herohome />
      <Home2ndsection/>
      <Home3rdsection/>
      <HomecbgProcess/>
      
      <Accordian/>
      
      <Footer/>
    </div>
  );
};

export default Home;
