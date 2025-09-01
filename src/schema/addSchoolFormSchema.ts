import { z } from "zod";

export const addSchoolFormSchema = z.object({
  name: z.string().min(2, { message: "School name is required" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  contact: z
    .string()
    .regex(/^\d{10}$/, { message: "Enter a valid 10-digit contact number" }),
  email_id: z.email({ message: "Enter a valid email address" }),
  image: z
    .instanceof(File)
    .refine((file) => file?.type.startsWith("image/"), {
      message: "File must be an image",
    })
    .refine((file) => file?.size <= 2 * 1024 * 1024, {
      message: "Image must be under 2MB",
    }),
});
