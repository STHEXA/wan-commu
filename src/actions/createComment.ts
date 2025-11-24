"use server";

import { CommentPost } from "@/lib/zod/schema";

export const createComment = async (formData: FormData) => {
  const parsed = CommentPost.safeParse({
    username: formData.get("username"),
    comment: formData.get("comment"),
  });

  if (!parsed.success) {
    throw new Error("入力内容に誤りがあります。");
  }

  // DB登録
  await commentRepository.create(parsed.data);
};
