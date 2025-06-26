import { create } from "zustand";

interface CounterState {
  count: number;
  countReset: () => void;
  countDown: (step: number) => void;
  countUp: (step: number) => void;
  getCount: () => number;
}

const useCounterStoer = create<CounterState>((set, get) => ({
  // 상태값 초기화
  count: 5,

  // 상태를 변경하는 함수
  countReset: () => {
    // 새로운 상태객체를 지정
    // 전달된 속성만 교체(count)
    set({ count: 0 });
  },
  countDown: (step) => {
    set({ count: get().count - step });
  },
  // countUp: (step) => {
  //   set({ count: get().count + step });
  // },
  countUp: (step) => {
    set((state) => ({ count: state.count + step }));
  },

  getCount: () => get().count,
}));

export default useCounterStoer;
