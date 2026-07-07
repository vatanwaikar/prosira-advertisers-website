import * as z from "zod";

export const eximLeadFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Please enter your company name"),
  targetCountries: z.string().min(2, "Please enter at least one target country"),
  businessType: z.string().min(2, "Please select your business type"),
  category: z.string().min(2, "Please mention the export/import category"),
});

export type EximLeadFormData = z.infer<typeof eximLeadFormSchema>;

export default eximLeadFormSchema;
