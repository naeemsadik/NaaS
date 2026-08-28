import HeroSection from "@/components/sections/HeroSection";
import WhatIsNaas from "@/components/sections/WhatIsNaas";
import NaeemApi from "@/components/sections/NaeemApi";
import PricingPlans from "@/components/sections/PricingPlans";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import PersonalityDashboard from "@/components/sections/PersonalityDashboard";
import DeployNaeemForm from "@/components/sections/DeployNaeemForm";
import NaeemUptime from "@/components/sections/NaeemUptime";
import Testimonials from "@/components/sections/Testimonials";
import Changelog from "@/components/sections/Changelog";
import CompatibilityQuiz from "@/components/sections/CompatibilityQuiz";
import TechStack from "@/components/sections/TechStack";
import Documentation from "@/components/sections/Documentation";
import MeetInfrastructure from "@/components/sections/MeetInfrastructure";
import StatusPage from "@/components/sections/StatusPage";
import FinalCta from "@/components/sections/FinalCta";
import GirlsOnlyGate from "@/components/ui/GirlsOnlyGate";

export default function Home() {
  return (
    <>
      <GirlsOnlyGate />
      <main>
        <HeroSection />
        <WhatIsNaas />
        <NaeemApi />
        <PricingPlans />
        <FeaturesGrid />
        <PersonalityDashboard />
        <DeployNaeemForm />
        <NaeemUptime />
        <Testimonials />
        <Changelog />
        <CompatibilityQuiz />
        <TechStack />
        <Documentation />
        <MeetInfrastructure />
        <StatusPage />
        <FinalCta />
      </main>
    </>
  );
}

