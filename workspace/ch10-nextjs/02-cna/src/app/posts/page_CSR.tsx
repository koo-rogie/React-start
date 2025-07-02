// ❗ 문제 설명
// metadata는 서버 컴포넌트(SSR) 전용 기능임
// 반면, 이 컴포넌트는 "use client"가 선언된 클라이언트 컴포넌트(CSR)임
// SSR 전용 기능과 CSR 전용 기능이 섞여 있어서 호환되지 않음

"use client";

import { fetchPosts } from "@/data/functions/boardFetch";
import { Post } from "@/types/board";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "게시물 목록 조회",
  description: "게시물 목록 조회 페이지입니다.",
};

export default function ListPage() {
  const [data, setData] = useState<Post[] | null>(null);

  async function fetchAsyncPosts() {
    const resData = await fetchPosts();
    setData(resData);
  }

  useEffect(() => {
    fetchAsyncPosts();
  }, []);

  console.log("API 서버로부터 받은 게시물 목록 수", data?.length);
  const posts = data?.map((post) => (
    <li key={post._id}>
      <Link prefetch={true} href={`/posts/${post._id}`} className="block my-1 hover:bg-blue-400">
        {post._id} - 
        {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <h1>목록 조회</h1>
      <ul>{posts}</ul>
    </>
  );
}
