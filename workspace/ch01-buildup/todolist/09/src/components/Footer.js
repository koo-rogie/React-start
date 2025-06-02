import Reaction from "../reaction.js";

// 푸터 컴포넌트를 렌더링합니다.
function Footer() {
  return Reaction.createElement("footer", null, Reaction.createElement("p", null, "멋쟁이 사자처럼 FrontEnd BootCamp"));

  /*
  <footer>
    <p>멋쟁이 사자처럼 FrontEnd BootCamp</p>
  </footer>
  */
}

export default Footer;
