import MyLink from "@pages/MyLink";

export default function Header() {
  return (
    <header>
      <h1>리액트 라우터 - 01 클라이언트 라우팅 직접 구현</h1>
      <MyLink to="home.html">home</MyLink>
      <br />
      <MyLink to="page1.html">page1</MyLink>
      <br />
      <MyLink to="page2.html">page2</MyLink>
    </header>
  );
}
