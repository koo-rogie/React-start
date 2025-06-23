import { useState } from "react";

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState("");

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
     const jsonBody = Object.fromEntries(formData.entries());
    console.log(jsonBody);
    try {
      await fetch("https://fesp-api.koyeb.app/market/posts/1/replies?delay=500", {
        headers: {
          "Client-Id": "openmarket",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(jsonBody),
      });
    } catch (err) {
      // alert("게시물 상세 조회에 실패했습니다. \n잠시 후 다시 요청하시기 바랍니다.");
      console.error(err);
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log("content", content);
    formData.append("content", content);
    requestAddComment(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={3} cols={30} placeholder="댓글 내용" />
    
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;
