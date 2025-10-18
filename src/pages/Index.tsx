import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import KeyInsights from "@/components/KeyInsights";
import ModelPerformance from "@/components/ModelPerformance";
import FeatureImportance from "@/components/FeatureImportance";
import PredictionResults from "@/components/PredictionResults";
import TechnicalStack from "@/components/TechnicalStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectOverview />
      <KeyInsights />
      <ModelPerformance />
      <FeatureImportance />
      <PredictionResults />
      <TechnicalStack />
      <Footer />
    </div>
  );
};

export default Index;
