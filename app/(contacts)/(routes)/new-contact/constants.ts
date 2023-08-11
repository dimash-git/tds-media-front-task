import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required",
  }),
  phone: z.string().min(18, {
    message: "Phone is required",
  }),
  gender: z.string().refine((value) => value === "male" || value === "female", {
    message: "Gender must be either 'Male' or 'Female'",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
});
