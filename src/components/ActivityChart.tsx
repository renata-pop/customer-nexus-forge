
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ActivityChart = () => {
  return (
    <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Badge className="bg-purple-600 text-white">Activity</Badge>
          <Badge variant="outline" className="text-gray-600">Performance</Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-600">Sends</p>
              <p className="text-3xl font-bold">859</p>
              <p className="text-xs text-gray-500">Past week</p>
            </div>
            
            <div className="flex items-end gap-1 h-16">
              {[30, 45, 35, 55, 40, 60, 50].map((height, index) => (
                <div
                  key={index}
                  className="w-3 bg-purple-400 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivityChart;
