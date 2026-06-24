import * as z from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  website: z.string().url("Please enter a valid URL").optional(),
  industry: z.string().optional(),
  description: z.string().optional(),
  platforms: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
  competitors: z.string().optional(),
  expectations: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export default leadFormSchema;
