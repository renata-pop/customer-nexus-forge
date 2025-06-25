
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Users, BarChart3, Settings, Mail, Brain, Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/customers", label: "Customers", icon: Users },
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/campaigns", label: "Campaigns", icon: Mail },
    { href: "/ai-insights", label: "AI Insights", icon: Brain },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-purple-600">
              CM Platform
            </Link>
            
            <div className="flex gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
