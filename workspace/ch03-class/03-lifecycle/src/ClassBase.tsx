/**
 * 1은 생성될때
 * 2는 업데이트 과정
 */

import { Component } from "react";

// 인터페이스 정의
interface ClickMeProps {
  level?: number;
}

interface ClickMeState {
  count: number;
}

// 부모컨포넌트
class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <CilckMe level={5} />
      </div>
    );
  }
}

// 자식 컴포넌트
class CilckMe extends Component<ClickMeProps, ClickMeState> {
  // 1-1 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#1-1-constructor)
  constructor(props: ClickMeProps) {
    console.log("1-1 constructor 호출됨");
    super(props);
    this.state = { count: props.level || 1 };
  }
  // 1-2 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#1-2-static-getderivedstatefrompropsprops-state)
  // 2-1 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#2-1-static-getderivedstatefrompropsprops-state)
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    console.log("1-2/2-2 getDerivedStateFromProps 호출됨");
    console.log("\t props", props);
    console.log("\t state", state);

    if (state.count / (props.level || 1) > 10) {
      // 30이 넘더라도 이 조건에 걸려서 count가 30이상으로 올라가지 않음
      return { count: (props.level || 1) * 10 }; // 새로운 값으로 state 업데이트
    }
    return null; // state를 업데이트 하지 않음
  }

  // 2-2 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#2-2-shouldcomponentupdatenextprops-nextstate)
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState) {
    // 랜더링 할지 말지를 판단하는 코드임
    // 이 코드가 없으면 일정코드가 넘어가더라도 지속적으로 렌더링이 되고 있음, 일정 값이 되면 막도록 하는 코드
    // 이 함수는 return을 무조건 해야함
    console.log("2-2 shouldComponentUpdate 호출됨");
    console.log("\t현재값", this.props, this.state);
    console.log("\t다음값", nextProps, nextState);

    // clickme를 component로 상속받았을때 조건문
    if (this.state.count === nextState.count) {
      return false; // render를 호출하지 말라
    } else {
      return true; // render를 호출해라
    }

    // clickme를 PureComponent로 상속받았을때 조건문
    // if (this.state.count === nextState.count) {
    //   return false; // render를 호출하지 말라
    // } else {
    //   return true; // render를 호출해라
    // }
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };

  // 1-3 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#1-3-render)
  // 2-3 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#2-3-render)
  render() {
    console.log("1-3/2-3 render 호출됨");
    console.log("1-3/2-3", document.querySelector("button")?.textContent);

    // 이작업에서 API 서버로부터 데이터 패칭을 하면 안됨 -> 순수함수가 아님
    return (
      <div>
        클릭 횟수 X {this.props.level || 1}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }

  // 1-4 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#1-4-componentdidmount-%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C%EB%8A%94-useeffect%EB%A1%9C-%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5)
  componentDidMount() {
    // 함수형 컴포넌트에서는 userEffect()라는 훅이 이 역할을 함
    // API 서버로부터 데이터 패칭과 같은 side effect가 발생하는 작업은 이곳에서 발생
    console.log("1-4 componentDidMount호출됨");
    console.log("1-4", document.querySelector("button")?.textContent);
  }
  // 2-4 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#2-4-getsnapshotbeforeupdateprevprops-prevstate)
  getSnapshotBeforeUpdate(prevProps: ClickMeProps, prevState: ClickMeState) {
    console.log("2-4 getSnapshotBeforeUpdate");
    console.log(prevProps, prevState);
    return "hello";
  }

  // 2-5(https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#2-5-componentdidupdateprevprops-prevstate-snapshot-%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C%EB%8A%94-useeffect%EB%A1%9C-%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5)
  componentDidUpdate(prevProps: ClickMeProps, prevState: ClickMeState, snapshot: string) {
    console.log("2-5 componentDidUpdate 호출됨.");
    console.log("\t이전값", prevProps, prevState);
    console.log("\t현재값", this.props, this.state);
    console.log("\tsnapshot", snapshot);
  }

  // 3-1 (https://github.com/FEBC-13/React/tree/main/workspace-ins/ch03-class#3-1-componentwillunmount-%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C%EB%8A%94-useeffect%EB%A1%9C-%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5)
  componentWillUnmount(): void {
    console.log("3-1 componentWillUnmount 호출");
    
  }
}

export default Parent;
