// reaction.js
const Reaction = {
  createElement: (tag, props, ...children) => {
    const elem = document.createElement(tag);
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.toLowerCase().startsWith("on")) {
          // on으로 시작하는 속성을 추가 하기 위한 코드
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if (typeof child === "function") {
        child = child();
      }
      elem.appendChild(child);
    }
    return elem;
  },
  // 루트 노드를 관리하는 객체를 생성해서 반환
  // Reaction.createRoot(document.getElementById(#root)).render();
  createRoot: (rootNode) => {
    return {
      // 루트 노드 하위에서 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        rootNode.appendChild(appFn());
      },
    };
  },
};
export default Reaction;
