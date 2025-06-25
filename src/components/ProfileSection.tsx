
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ProfileSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg" alt="Sandor Jess" />
          <AvatarFallback className="bg-purple-100 text-purple-600">SJ</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-purple-600">Profile</h3>
          <p className="text-sm text-gray-600">Sandor Jess</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
          Events
        </Badge>
        <div className="space-y-1 text-sm">
          <p className="text-purple-600">Purchase</p>
          <p className="text-purple-600">Men's colourful top</p>
        </div>
        
        <div className="space-y-1 text-sm">
          <p className="text-purple-600">Page view</p>
          <p className="text-purple-600">Colourful vase</p>
        </div>
        
        <div className="space-y-1 text-sm">
          <p className="text-purple-600">Add to cart</p>
          <p className="text-purple-600">Colourful shoes</p>
        </div>
        
        <div className="space-y-1 text-sm">
          <p className="text-purple-600">Page view</p>
          <p className="text-purple-600">Colourful pants</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
