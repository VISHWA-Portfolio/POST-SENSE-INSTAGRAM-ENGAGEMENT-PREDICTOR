import { CheckCircle2, TrendingUp, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModelPerformance = () => {
  const models = [
    {
      name: "Random Forest Regressor",
      accuracy: "94%",
      rmse: "2,847",
      description: "Ensemble learning method using 150 decision trees with random state optimization",
      advantages: [
        "Handles non-linear relationships excellently",
        "Robust to outliers and overfitting",
        "Provides feature importance metrics"
      ],
      isWinner: true
    },
    {
      name: "Linear Regression",
      accuracy: "87%",
      rmse: "4,321",
      description: "Baseline statistical model for establishing linear relationships between features",
      advantages: [
        "Fast training and prediction times",
        "Interpretable coefficients",
        "Good baseline performance"
      ],
      isWinner: false
    }
  ];

  return (
    <section id="models" className="py-24 px-6 bg-gradient-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Model Performance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive comparison of machine learning algorithms for reach prediction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {models.map((model, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card border-2 transition-all duration-300 hover:scale-105 hover:shadow-elevated animate-fade-in ${
                model.isWinner ? 'border-primary shadow-glow' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {model.isWinner && (
                <Badge className="mb-4 bg-gradient-primary text-white">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Best Model
                </Badge>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
              <p className="text-muted-foreground mb-6">{model.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-4 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary mb-2" />
                  <div className="text-3xl font-bold mb-1">{model.accuracy}</div>
                  <div className="text-sm text-muted-foreground">R² Score</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <BarChart className="w-6 h-6 text-secondary mb-2" />
                  <div className="text-3xl font-bold mb-1">{model.rmse}</div>
                  <div className="text-sm text-muted-foreground">RMSE</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Advantages:</h4>
                <ul className="space-y-2">
                  {model.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Performance Metrics Summary */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Why Random Forest Won</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7%</div>
              <p className="text-sm text-muted-foreground">Better Accuracy than Linear Regression</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">34%</div>
              <p className="text-sm text-muted-foreground">Lower RMSE Error Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Feature Importance Analysis</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ModelPerformance;
