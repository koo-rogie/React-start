let count = 0;

// 카운터 감소
export const handleDown = () => {
  // 데이터 갱신, count 값 감소
  count--;
  // 화면 갱신, count 값 화면에 표시
  document.querySelector("#counter > span").textContent = count;
};

// 카운터 증가
export const handleUp = () => {
  // 데이터 갱신, count 값 증가
  count++;
  // 화면 갱신, count 값 화면에 표시
  document.querySelector("#counter > span").textContent = count;
};

// 카운터 초기화
export const handleReset = () => {
  // 데이터 갱신, count 값 초기화
  count = 0;
  // 화면 갱신, count 값 화면에 표시
  document.querySelector("#counter > span").textContent = count;
};
