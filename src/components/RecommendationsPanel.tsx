
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const RecommendationsPanel = () => {
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState("Men's colourful pants collection");
  
  const recommendations = [
    {
      name: "Men's colourful pants collection",
      price: "£350.10",
      category: "Men's pants collection"
    },
    {
      name: "Colourful ergonomic chair",
      price: "£289.99",
      category: "Office furniture"
    },
    {
      name: "Chic elegance dining chair",
      price: "£199.50",
      category: "Dining furniture"
    },
    {
      name: "Colourful decorative vase",
      price: "£85.25",
      category: "Home decor"
    },
    {
      name: "Chic modern ceramic vase",
      price: "£120.75",
      category: "Home decor"
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    toast({
      title: "Item Selected",
      description: `${item.name} - ${item.price}`,
    });
  };

  const selectedItemData = recommendations.find(item => item.name === selectedItem) || recommendations[0];

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
                onClick={() => handleItemClick(item)}
                className={`w-full text-left justify-start border-0 h-auto py-2 px-3 whitespace-normal text-xs transition-all ${
                  selectedItem === item.name 
                    ? "bg-white/40 hover:bg-white/50 text-white" 
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-lg mb-2 flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-400 rounded"></div>
            </div>
            <div className="text-xs space-y-1 text-center">
              <p><strong>Details</strong></p>
              <p>Price: {selectedItemData.price}</p>
              <p>Category: {selectedItemData.category}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RecommendationsPanel;
