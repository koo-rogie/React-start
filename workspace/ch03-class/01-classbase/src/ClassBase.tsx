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
        <h1>01 클래스 컴포넌트</h1>
        <CilckMe level={10} />
        <CilckMe level={5} />
        <CilckMe level={1} />
        <CilckMe />
      </div>
    );
  }
}

// 자식 컴포넌트
class CilckMe extends Component<ClickMeProps, ClickMeState> {
  // state/setState는 부모(Component)에 정의되어 있는 이름
  // 상태를 관리할때는 state 변수 하나만 사용가능해서 여러개의 상태를 관리하려면 객체로 지정
  // 함수형에서는 state 변수를 여러개 가능 (ex. const [a, b] = useState(1); ...더가능)
  state: ClickMeState = { count: 0 }; // 초기화

  constructor(props: ClickMeProps) {
    // 부모 클래스에 생성자를 통해 this를 생성하고 초기화 하므로
    // super를 호출해야 자식 클래스에서 this를 사용 가능
    // super(props)를 호출해야 자식 크래그셍서 this.props사용가능
    super(props);
    this.state = { count: props.level || 1 }; // 프롭스에 level을 받거나 아니라면 1
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };
  render() {
    // 최종적으로 리턴해야하는 코드는 render 안에 정의함.
    return (
      <div>
        클릭 횟수 X {this.props.level || 1}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }
}

export default Parent;
