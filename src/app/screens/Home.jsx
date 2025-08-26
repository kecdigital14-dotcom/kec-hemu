import React from "react";
import Navbar from "../Components/Navbar";
import Herohome from "../Components/Herohome";
import Home2ndsection from "../Components/Home2ndsection";
import Home3rdsection from "../Components/Home3rdsection";
import HomecbgProcess from "../Components/HomecbgProcess";
import Accordian from "../Components/Accordian";
import Footer from "../Components/Footer";
import Abouttestimonials from "../Components/Abouttestimonials";
import HistoryandImp from "../Components/HistoryandImp";
import Homefocusareas from "../Components/Homefocusareas";
import VisionAndMission from "../Components/Visionandmission";
import HemuServices from "../Components/HemuServices";
import DairyDevelopment from "../Components/DairyDevelopment";
import Biogasdistri from "../Components/Biogasdistri";
import ChallengesFaced from "../Components/ChallengesFaced";
import TechnologicalInnovations from "../Components/TechnologicalInnovations";
import AreaofBusiness from "../Components/AreaofBusiness";
import ObjectivesofHemu from "../Components/ObjectivesofHemu";
import WhatNext from "../Components/WhatNext";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herohome />
      <Home2ndsection />
      <HistoryandImp />
      <Homefocusareas />
      <Biogasdistri />
      <ChallengesFaced />
      <ObjectivesofHemu />
      <WhatNext />
      <Footer />
    </div>
  );
};

export default Home;
