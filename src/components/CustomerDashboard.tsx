
import { Card } from "@/components/ui/card";
import ProfileSection from "./ProfileSection";
import RecommendationsPanel from "./RecommendationsPanel";
import ActivityChart from "./ActivityChart";
import ControlPanel from "./ControlPanel";
import NewsletterSection from "./NewsletterSection";
import Navigation from "./Navigation";

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Customer Intelligence Dashboard
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Real-time insights and AI-powered predictions for your customer journey optimization.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Predictions Panel */}
          <Card className="p-6 bg-white rounded-2xl shadow-xl border-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <h2 className="text-xl font-semibold">AI Predictions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileSection />
              <RecommendationsPanel />
            </div>
          </Card>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActivityChart />
          <ControlPanel />
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
