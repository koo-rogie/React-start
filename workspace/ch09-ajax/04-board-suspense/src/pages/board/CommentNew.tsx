import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState("");
  // axios instance
  const axios = useAxiosInstance();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => axios.post("/posts/1/replies", formData),
    onSuccess() {
      setContent("");
      // 댓글 등록 후 댓글 목록 갱신 (requestCommentList()를 props로 전달받아서 호출)
      queryClient.invalidateQueries({ queryKey: ["post", 1, "replies"] });
    },
  });

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    // 중복 요청 방지
    // 요청 시작 전에 버튼 비활성화 - 버튼의 타입을 desable로 변경
    // 응답 완료 후에 버튼 활성화

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    mutate(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea name="content" rows={4} cols={90} placeholder="댓글 내용" value={content} onChange={(e) => setContent(e.target.value)} />
        <br />
        <button type="submit" disabled={isPending}>
          등록
        </button>
      </form>
    </>
  );
}

export default CommentNew;
