"use client";
import { InviteFormSchema } from "@/app/validationSchemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function InviteForm() {
  const form = useForm<z.infer<typeof InviteFormSchema>>({
    resolver: zodResolver(InviteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof InviteFormSchema>) {
    toast({
      variant: "destructive",
      title: "Account User has been created successfully!!",
      description: "Account Details has been mailed to the mentioned email",
    });
  }

  return (
    <Card className=" max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle>Invite an Account User</CardTitle>
        <CardDescription>
          Fill in the information to invite Account User
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="James" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Bond" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="XXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg">
              Create an Account User <User2 className="ml-3 size-5 my-auto" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
