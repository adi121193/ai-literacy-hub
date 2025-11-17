import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ThreePillars from "@/components/ThreePillars";
import LiveDemo from "@/components/LiveDemo";
import ForEveryRole from "@/components/ForEveryRole";
import CoursesWorkshops from "@/components/CoursesWorkshops";
import Insights from "@/components/Insights";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ThreePillars />
        <LiveDemo />
        <ForEveryRole />
        <CoursesWorkshops />
        <Insights />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
