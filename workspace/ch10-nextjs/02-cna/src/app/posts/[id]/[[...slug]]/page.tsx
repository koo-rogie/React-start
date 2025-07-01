export default async function SlugPage({ params }: { params: { id: string; slug: string[] } }) {
  const slugParams = await params;
  console.log(slugParams);
  // 예시 주소: http://localhost:3000/posts/1/favorites
  // 세 번째 세그먼트(slug[0])를 통해 'likes' 또는 'favorites' 중 어떤 하위 경로인지 판별, 판별한 주소를 통해서 어떤 목록이 나오는지 h1태그 안에서 출력함

  switch (slugParams.slug[0]) {
    case "likes":
    // 좋아요 목록 출력

    case "favorites":
    // 즐겨찾기 목록 조회
    default:
  }
  return (
    <>
      <h1>
        {slugParams.id}번 게시물에 {slugParams.slug[0] === "likes" ? "좋아요 목록" : "즐겨찾기 목록"}
      </h1>
      {slugParams.slug[1] && <h2>{slugParams.slug[1]}번 상세 정보 출력</h2>}
    </>
  );
}
