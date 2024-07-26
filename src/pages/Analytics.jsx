import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', newContacts: 4000, conversions: 2400 },
  { name: 'Feb', newContacts: 3000, conversions: 1398 },
  { name: 'Mar', newContacts: 2000, conversions: 9800 },
  { name: 'Apr', newContacts: 2780, conversions: 3908 },
  { name: 'May', newContacts: 1890, conversions: 4800 },
  { name: 'Jun', newContacts: 2390, conversions: 3800 },
];

const Analytics = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">15,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">12.5%</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Contact Growth and Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="newContacts" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="conversions" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Your conversion rate has increased by 2.3% this month.</li>
            <li>The most effective communication channel is email, with a 15% higher response rate.</li>
            <li>Contacts from the technology sector show the highest engagement.</li>
            <li>Consider following up with dormant contacts to re-engage them.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
