import CommentItem from "@/app/info/1/CommentItem";
import CommentNew from "@/app/info/1/CommentNew";

export default function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

      {/* 아이탬 리스트 */}
      <CommentItem />
      <CommentItem />

      {/* 새로운 댓글 */}
      <CommentNew />
    </section>
  );
}
