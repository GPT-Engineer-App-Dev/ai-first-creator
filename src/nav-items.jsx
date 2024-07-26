import { Home, Users, MessageSquare, BarChart } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contacts from "./pages/Contacts.jsx";
import Conversations from "./pages/Conversations.jsx";
import Analytics from "./pages/Analytics.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contacts",
    to: "/contacts",
    icon: <Users className="h-4 w-4" />,
    page: <Contacts />,
  },
  {
    title: "Conversations",
    to: "/conversations",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Conversations />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart className="h-4 w-4" />,
    page: <Analytics />,
  },
];
