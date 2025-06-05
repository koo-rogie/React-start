function Header() {
  console.log("\tHeader 함수 호출됨");

  return (
    <header>
      <h1>02 Counter - React로 구현(JSX)</h1>
      <p>
        파일 경로: <span id="filepath"> {`ch${document.URL.split("/ch")[1]}index.html`}</span>
      </p>
    </header>
  );
}

export default Header;
