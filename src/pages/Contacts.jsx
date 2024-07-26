import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", company: "Acme Inc", lastContact: "2023-03-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "XYZ Corp", lastContact: "2023-03-20" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", company: "123 Industries", lastContact: "2023-03-18" },
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contacts</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input 
              placeholder="Search by name, email, or company..." 
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
          <CardTitle>Contact List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Last Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>{contact.lastContact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contacts;
