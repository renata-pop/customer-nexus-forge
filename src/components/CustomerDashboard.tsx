
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfileSection from "./ProfileSection";
import RecommendationsPanel from "./RecommendationsPanel";
import ActivityChart from "./ActivityChart";
import ControlPanel from "./ControlPanel";
import NewsletterSection from "./NewsletterSection";

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Predict the next step in your customers journey with AI
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Enhance customer profiles with AI-driven recommendations, such as predicting behaviour, 
              enabling customer service and marketing to provide truly personalised 1:1 interactions.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Request a demo →
            </Button>
          </div>
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0 text-center">
            <h3 className="text-xl font-semibold mb-3">Self-learning AI</h3>
            <p className="text-gray-600">
              Connect existing data sources and allow the AI to learn from the start and continuously with every interaction.
            </p>
          </Card>
          
          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0 text-center">
            <h3 className="text-xl font-semibold mb-3">Control your AI</h3>
            <p className="text-gray-600">
              Fuel the algorithms with your own business specific context and adjust when necessary to ensure accurate, relevant predictions.
            </p>
          </Card>
          
          <Card className="p-6 bg-white rounded-2xl shadow-lg border-0 text-center">
            <h3 className="text-xl font-semibold mb-3">No black box</h3>
            <p className="text-gray-600">
              Gain transparency and view insights into why certain AI-driven recommendations have been suggested.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
