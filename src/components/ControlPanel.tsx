
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const ControlPanel = () => {
  return (
    <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Number of recommendations</span>
            <X className="w-4 h-4 text-gray-400" />
          </div>
          <Input type="number" value="2" className="w-full" />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Category of recommendations</span>
            <X className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              Chic collection
            </span>
          </div>
        </div>
        
        <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
          Save
        </Button>
      </div>
    </Card>
  );
};

export default ControlPanel;
