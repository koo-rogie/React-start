import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "게시물 목록 조회",
  description: "게시물 목록 조회 페이지입니다.",
};
export default function ListPage() {
  const dummyList = [];
  for (let i = 1; i < 101; i++) {
    dummyList.push({
      id: i,
      title: i + "번 게시물",
    });
  }

  const posts = dummyList.map((post) => (
    <li key={post.id}>
      <Link prefetch={true} href={`/posts/${post.id}`} className="block my-1 hover:bg-blue-400">
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
