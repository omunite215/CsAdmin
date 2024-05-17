import { Home, User2, Files, LogOut, Settings2 } from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  // {
  //   title: "Account Users",
  //   href: "/account-users",
  //   icon: <User2 className="h-4 w-4" />,
  // },
  {
    title: "Share Templates",
    href: "/templates",
    icon: <Files className="h-4 w-4" />,
  },
  // {
  //   title: "Preferances",
  //   href: "/preferances",
  //   icon: <Settings2 className="h-4 w-4" />,
  // },
  // {
  //   title: "Logout",
  //   href: "/",
  //   icon: <LogOut className="h-4 w-4" />,
  // },
];

export const TemplateContent = [
{
  title: "Blue Template",
  imgSrc: "/templates/blue.jpg"
},
{
  title: "Green Template",
  imgSrc: "/templates/green.jpg"
},
{
  title: "Soft Blue Template",
  imgSrc: "/templates/soft-blue.jpg"
},
];

export const notificationContent = [
  {
    title: "New Form Released!!",
    description: "Govt. has released a new form",
    date: "12 May, 2024",
  },
  {
    title: "Form Guidelines Released!!",
    description: "Govt. has released a new form guidelines",
    date: "11 May, 2024",
  },
  {
    title: "Delay in Form Submission!!",
    description: "Govt. has delayed a form submissions",
    date: "10 May, 2024",
  },
  {
    title: "Advisory for Fintech Companies!!",
    description: "Govt. has issued new advisory for Fintech Companies",
    date: "8 May, 2024",
  },
];

export const messagesContent = [
  {
    imgSrc: "/user/user-01.png",
    name: "Robert John",
    message: "Need Status Update on Upcoming Forms.",
    time: "2 mins ago",
  },
  {
    imgSrc: "/user/user-02.png",
    name: "Mariya Desoja",
    message: "Correction in the current form.",
    time: "5 mins ago",
  },
  {
    imgSrc: "/user/user-03.png",
    name: "Henry Dholi",
    message: "Why my projects are still pending ?",
    time: "10 mins ago",
  },
  {
    imgSrc: "/user/user-04.png",
    name: "Cody Fisher",
    message: "Project Status not Updating!!",
    time: "35 mins ago",
  },
  {
    imgSrc: "/user/user-05.png",
    name: "Harry Brooks",
    message: "Please update links so that I can redirect",
    time: "2 days ago",
  },
  {
    imgSrc: "/user/user-06.png",
    name: "Harry Williamson",
    message: "Regarding Form Guidelines",
    time: "3 days ago",
  },
];
