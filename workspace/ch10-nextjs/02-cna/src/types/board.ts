// 게시물 한건
export interface Post {
  _id: number;
  title: string;
  content: string;
}

// api 서버의 게시물 상세조회 응답
export interface PostInfoRes {
  ok: 0 | 1;
  itme: Post;
}

// api 서버의 게시물 목록조회 응답
export interface PostListRes {
  ok: 0 | 1;
  itme: Post[];
}