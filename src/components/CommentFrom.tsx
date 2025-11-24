import { BiCommentDetail } from "react-icons/bi";
import { Button } from "./ui/button";
import { createComment } from "@/actions/createComment";

export default function CommentFrom() {
  return (
    <div className="bg-white rounded-3xl p-[16px] border-4 border-amber-500">
      <p className="flex items-center gap-2 text-2xl">
        <BiCommentDetail />
        コメントを投稿
      </p>
      <form
        action={createComment}
        className="border-2 border-amber-500 rounded-3xl p-[16px] flex flex-col gap-3 mt-6"
      >
        <input
          type="text"
          name="username"
          placeholder="名前：犬田ワン太郎"
          className="border-zinc-400 border-[1px] rounded-3xl px-6 py-3 bg-zinc-50"
        />
        <textarea
          name="comment"
          placeholder="この犬種についてのコメントを投稿"
          className="border-zinc-400 border-[1px] rounded-3xl px-6 py-3 bg-zinc-50 h-[260px]"
          cols={33}
        ></textarea>
        <Button type="submit">投稿する</Button>
      </form>
    </div>
  );
}
