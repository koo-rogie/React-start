let _root; // 외부에서 접근 불가능하도록 선언만 해둠
let _stateValue; // 외부에서 접근 불가능하도록 선언만 해둠

// reaction.js
const Reaction = {
  /**
   * 새 DOM 요소를 생성하고 속성과 자식을 설정합니다.
   * @param {string} tag - 생성할 태그 이름
   * @param {Object|null} props - 요소 속성 및 이벤트 핸들러
   * @param {...(string|number|HTMLElement|Function|Array)} children - 자식 노드
   * @returns {HTMLElement} 생성된 요소
   */
  createElement: (tag, props, ...children) => {
    // 주어진 태그 이름으로 요소 생성
    const elem = document.createElement(tag);

    // 속성을 추가하기 위한 코드
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.toLowerCase().startsWith("on")) {
          // on으로 시작하는 속성을 체크하기 위한 if문
          // ex) onClick, onkeyDown
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
          // ex) elem.addEventListener("click", handleClick);
        } else {
          elem.setAttribute(attrName, value);
          // ex) elem.setAttribute("id", "root");
        }
      }
    }
    // 텍스트 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        // child의 type이 문자, 숫자이면
        child = document.createTextNode(child);
        // ex) 문자열 child = document.createTextNode("abc");
        // ex) 숫자 child = document.createTextNode(13);
      } else if (typeof child === "function") {
        // child의 type이 함수라면 실행해라
        child = child();
        // ex) 숫자 child = child() ;
      }

      if (Array.isArray(child)) {
        // child의 type이 배열이면
        child.forEach((c) => elem.appendChild(c));
      } else {
        // 이 외의 경우 자식으로 추가함
        elem.appendChild(child);
      }
    }
    // 요소 노드 반환
    return elem;
  },

  /**
   * 루트 노드에 컴포넌트를 렌더링할 수 있는 객체를 생성합니다.
   * @param {HTMLElement} rootNode - 렌더링 대상 루트 요소
   * @returns {{ render: function }} 렌더링 메서드를 포함한 객체
   */
  createRoot: (rootNode) => {
    let _appComponent; // 외부에서 접근 못하도록 막는 코드

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

  /**
   * 상태값을 관리하고 변경 시 리렌더링을 트리거하는 Hook입니다.
   * @param {*} initialValue - 초기 상태값
   * @returns {[*, function]} 현재 상태값과 상태 변경 함수 배열
   */
  useState: (initialValue) => {
    // 최초 호출되었을 경우에만 초기값을 지정하고 이후에 다시 호출되는 경우에는 값을 유지한다
    // 왼쪽 피연산자(_stateValue)가 falsy한 값이면(즉, false, 0, "", null, undefined, NaN) → 오른쪽(initialValue)을 결과로 반환
    // falsy에 속하는 모든 값을 “값이 없다”고 판단해 초기값을 할당
    // _stateValue = _stateValue || initialValue; // 기본적으로 null값과 undefined로 확인을 함

    // ??: null 병합 연산자
    // 왼쪽 피연산자(_stateValue)가 null 또는 undefined일 때만 → 오른쪽(initialValue)을 결과로 반환
    // false, 0, "", NaN 등은 유효한 값으로 보고 그대로 유지
    _stateValue = _stateValue ?? initialValue;

    /**
     * 상태값을 업데이트하고 변경이 감지되면 리렌더링합니다.
     * @param {*} newValue - 새로운 상태값
     */
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
