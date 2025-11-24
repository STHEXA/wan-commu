import { prisma } from "@/lib/prisma";
import { CommentPost } from "@/lib/zod/schema";

export const commentRepository = {
  async create(data: CommentPost) {
    return prisma.comment.create({
      data,
    });
  },
};
