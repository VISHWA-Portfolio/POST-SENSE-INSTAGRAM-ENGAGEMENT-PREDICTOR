import { TrendingUp, Hash, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const KeyInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Engagement Drives Reach",
      description: "Likes and saves showed the strongest correlation with impressions, indicating that high-quality, saveable content significantly boosts organic reach",
      impact: "High Impact",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Hash,
      title: "Hashtag Strategy Matters",
      description: "Posts discovered through hashtags performed better than explore-driven posts, suggesting strategic hashtag use is crucial for visibility",
      impact: "Medium Impact",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Eye,
      title: "Profile Visits Indicator",
      description: "Strong positive correlation between profile visits and impressions reveals that engaging content drives audience interest beyond single posts",
      impact: "High Impact",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Heart,
      title: "Content Type Performance",
      description: "Analysis revealed certain content categories consistently outperform others, with topic-specific engagement patterns clearly visible in the data",
      impact: "Medium Impact",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section id="insights" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven discoveries that reveal what truly impacts Instagram reach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${insight.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-semibold">{insight.title}</h3>
                      <Badge variant="outline" className={`${insight.color} border-current`}>
                        {insight.impact}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Discovery Source Visualization */}
        <Card className="mt-12 p-8 bg-gradient-accent border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Primary Discovery Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { source: 'From Home', percentage: '35%', color: 'bg-primary' },
              { source: 'From Hashtags', percentage: '30%', color: 'bg-secondary' },
              { source: 'From Explore', percentage: '25%', color: 'bg-accent' },
              { source: 'From Other', percentage: '10%', color: 'bg-success' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-full h-32 ${item.color} rounded-xl mb-4 flex items-center justify-center text-3xl font-bold hover:scale-105 transition-transform duration-300`}>
                  {item.percentage}
                </div>
                <p className="text-sm font-medium">{item.source}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default KeyInsights;
