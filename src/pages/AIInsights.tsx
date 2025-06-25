
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

const AIInsights = () => {
  const insights = [
    {
      type: "Prediction",
      title: "Customer Churn Alert",
      description: "15 customers show high probability of churning in the next 30 days",
      confidence: "87%",
      action: "Review engagement strategies",
      icon: Target,
      priority: "high"
    },
    {
      type: "Opportunity",
      title: "Upselling Potential",
      description: "342 customers are likely to purchase premium products",
      confidence: "72%",
      action: "Launch targeted campaign",
      icon: TrendingUp,
      priority: "medium"
    },
    {
      type: "Trend",
      title: "Seasonal Pattern Detected",
      description: "Home decor items show 40% increase during Q4",
      confidence: "95%",
      action: "Prepare inventory",
      icon: Zap,
      priority: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Insights</h1>
            <p className="text-gray-600 mt-2">Artificial intelligence predictions and recommendations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Predictive Models</h3>
            <p className="text-gray-600 text-sm">Advanced algorithms analyze customer behavior patterns</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-purple-600">12</span>
              <p className="text-sm text-gray-500">Active Models</p>
            </div>
          </Card>

          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accuracy Rate</h3>
            <p className="text-gray-600 text-sm">Model prediction accuracy over the last 30 days</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-600">89.2%</span>
              <p className="text-sm text-gray-500">Avg. Accuracy</p>
            </div>
          </Card>

          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
            <p className="text-gray-600 text-sm">AI-generated actionable insights this week</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-orange-600">24</span>
              <p className="text-sm text-gray-500">New Insights</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
          <h3 className="text-lg font-semibold mb-6">Recent AI Insights</h3>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    insight.priority === "high" ? "bg-red-100" :
                    insight.priority === "medium" ? "bg-yellow-100" : "bg-blue-100"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      insight.priority === "high" ? "text-red-600" :
                      insight.priority === "medium" ? "text-yellow-600" : "text-blue-600"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">{insight.type}</Badge>
                        <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{insight.description}</p>
                        <p className="text-purple-600 text-sm mt-2 font-medium">{insight.action}</p>
                      </div>
                      
                      <div className="text-right">
                        <Badge className="bg-purple-100 text-purple-700 mb-2">
                          {insight.confidence} confidence
                        </Badge>
                        <br />
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIInsights;
