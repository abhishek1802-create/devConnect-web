import HeadingSection from "./HeadingSection";
import HeroSection from "./HeroSection";
import FooterSection from "./FooterSection";
import FeatureSection from "./FeatureSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <HeadingSection />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
