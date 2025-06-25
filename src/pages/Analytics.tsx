
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";

const Analytics = () => {
  const metrics = [
    { title: "Total Customers", value: "2,547", change: "+12%", trend: "up" },
    { title: "Revenue", value: "$127,450", change: "+8%", trend: "up" },
    { title: "Churn Rate", value: "3.2%", change: "-0.5%", trend: "down" },
    { title: "Avg. Order Value", value: "$89.50", change: "+15%", trend: "up" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Track performance and customer behavior insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 bg-white rounded-2xl shadow-lg border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
            <h3 className="text-lg font-semibold mb-4">Customer Segmentation</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                  <span>VIP Customers</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">15%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-400 rounded"></div>
                  <span>High Value</span>
                </div>
                <Badge className="bg-green-100 text-green-800">32%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span>Growing</span>
                </div>
                <Badge className="bg-blue-100 text-blue-800">38%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-400 rounded"></div>
                  <span>At Risk</span>
                </div>
                <Badge className="bg-red-100 text-red-800">15%</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
            <h3 className="text-lg font-semibold mb-4">Top Products</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Men's Colorful Pants</span>
                <span className="font-semibold">124 sales</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Chic Elegance Chair</span>
                <span className="font-semibold">98 sales</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Colorful Vase</span>
                <span className="font-semibold">87 sales</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Women's Chic Shoes</span>
                <span className="font-semibold">76 sales</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
