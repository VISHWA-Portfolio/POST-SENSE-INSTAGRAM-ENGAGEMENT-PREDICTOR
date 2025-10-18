import { Code2, Braces, Database, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const TechnicalStack = () => {
  const technologies = [
    {
      category: "Data Processing",
      icon: Database,
      color: "text-primary",
      bgColor: "bg-primary/10",
      tools: [
        { name: "Pandas", description: "Data manipulation and analysis" },
        { name: "NumPy", description: "Numerical computing" },
        { name: "Label Encoding", description: "Categorical data transformation" }
      ]
    },
    {
      category: "Machine Learning",
      icon: Braces,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      tools: [
        { name: "Scikit-learn", description: "ML algorithm implementation" },
        { name: "Random Forest", description: "Ensemble learning method" },
        { name: "Linear Regression", description: "Statistical modeling" }
      ]
    },
    {
      category: "Data Visualization",
      icon: LineChart,
      color: "text-accent",
      bgColor: "bg-accent/10",
      tools: [
        { name: "Matplotlib", description: "Static plot generation" },
        { name: "Seaborn", description: "Statistical visualizations" },
        { name: "Pyplot", description: "Interactive plotting" }
      ]
    },
    {
      category: "Development",
      icon: Code2,
      color: "text-success",
      bgColor: "bg-success/10",
      tools: [
        { name: "Python 3.x", description: "Core programming language" },
        { name: "Jupyter Notebook", description: "Interactive development" },
        { name: "Git", description: "Version control" }
      ]
    }
  ];

  return (
    <section id="technical" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-standard tools and frameworks powering this analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${tech.bgColor}`}>
                    <Icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{tech.category}</h3>
                </div>

                <div className="space-y-4">
                  {tech.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <div className="font-semibold mb-1">{tool.name}</div>
                        <div className="text-sm text-muted-foreground">{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Methodology Card */}
        <Card className="mt-12 p-8 bg-gradient-accent border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Analysis Methodology</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Data Collection", desc: "Imported and cleaned Instagram dataset" },
              { step: "2", title: "Preprocessing", desc: "Engineered features and encoded variables" },
              { step: "3", title: "Model Training", desc: "Trained multiple ML algorithms" },
              { step: "4", title: "Evaluation", desc: "Validated predictions and metrics" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalStack;
