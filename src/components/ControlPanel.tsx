
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, RefreshCw, Zap, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ControlPanel = () => {
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast({
      title: "Refreshing Data",
      description: "Updating all customer insights...",
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Data Updated",
        description: "All customer insights have been refreshed successfully.",
      });
    }, 2000);
  };

  const handleOptimize = () => {
    toast({
      title: "AI Optimization Started",
      description: "Running advanced algorithms to optimize customer targeting...",
    });
  };

  const handleAnalyze = () => {
    toast({
      title: "Analysis Complete",
      description: "New trends detected in customer behavior patterns.",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Configuration panel would open here.",
    });
  };

  return (
    <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Settings className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold">Control Panel</h3>
      </div>
      
      <div className="space-y-3">
        <Button 
          onClick={handleRefresh} 
          disabled={isRefreshing}
          className="w-full justify-start gap-3 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
          variant="outline"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? "Refreshing..." : "Refresh Data"}
        </Button>
        
        <Button 
          onClick={handleOptimize}
          className="w-full justify-start gap-3 bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200"
          variant="outline"
        >
          <Zap className="w-4 h-4" />
          AI Optimize
        </Button>
        
        <Button 
          onClick={handleAnalyze}
          className="w-full justify-start gap-3 bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
          variant="outline"
        >
          <TrendingUp className="w-4 h-4" />
          Analyze Trends
        </Button>
        
        <Button 
          onClick={handleSettings}
          className="w-full justify-start gap-3 bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
          variant="outline"
        >
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>
    </Card>
  );
};

export default ControlPanel;
