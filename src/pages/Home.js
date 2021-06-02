import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import PhysiotherapySection from "../components/PhysiotherapySection";
import MembershipSection from "../components/MembershipSection";
function Index() {
  return (
    <>
      <Header />
      <Slider />
      <AboutSection />
      <TeamSection />
      <PhysiotherapySection />
      <MembershipSection />
    </>
  );
}

export default Index;
