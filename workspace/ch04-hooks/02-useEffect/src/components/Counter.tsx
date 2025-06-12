import Button from "@components/Button";
import { useEffect, useState } from "react";

interface CountProps {
  children: string;
}
// Counter 컴포넌트
function Counter({ children = "1" }: CountProps) {
  // 자식의 props는 children이라는 매개변수로 이름이 지정되어있다.

  console.log("\tCounter 호출됨");

  const initCount = Number(children);

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(initCount);

  const handlStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };
  // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가

  // 첫번째 방법
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("무한 렌더링");

  // 2. 마운드 된 후에 한번만 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("depndencies에 빈 배열을 지정하면 마운트 된 후에 한번만 호출됨");
  // }, []); // 빈배열이면 딱한번만 가능

  // TODO 2. 증감치이 수정되면 1초후에 증감치 만큼 1회 자동 증가(handleUp() 호출)

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("depndencies에 값을 지정하면 컴포넌트가 업데이트 될 때 지정한 값중 하나라도 수정되었을 경우 호출됨");
  // }, [step]); // step이 수정되면 콜백 함수가 실행이 됨

  useEffect(() => {
    console.log("\tsetup 함수 호출 / 호텔 ci");
    // setup함수는 리턴할 수 있음
    const timer = setInterval(() => {
      console.log(new Date());
    }, 1000);

    /** clearup
     * setup 함수에서 생성한 자원을 해재하는 코드 작성
     * 1. 컴포넌트가 언마운트될 때 호출
     * 2. setup함수가 재실행 되기 전에 호출
     *  ex) 호텔을 예로 들면 co -> ci 사이에 객실 청소를 작업을 의미함
     */

    return () => {
      // clearup(컴포넌트가 언마운트될 때 호출, setup 함수에서 생성한 자원을 해재하는 코드 작성)
      console.log("\tclearup 함수 호출 / 호텔 co");
      clearInterval(timer);
    };
  });

  // 3. 마운트 된 후와 업데이트된 후에 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("depndencies에 지정하지 않으면 마운트 된 후와 업데이트된 후에 호출됨");
  // });

  // 카운터 감소
  const handleDown = () => {
    setCount(count - step);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + step);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  };

  console.log("렌더링 중", document.querySelector("span")?.textContent); // 렌더링 전에 콘솔에 출력했기때문에 undefined

  useEffect(() => {
    console.log("렌더링 후", document.querySelector("span")?.textContent); // 렌더링이 된 후 콘솔에 출력했기 때문에 span에 textContent 출력
  });

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input id="step" type="number" value={step} onChange={handlStepChange} />
      <Button color="red" onClick={handleDown}>
        -_-
      </Button>
      <Button type="reset" onClick={handleReset}>
        0_0
      </Button>
      <Button type="submit" color="blue" onClick={handleUp}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
