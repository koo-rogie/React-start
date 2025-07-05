// 서버 함수
"use server";

import { PostInfoRes } from "@/types/board";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// 게시글 등록
export default async function createPost(prevState: PostInfoRes, formData: FormData) {
  // 이전 상태값이 전달됨, 리듀서 같넹..
  // prevState: 타입에 대한 상태 체크를 하지 않을 예정이라서 사용하지 않음
  const title = formData.get("title");
  const content = formData.get("content");
  const body = { title, content, type: "qna" };
  console.log("여기 바디야", body);
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Client-Id": "openmarket",
      "Content-Type": "application/json", // 요청 본문이 JSON 형식임을 명시함. 서버는 이 헤더를 보고 JSON 파싱을 수행함
    },
  });
  const data = await res.json();
  if (data.ok) {
    revalidatePath("/posts"); // 서버 캐시를 무효화하여 /posts 페이지를 다음 요청 시 최신 데이터로 렌더링
    revalidateTag("list");
    redirect("/posts"); // 클라이언트에게 /posts 페이지로 이동하도록 리다이렉트
  }

  return data;
}
