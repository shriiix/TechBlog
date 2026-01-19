const { z } = require("zod");

const registerSchema = {
  body: z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
};

const loginSchema = {
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
  }),
};

module.exports = {
  registerSchema,
  loginSchema,
};
