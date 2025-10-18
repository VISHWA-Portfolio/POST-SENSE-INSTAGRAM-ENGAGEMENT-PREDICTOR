import { TrendingUp, BarChart3, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 mb-8 animate-scale-in">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Machine Learning • Data Science Portfolio</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Instagram Reach<br />Prediction Analysis
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced machine learning model achieving <span className="text-primary font-semibold">94% accuracy</span> in predicting social media reach using Random Forest and feature engineering
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">94%</div>
              <div className="text-sm text-muted-foreground">Model Accuracy</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-8 h-8 text-secondary mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">9+</div>
              <div className="text-sm text-muted-foreground">Features Analyzed</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <Brain className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">2</div>
              <div className="text-sm text-muted-foreground">ML Models Compared</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('overview')}
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              Explore Analysis
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('models')}
              className="border-2 border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Models
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
