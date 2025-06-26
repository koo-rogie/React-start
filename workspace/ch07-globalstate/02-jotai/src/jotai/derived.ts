// 파생 atom

import { countAtom } from "@/jotai/atoms";
import { atom } from "jotai";

// 기존값의 2배를 곱해주는 함수
// <Left2> 애서 사용
export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const dualDoubleCountAtom = atom((get) => get(doubleCountAtom) * 2);
