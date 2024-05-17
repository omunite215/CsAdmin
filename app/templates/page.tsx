import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TemplateContent } from "@/lib/constants";
import TemplateCard from "./TemplateCard";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import UploadPopUp from "./UploadPopUp";

const page = () => {
  return (
    <section className="sm:container py-6">
      <Card>
        <CardHeader>
          <CardTitle>Share Templates</CardTitle>
          <CardDescription>
            Here are the templates of Share Certificates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {TemplateContent.map((item) => (
              <TemplateCard {...item} key={item.title} />
            ))}
          </section>
        </CardContent>
        <CardFooter className="flex justify-end items-center">
          <UploadPopUp/>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
