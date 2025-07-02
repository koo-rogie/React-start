import { NextResponse } from "next/server";

export async function GET(request: NextResponse, { params }: { params: Promise<{ id: string }> }) {
  // 요청을 받음
  const { id } = await params;
  console.log("GET 라우트 핸들러", id);

  // DB 연동해서 상세정보 조회작업을 직접 구현(풀스택)
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      "Client-Id": "openmarket",
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
export function POST() {
  return NextResponse.json("Route handler POST 응답");
}
export function DELETE() {
  return NextResponse.json("Route handler DELETE 응답");
}
