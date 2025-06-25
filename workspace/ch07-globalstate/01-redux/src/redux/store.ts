// redux에서는 redux-toolkit 사용을 권장
import { createStore } from "redux";
import counterReducer from "./counterReducer";

// 취소선이 있는경우 이 문법은 deprecated 되었으니 사용하지 말라고 안내해주는 것 정상작동함
const store = createStore(counterReducer);

export default store;
