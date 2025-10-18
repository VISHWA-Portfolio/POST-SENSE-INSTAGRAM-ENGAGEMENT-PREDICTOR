import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeatureImportance = () => {
  const features = [
    { name: "Likes", importance: 0.42, percentage: "42%", rank: 1, color: "bg-primary" },
    { name: "Profile Visits", importance: 0.18, percentage: "18%", rank: 2, color: "bg-secondary" },
    { name: "Saves", importance: 0.15, percentage: "15%", rank: 3, color: "bg-accent" },
    { name: "Comments", importance: 0.10, percentage: "10%", rank: 4, color: "bg-success" },
    { name: "Follows", importance: 0.08, percentage: "8%", rank: 5, color: "bg-primary/70" },
    { name: "Shares", importance: 0.04, percentage: "4%", rank: 6, color: "bg-secondary/70" },
    { name: "Hashtag Count", importance: 0.02, percentage: "2%", rank: 7, color: "bg-accent/70" },
    { name: "Caption Length", importance: 0.01, percentage: "1%", rank: 8, color: "bg-muted" },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Importance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding which metrics have the greatest impact on predicting Instagram reach
          </p>
        </div>

        <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group animate-fade-in-left"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">#{feature.rank}</Badge>
                    <span className="font-semibold text-lg">{feature.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{feature.percentage}</span>
                </div>
                
                <div className="relative h-8 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`absolute inset-y-0 left-0 ${feature.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                    style={{ 
                      width: feature.percentage,
                      animation: 'fade-in-right 1s ease-out'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-start px-4">
                    <span className="text-sm font-medium text-foreground/80">
                      Importance Score: {feature.importance.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 bg-gradient-accent border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-bold text-xl mb-3 text-primary">Top Priority</h4>
            <p className="text-muted-foreground">
              <strong>Likes</strong> are the single most important predictor of reach, accounting for 42% of the model's prediction power
            </p>
          </Card>

          <Card className="p-6 bg-gradient-accent border-secondary/30 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h4 className="font-bold text-xl mb-3 text-secondary">Secondary Factors</h4>
            <p className="text-muted-foreground">
              <strong>Profile visits and saves</strong> combined contribute 33% to reach prediction, indicating quality engagement matters
            </p>
          </Card>

          <Card className="p-6 bg-gradient-accent border-accent/30 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="font-bold text-xl mb-3 text-accent">Surprising Insight</h4>
            <p className="text-muted-foreground">
              <strong>Caption length</strong> showed minimal impact on reach, suggesting content quality matters more than quantity
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureImportance;
