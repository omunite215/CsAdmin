import { notificationContent } from "@/lib/constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell } from "lucide-react";

type MessageCardProps = {
  title: string;
  description: string;
  date: string;
};

const NotificationCard = ({ title, description, date }: MessageCardProps) => {
  return (
    <div className="max-w-sm max-h-36 space-y-3">
      <article>
        <h1 className=" text-sm font-semibold">{title}</h1>
        <p className=" text-xs font-light">{description}</p>
      </article>
      <small className="text-muted-foreground font-light">{date}</small>
    </div>
  );
};

const NotificationsDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <Bell />
        <div className="bg-destructive animate-pulse delay-500 absolute top-0 rounded-full h-2 w-2 right-0" />
      </DropdownMenuTrigger>
      <DropdownMenuSeparator />
      <DropdownMenuContent>
        <ScrollArea className=" h-48  w-72">
          <DropdownMenuLabel className=" text-base">
            Notifications
          </DropdownMenuLabel>
          {notificationContent.map((item) => (
            <DropdownMenuItem key={item.title}>
              <NotificationCard {...item} />
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropDown;
