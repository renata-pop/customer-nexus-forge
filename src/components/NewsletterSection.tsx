
import { Card } from "@/components/ui/card";

const NewsletterSection = () => {
  return (
    <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
      <div className="space-y-4">
        <h3 className="font-semibold text-purple-600">Personalised newsletter</h3>
        
        <div className="bg-purple-50 p-4 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium">1. Chic women's shoes</p>
              <p className="text-xs text-gray-600">Women</p>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded"></div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium">2. Chic women's top</p>
              <p className="text-xs text-gray-600">Women</p>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded"></div>
          </div>
          
          <div className="text-right">
            <div className="inline-flex gap-2 text-xs">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Item ID</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">Section</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewsletterSection;
