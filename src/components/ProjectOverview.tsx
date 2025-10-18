import { Database, FileCode, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProjectOverview = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-gradient-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive analysis of Instagram engagement metrics to predict post reach using machine learning techniques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in-left">
            <Database className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Data Collection</h3>
            <p className="text-muted-foreground">
              Analyzed comprehensive Instagram dataset with engagement metrics including likes, saves, comments, shares, and profile visits
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <FileCode className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Feature Engineering</h3>
            <p className="text-muted-foreground">
              Engineered advanced features including caption length, word count, hashtag count, and discovery source analysis
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <Target className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Model Development</h3>
            <p className="text-muted-foreground">
              Trained and compared Linear Regression and Random Forest models, achieving 94% accuracy in predicting reach
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Key Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Matplotlib', 'NumPy', 'Random Forest', 'Linear Regression'].map((tech, index) => (
              <div 
                key={tech}
                className="flex items-center justify-center px-4 py-3 bg-muted rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.4 + index * 0.05}s` }}
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview;
