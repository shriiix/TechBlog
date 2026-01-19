const { z } = require("zod");

const createPostSchema = {
  body: z.object({
    title: z.string().min(1, "Title is required").max(200, "Title too long"),
    content: z.string().min(10, "Content too short"),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(["draft", "published"]).default("draft"),
  }),
};

const updatePostSchema = {
  body: z.object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(200, "Title too long")
      .optional(),
    content: z.string().min(10, "Content too short").optional(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(["draft", "published"]).optional(),
  }),
};

module.exports = {
  createPostSchema,
  updatePostSchema,
};
