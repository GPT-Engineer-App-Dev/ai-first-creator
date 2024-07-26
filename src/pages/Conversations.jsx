import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Conversations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [conversations, setConversations] = useState([
    { id: 1, contact: "John Doe", lastMessage: "Thanks for your time", status: "closed", date: "2023-03-15" },
    { id: 2, contact: "Jane Smith", lastMessage: "When can we schedule a call?", status: "open", date: "2023-03-20" },
    { id: 3, contact: "Mike Johnson", lastMessage: "I'll review the proposal", status: "open", date: "2023-03-18" },
  ]);

  const filteredConversations = conversations.filter(conversation =>
    conversation.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conversation.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Conversations</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search Conversations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input 
              placeholder="Search by contact or message content..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversation List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Last Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConversations.map((conversation) => (
                <TableRow key={conversation.id}>
                  <TableCell>{conversation.contact}</TableCell>
                  <TableCell>{conversation.lastMessage}</TableCell>
                  <TableCell>
                    <Badge variant={conversation.status === "open" ? "default" : "secondary"}>
                      {conversation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{conversation.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conversations;
