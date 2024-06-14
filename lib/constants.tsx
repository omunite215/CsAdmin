import { Home, LayoutPanelLeft, Mail, FileText, Building2, CircleDollarSign, ScanFace } from "lucide-react";

export const navItems = [
  {
    title: "Admin",
    icon: <ScanFace className="size-4" />,
    items: [
      {
        title: "Emails",
        href: '/admin/emails',
        icon: <Mail className="size-4" />
      }
    ]
  },
  {
    title: "Incorporation",
    icon: <Building2 className="size-4" />,
    items: [
      {
        title: "Documents",
        href: "/admin/incorporation/documents",
        icon: <FileText className="size-4" />
      },
      {
        title: "Emails",
        href: "/admin/incorporation/emails",
        icon: <Mail className="size-4" />
      },
    ]
  },
  {
    title: "Annual Return",
    icon: <CircleDollarSign className="size-4" /> ,
    items: [
      {
        title: "Documents",
        href: "/admin/annual-return/documents",
        icon: <FileText className="size-4" />
      },
      {
        title: "Emails",
        href: "/admin/annual-return/emails",
        icon: <Mail className="size-4" />
      },
    ]
  }
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


export const incorporationDocumentsContent = [
  {
    id: 1,
    title: "Share Certificates Background",
    href: "/templates"
  },
  {
    id: 2,
    title: "NNC1",
    href: "/documents/NNC1.pdf"
  },
  {
    id: 3,
    title: "Article of Association (A&A)",
    href: "/documents/AA.pdf"
  },
  {
    id: 4,
    title: "Ordinary Share Agreement",
    href: "/documents/SA.pdf"
  },
  {
    id: 5,
    title: "Preferance Share Agreement",
    href: "/documents/PSA.pdf"
  },
  {
    id: 6,
    title: "Minutes",
    href: "/documents/MOM.pdf"
  },
  {
    id: 7,
    title: "IRBRI",
    href: "/documents/IRBRI.pdf"
  }
];

export const incorporationEmailContent = [
  {
    id: 1,
    title: "Invitation Shareholder for Data Entry",
    href: "/admin/emails/1"
  },
  {
    id: 2,
    title: "Invitation Director for Data Entry",
    href: "/admin/emails/2"
  },
  {
    id: 3,
    title: "OTP for Guest User",
    href: "/admin/emails/3"
  },
  {
    id: 4,
    title: "Inform Shareholder for Signature",
    href: "/admin/emails/4"
  },
  {
    id: 5,
    title: "Inform Director for Signature",
    href: "/admin/emails/5"
  },
  {
    id: 6,
    title: "Inform Guest User for Signature",
    href: "/admin/emails/6"
  },
  {
    id: 7,
    title: "Completion for Shareholder",
    href: "/admin/emails/7"
  },
  {
    id: 8,
    title: "Completion for Director",
    href: "/admin/emails/8"
  },
  {
    id: 9,
    title: "Send the Published link to other 3rd party",
    href: "/admin/emails/9"
  },
];