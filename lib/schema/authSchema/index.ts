import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Enter a valid email" }),
    password: z.string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(50, { message: "Password must not be more than 50 characters" })
      .regex(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/,
        { message: "Password must contain one number and one special character" }
      ),
    first_name: z.string().min(2, { message: "First name must be at least 2 characters" }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    termsAndConditions: z.boolean().refine((value) => value === true, {
      message: "T & C agreement required!",
    }),
  });

  export const LoginSchema = z.object({
    email: z.string().email({ message: "Enter a valid email" }),
    password: z.string(),
    rememberMe: z.boolean().optional(),
  })


  export type RegisterType = z.infer<typeof RegisterSchema>;
  export type LoginType = z.infer<typeof LoginSchema>;