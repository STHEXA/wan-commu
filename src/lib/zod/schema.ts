import * as z from "zod";

export const CommentPost = z.object({
  username: z.string(),
  comment: z.string(),
});

export type CommentPost = z.infer<typeof CommentPost>;
