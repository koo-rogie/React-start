let _root; // 외부에서 접근 불가능하도록 선언만 해둠
let _stateValue; // 외부에서 접근 불가능하도록 선언만 해둠

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
    let _appComponent;
    return (_root = {
      // 루트 노드 하위에서 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        // _appComponent = _appComponent || appFn;
        _appComponent = _appComponent ?? appFn;
        rootNode.firstChild?.remove();
        rootNode.appendChild(_appComponent());
      },
    });
  },
  useState: (initialValue) => {
    // 최초 호출되었을 경우에만 초기값을 지정하고 이후에 다시 호출되는 경우에는 값을 유지한다
    // 왼쪽 피연산자(_stateValue)가 falsy한 값이면(즉, false, 0, "", null, undefined, NaN) → 오른쪽(initialValue)을 결과로 반환
    // falsy에 속하는 모든 값을 “값이 없다”고 판단해 초기값을 할당
    // _stateValue = _stateValue || initialValue; // 기본적으로 null값과 undefined로 확인을 함

    // ??: null 병합 연산자
    // 왼쪽 피연산자(_stateValue)가 null 또는 undefined일 때만 → 오른쪽(initialValue)을 결과로 반환
    // false, 0, "", NaN 등은 유효한 값으로 보고 그대로 유지
    _stateValue = _stateValue ?? initialValue;

    function setValue(newValue) {
      const oldValue = _stateValue; // 이전 상태값
      _stateValue = newValue; // 현재 상태값

      // 상태가 변경된 경우라면 리렌더링한다.
      // Object.is(a, b) a와 b가 같은지 여부를 반환
      // 객체일때 객체 내부의 속성 값이 바뀌었다고 해도 같은 메모리 주소를 가지고 있으면 true가 되므로 render()호출 안됨
      if (!Object.is(oldValue, newValue)) {
        // 2개의 값이 같지 않으면 아래 코드를 실행하라
        _root.render();
      }
    }
    // const [count, setCount] = Reaction.useState(0);
    return [_stateValue, setValue];
  },
};
export default Reaction;

/*
useState(10) // 초기값 10
setValue(20) // 20으로 수정됨
useState(50) // 50으로 수정되지 않고 20으로 유지됨
*/
