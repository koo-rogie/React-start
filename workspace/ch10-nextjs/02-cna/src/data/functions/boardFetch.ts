"use server";

import { Post } from "@/types/board";

// API 게시글 목록 조회응답

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      "Client-Id": "openmarket",
    },
  });

  const data = await res.json();
  console.log("boardFetch", data.item.length);
  return data.item;
}
