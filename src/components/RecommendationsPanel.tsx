
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RecommendationsPanel = () => {
  const recommendations = [
    "Men's colourful pants collection",
    "Colourful ergonomic chair",
    "Chic elegance dining chair",
    "Colourful decorative vase",
    "Chic modern ceramic vase"
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Recommended items</h3>
      
      <Card className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            {recommendations.map((item, index) => (
              <Button
                key={index}
                variant="secondary"
                size="sm"
                className="w-full text-left justify-start bg-white/20 hover:bg-white/30 text-white border-0 h-auto py-2 px-3 whitespace-normal text-xs"
              >
                {item}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-lg mb-2 flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-400 rounded"></div>
            </div>
            <div className="text-xs space-y-1 text-center">
              <p><strong>Details</strong></p>
              <p>Price: £350.10</p>
              <p>Category: Men's pants collection</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RecommendationsPanel;
