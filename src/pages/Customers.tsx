
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { Search, Filter, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Customers = () => {
  const { toast } = useToast();
  
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Sandor Jess",
      email: "sandor.jess@email.com",
      segment: "High Value",
      lastActivity: "2 hours ago",
      totalSpent: "$2,450",
      predictedChurn: "Low",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      segment: "Growing",
      lastActivity: "1 day ago",
      totalSpent: "$890",
      predictedChurn: "Medium",
      initials: "MG"
    },
    {
      id: 3,
      name: "James Wilson",
      email: "james.wilson@email.com",
      segment: "VIP",
      lastActivity: "30 minutes ago",
      totalSpent: "$5,670",
      predictedChurn: "Low",
      initials: "JW"
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      segment: "At Risk",
      lastActivity: "5 days ago",
      totalSpent: "$340",
      predictedChurn: "High",
      initials: "LC"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addCustomer = () => {
    const newCustomers = [
      {
        id: customers.length + 1,
        name: "Alex Johnson",
        email: "alex.johnson@email.com",
        segment: "New",
        lastActivity: "Just now",
        totalSpent: "$0",
        predictedChurn: "Low",
        initials: "AJ"
      },
      {
        id: customers.length + 2,
        name: "Sarah Davis",
        email: "sarah.davis@email.com",
        segment: "Growing",
        lastActivity: "5 minutes ago",
        totalSpent: "$125",
        predictedChurn: "Low",
        initials: "SD"
      },
      {
        id: customers.length + 3,
        name: "Michael Brown",
        email: "michael.brown@email.com",
        segment: "High Value",
        lastActivity: "1 hour ago",
        totalSpent: "$1,890",
        predictedChurn: "Medium",
        initials: "MB"
      }
    ];
    
    const randomCustomer = newCustomers[Math.floor(Math.random() * newCustomers.length)];
    setCustomers([randomCustomer, ...customers]);
    
    toast({
      title: "Customer Added",
      description: `${randomCustomer.name} has been added to your database.`,
    });
  };

  const exportData = () => {
    toast({
      title: "Export Started",
      description: "Your customer data is being exported to CSV format.",
    });
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customer Database</h1>
            <p className="text-gray-600 mt-2">Manage and analyze your customer relationships</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2" onClick={exportData}>
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={addCustomer}>
              Add Customer
            </Button>
          </div>
        </div>

        <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      {customer.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Segment</p>
                    <Badge className={
                      customer.segment === "VIP" ? "bg-yellow-100 text-yellow-800" :
                      customer.segment === "High Value" ? "bg-green-100 text-green-800" :
                      customer.segment === "At Risk" ? "bg-red-100 text-red-800" :
                      "bg-blue-100 text-blue-800"
                    }>
                      {customer.segment}
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Total Spent</p>
                    <p className="font-semibold">{customer.totalSpent}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Churn Risk</p>
                    <Badge variant={customer.predictedChurn === "Low" ? "secondary" : customer.predictedChurn === "Medium" ? "default" : "destructive"}>
                      {customer.predictedChurn}
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Last Activity</p>
                    <p className="text-sm">{customer.lastActivity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Customers;
