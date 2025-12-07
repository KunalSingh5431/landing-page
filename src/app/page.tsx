"use client";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import HowItWorksSection from "../components/HowItWorksSection";
import SoftwareReplacesSection from "../components/SoftwareReplacesSection";
import BuiltForEveryTeamSection from "../components/BuiltForEveryTeamSection";
import FeatureMatrixComparison from "../components/FeatureMatrixComparison";
import LowerCostSection from "../components/LowerCostSection";
import RealResultsSection from "../components/RealResultsSection";
import WhatLeadersSaySection from "../components/WhatLeadersSaySection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <SoftwareReplacesSection />
      <BuiltForEveryTeamSection />

      <div id="feature-matrix">
        <FeatureMatrixComparison />
      </div>

      <div id="lower-cost">
        <LowerCostSection />
      </div>

      <div id="real-results">
        <RealResultsSection />
      </div>

      <div id="leaders">
        <WhatLeadersSaySection />
      </div>

      <CtaSection />
      <Footer />
    </div>
  );
}
