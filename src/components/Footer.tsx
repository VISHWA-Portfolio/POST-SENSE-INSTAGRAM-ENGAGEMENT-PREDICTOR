import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 bg-gradient-accent border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Instagram Reach Analysis
            </h3>
            <p className="text-muted-foreground mb-4">
              A comprehensive machine learning project demonstrating advanced data analysis, feature engineering, and predictive modeling capabilities.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="hover:bg-primary/20 transition-all duration-300">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary/20 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Navigation</h4>
            <ul className="space-y-2">
              {['overview', 'insights', 'models', 'features', 'predictions', 'technical'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Stats */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Project Highlights</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">94% prediction accuracy achieved</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <span className="text-muted-foreground">9+ features engineered and analyzed</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <span className="text-muted-foreground">Multiple ML algorithms compared</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-success mt-2" />
                <span className="text-muted-foreground">Comprehensive EDA performed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Data Science Portfolio. Built with Python, Scikit-learn, and Passion.
          </p>
          <Button 
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="gap-2 hover:bg-primary/20 transition-all duration-300"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
