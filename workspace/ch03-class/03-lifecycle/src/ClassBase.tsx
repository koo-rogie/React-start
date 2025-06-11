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
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    console.log("1-2 getDerivedStateFromProps 호출됨");
    console.log("\t props", props);
    console.log("\t state", state);

    if (state.count > 30) {
      // 30이 넘더라도 이 조건에 걸려서 count가 30이상으로 올라가지 않음
      return { count: 30 }; // 새로운 값으로 state 업데이트
    }
    return null; // state를 업데이트 하지 않음
  }
  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };
  render() {
    return (
      <div>
        클릭 횟수 X {this.props.level || 1}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }
}

export default Parent;
