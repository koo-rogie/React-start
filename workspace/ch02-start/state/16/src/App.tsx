import React, { useState } from "react";

const errorStyle = {
  // css 정의
  fontSize: "12px",
  color: "red",
  fontWeight: "bold",
};

interface FormErrors {
  name?: { message: string };
  email?: { message: string };
  cellphone?: { message: string };
}

// 휴대폰 검증 정규식
const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
// 이메일 검증 정규식
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [cellphone, setCellphone] = useState("010");

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };
  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };
  // const handleCellPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCellphone(e.target.value);
  // };

  // const user = { name, email, cellphone };

  const [user, setUser] = useState({
    // 초기값 설정
    name: "",
    email: "",
    cellphone: "010",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user, // 기존 값 복사
      [e.target.name]: e.target.value, // 입력한 값의 name을 가지고 오고 그것과 같은 value값을 수정해라
    });
  };

  // 검증만 완료할 수 있는 코드임, 상태를 관리 못함
  // let errors: ForErrors = {};

  // 검증 에러가 발생하거나 에러가 사라질때 리렌더잉이 필요함으로 상태로 관리해야한다
  const [errors, setErrors] = useState<FormErrors>({});

  const onSubmitHandler = (e: React.FormEvent) => {
    // 브라우저의 기본 동작 취소(submit 동작 취소)
    e.preventDefault();

    const newErrors: FormErrors = {};

    // 필수 입력 체크
    if (user.name.trim() === "") {
      newErrors.name = { message: "이름을 입력하세요." };
    } else if (user.name.trim().length < 2) {
      newErrors.name = { message: "2글자 이상 입력하세요." };
    }

    if (user.email.trim() === "") {
      newErrors.email = { message: "이메일을 입력하세요." };
    } else if (emailExp.test(user.email) === false) {
      newErrors.email = { message: "이메일 양식에 맞지 않습니다." };
    }

    if (user.cellphone.trim() === "") {
      newErrors.cellphone = { message: "휴대폰 번호를 입력하세요." };
    } else if (cellphoneExp.test(user.cellphone) === false) {
      newErrors.cellphone = { message: "휴대폰 형식에 맞지 않습니다." };
    }

    if (newErrors) {
      // 입력값 검증 실패
      setErrors(newErrors);
      console.error(errors);
    } else {
      // 입력값 검증 통과
      setErrors({});
      console.log("서버에 전송...", user);
    }
  };

  return (
    <>
      <h1>15 회원가입 입력값 상태 관리</h1>

      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">이름</label>
        <input id="name" name="name" value={user.name} onChange={handleChange} />
        <br />
        <div style={errorStyle}>{errors.name?.message}</div>

        <label htmlFor="email">이메일</label>
        <input id="email" name="email" value={user.email} onChange={handleChange} />
        <br />
        <div style={errorStyle}>{errors.email?.message}</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input id="cellphone" name="cellphone" value={user.cellphone} onChange={handleChange} />
        <br />
        <div style={errorStyle}>{errors.cellphone?.message}</div>

        <button type="submit">가입</button>
      </form>
      <p>
        이름: {user.name}
        <br />
        이메일: {user.email}
        <br />
        휴대폰: {user.cellphone}
        <br />
      </p>
    </>
  );
}

export default App;
