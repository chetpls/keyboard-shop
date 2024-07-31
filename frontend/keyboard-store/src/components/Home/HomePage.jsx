import React from "react";

import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Newsletter from "./Newsletter";
import Benefits from "./Benefits";

function HomePage() {
  return (
    <div className="relative">
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <Benefits></Benefits>
      <div className="relative z-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
}

export default HomePage;
