import Profile from "views/Components/Profile/index";
import ListEvent from "views/Components/Events/listEvent";
import ListTicket from "views/Components/Tickets/listTicket";
import CreateEvent from "views/Components/Events/createEvent";
import EditEvent from "views/Components/Events/editEvent";
import EventDemo from "views/Components/Events/eventDemo";
import CreateTicket from "views/Components/Tickets/createTicket";
import EditTicket from "views/Components/Tickets/editTicket";
import ViewEvent from "views/Components/Events/viewEvent";
import viewTicket from "views/Components/Tickets/viewTicket";
import Sells from "views/Components/Sells/Sells";
import Revenue from "views/Components/Revenue/Revenue";
import profileSetting from "views/Components/Profile/profileSetting";
import table from "views/Components/Profile/table";
import NotFoundPage from "views/NotFound";

const ComponentRoutes = [
  { path: "/profile", exact: true, name: "Profile", component: Profile },
  {
    path: "/events",
    exact: true,
    name: "Event List",
    component: ListEvent,
  },
  {
    path: "/tickets",
    exact: true,
    name: "Ticket List",
    component: ListTicket,
  },
  {
    path: "/createEvent",
    exact: true,
    name: "CreateEvent",
    component: CreateEvent,
  },
  {
    path: "/editEvent/:id",
    exact: true,
    name: "EditEvent",
    component: EditEvent,
  },
  {
    path: "/eventDemo/:id",
    exact: true,
    name: "EventDemo",
    component: EventDemo,
  },
  {
    path: "/createTicket",
    exact: true,
    name: "CreateTicket",
    component: CreateTicket,
  },
  {
    path: "/editTicket",
    exact: true,
    name: "EditTicket",
    component: EditTicket,
  },

  { path: "/viewEvent", exact: true, name: "ViewEvent", component: ViewEvent },
  {
    path: "/viewTicket",
    exact: true,
    name: "viewTicket",
    component: viewTicket,
  },
  { path: "/Sells", exact: true, name: "Sells", component: Sells },
  { path: "/Revenues", exact: true, name: "Revenue", component: Revenue },
  {
    path: "/profileSetting",
    exact: true,
    name: "profileSetting",
    component: profileSetting,
  },
  { path: "/table", exact: true, name: "table", component: table },
  {
    path: "/page-not-found",
    name: "404",
    component: NotFoundPage,
  },
];

export default ComponentRoutes;
