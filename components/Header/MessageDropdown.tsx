import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageSquareQuote } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { messagesContent } from "@/lib/constants";
import Image from "next/image";

type MessageCardProps = {
  imgSrc: string;
  name: string;
  message: string;
  time: string;
};

const MessageCard = ({ imgSrc, name, message, time }: MessageCardProps) => {
  return (
    <div className="py-3 flex justify-center gap-3 items-center">
      <Image
        src={imgSrc}
        width={48}
        height={48}
        alt="avatar"
        className="rounded-full"
      />
      <article className="flex flex-col gap-y-0.5">
        <p className="text-sm font-semibold">{name}</p>
        <small className=" text-xs font-light">{message}</small>
        <small className="text-muted-foreground font-light">{time}</small>
      </article>
    </div>
  );
};

const MessageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <MessageSquareQuote />
        <div className=" bg-destructive animate-pulse delay-500 absolute top-0 rounded-full h-2 w-2 right-0" />
      </DropdownMenuTrigger>
      <DropdownMenuSeparator />
      <DropdownMenuContent>
        <ScrollArea className=" h-48  w-72">
          <DropdownMenuLabel className=" text-base">Messages</DropdownMenuLabel>
          {messagesContent.map((item) => (
            <DropdownMenuItem key={item.name}>
              <MessageCard {...item} />
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MessageDropdown;
