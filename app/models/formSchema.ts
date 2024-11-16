import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(1, {
    message: "name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address",
  }),
  job_title: z.string().trim().min(1, {
    message: "job title is required.",
  }),
});

export const fileSchema = z.object({
  name: z.string(),
  size: z.number().max(5 * 1024 * 1024, "File size must not exceed 5MB"), // 5MB limit
  type: z.enum(['image/jpeg', 'image/png', 'application/pdf'], {
    errorMap: () => ({ message: "Invalid file type. Only JPG, PNG, or PDF allowed." }),
  }),
});

export const jobSchema = z.object({
  job_title: z.string().trim().min(1, {
    message: "job title is required"
  }),
  location: z.string().trim().min(1, {
    message: "location is required"
  }),
  salary: z.string().trim().min(1, {
    message: "salary is required"
  }),
  slug: z.string().trim().min(1, {
    message: "slug is required"
  })
});

export type Tschema = z.infer<typeof schema>;
export type TfileSchema = z.infer<typeof fileSchema>;
export type TjobSchema = z.infer<typeof jobSchema>;