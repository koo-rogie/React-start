"use server";

import { Post } from "@/types/board";

// API 게시글 목록 조회응답

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      "Client-Id": "openmarket",
    },
    next: {
      tags: ["list"],
      revalidate: 10, // value값이 지날때 마다 리렌더링
    },
    // cache: "no-cache", // next 15 기본값
    cache: "force-cache", // next 14 기본값(평생 캐시 됨)
  });

  const data = await res.json();
  console.log("boardFetch", data.item.length);
  return data.item;
}
