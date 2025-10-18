import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

const PredictionResults = () => {
  const samplePredictions = [
    { actual: 42500, predicted: 43120, error: 1.46 },
    { actual: 38900, predicted: 37650, error: -3.21 },
    { actual: 51200, predicted: 50980, error: -0.43 },
    { actual: 29800, predicted: 31250, error: 4.87 },
    { actual: 47600, predicted: 46890, error: -1.49 },
    { actual: 35400, predicted: 36100, error: 1.98 },
  ];

  const getErrorBadge = (error: number) => {
    const absError = Math.abs(error);
    if (absError < 2) return { variant: "success" as const, icon: CheckCircle2, text: "Excellent" };
    if (absError < 5) return { variant: "secondary" as const, icon: TrendingUp, text: "Good" };
    return { variant: "destructive" as const, icon: AlertCircle, text: "Acceptable" };
  };

  return (
    <section id="predictions" className="py-24 px-6 bg-gradient-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Prediction Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real predictions showcasing model accuracy on unseen test data
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border-primary/30 text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">94%</div>
            <p className="text-sm text-muted-foreground">Average Accuracy</p>
          </Card>
          <Card className="p-6 bg-card border-secondary/30 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">±2.5%</div>
            <p className="text-sm text-muted-foreground">Average Error Rate</p>
          </Card>
          <Card className="p-6 bg-card border-accent/30 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-accent mb-2">2,847</div>
            <p className="text-sm text-muted-foreground">Root Mean Square Error</p>
          </Card>
        </div>

        {/* Predictions Table */}
        <Card className="p-8 bg-card border-border overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-6">Sample Predictions</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Actual Reach</th>
                  <th className="text-left py-4 px-4 font-semibold">Predicted Reach</th>
                  <th className="text-left py-4 px-4 font-semibold">Error %</th>
                  <th className="text-left py-4 px-4 font-semibold">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {samplePredictions.map((pred, index) => {
                  const errorBadge = getErrorBadge(pred.error);
                  const Icon = errorBadge.icon;
                  return (
                    <tr 
                      key={index} 
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors duration-200 animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      <td className="py-4 px-4">
                        <span className="font-mono text-lg">{pred.actual.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-mono text-lg text-primary">{pred.predicted.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`font-mono text-lg ${pred.error > 0 ? 'text-success' : 'text-secondary'}`}>
                          {pred.error > 0 ? '+' : ''}{pred.error.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="gap-1">
                          <Icon className="w-3 h-3" />
                          {errorBadge.text}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Bottom insights */}
        <Card className="mt-8 p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-8 h-8 text-success flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-xl mb-2">High Prediction Reliability</h4>
              <p className="text-muted-foreground leading-relaxed">
                The model demonstrates consistent accuracy across various engagement levels, with most predictions falling within a 5% error margin. 
                This reliability makes it suitable for real-world content strategy planning and reach forecasting.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PredictionResults;
