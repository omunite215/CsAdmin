import {z} from "zod";

export const InviteFormSchema = z.object({
    firstName: z.string({required_error: "*required"}).min(1, "First Name is required").max(50),
    lastName: z.string({required_error: "*required"}).min(1, "Last Name is required").max(50),
    email: z.string({required_error: "*required"}).email({message: "Invalid E-mail"}),
    password: z.string({required_error: "*required"}).min(8, "Password should be min. 8 characters").max(255)
});

export const TemplateSchema = z.object({
    title: z.string().min(4),
    file: z.any()
  });