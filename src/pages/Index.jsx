import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, MessageSquare, TrendingUp, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleAskAI = () => {
    // Simulate AI response (replace with actual API call in production)
    setAiResponse(`Here's what I found about "${aiQuery}": [AI-generated response would go here]`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      <div className="container mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
      >
        AI-First CRM Dashboard
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          { title: "Total Contacts", value: "1,234", icon: Users, color: "from-blue-500 to-blue-600" },
          { title: "Open Conversations", value: "56", icon: MessageSquare, color: "from-green-500 to-green-600" },
          { title: "Conversion Rate", value: "12.5%", icon: TrendingUp, color: "from-yellow-500 to-yellow-600" },
          { title: "AI Insights", value: "7 New", icon: Brain, color: "from-purple-500 to-purple-600" },
        ].map((stat, index) => (
          <motion.div key={stat.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10"></div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-indigo-700">AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-4">
              <Input 
                placeholder="Ask me anything about your CRM data..." 
                className="flex-grow border-2 border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500" 
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
              />
              <Button onClick={handleAskAI} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold">
                Ask AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            {aiResponse && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-indigo-50 p-4 rounded-md border border-indigo-200"
              >
                <p className="text-sm text-indigo-800">{aiResponse}</p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          { title: "Recent Activities", items: [
            "New contact added: John Doe",
            "Conversation closed with: Jane Smith",
            "AI Insight: Follow up with Mike Johnson"
          ], gradient: "from-green-500 to-emerald-600", iconColor: "text-green-500"},
          { title: "AI-Suggested Tasks", items: [
            "Schedule follow-up call with Sarah Brown",
            "Review proposal for XYZ Corp",
            "Update contact information for Acme Inc"
          ], gradient: "from-blue-500 to-cyan-600", iconColor: "text-blue-500"}
        ].map((section, index) => (
          <Card key={section.title} className="overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-10`}></div>
            <CardHeader>
              <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * itemIndex }}
                    className="flex items-center space-x-3 bg-white bg-opacity-60 p-2 rounded-md shadow-sm"
                  >
                    <div className={`w-2 h-2 ${section.iconColor} rounded-full`} />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Index;
