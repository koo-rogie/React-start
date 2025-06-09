/**
 * 상태의 불변성 (immutability)
 */

import EditAddress from "@components/EditAddress";
import { produce } from "immer";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    _id: 4,
    email: "u1@market.com",
    name: "데이지",
    phone: "01044445555",
    address: "서울시 강남구 논현동 222",
    type: "user",
    createdAt: "2025.05.25 21:08:14",
    updatedAt: "2025.06.04 09:38:14",
    extra: {
      birthday: "11-30",
      addressBook: [
        {
          id: 1,
          name: "회사",
          value: "서울시 강동구 천호동 123",
        },
        {
          id: 2,
          name: "집",
          value: "서울시 강동구 성내동 234",
        },
      ],
    },
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id, e.target.value);

    // 상태의 불변성이 지켜지지 않음
    // const newUser = {
    //   // 원본을 먼저 복사함
    //   ...user,
    // };
    // const address = user.extra.addressBook.find((address) => address.id === Number(e.target.id)); // 클릭한 input의 id값과 id값이 맞는지 확인함
    // address!.value = e.target.value;
    // const newUser = {
    //   // 수정된 정보를 다시 랜더링 된다
    //   ...user,
    // };

    /*
    // 상태의 불변성을 지키기 위해서 추가 작업 필요
    const newAddressBook = user.extra.addressBook.map((address) => {
      if (address.id === Number(e.target.id)) {
        // 바꿔야하는 주소가 같으면 바꾸고
        return { ...address, value: e.target.value };
      } else {
        // 바꿔야하는 주소가 다르면 유지한다
      return address;
    }
    });
  
  const newUser = {
    ...user, // 기존거는 유지함
    extra: {
        ...user.extra, // 기존거는 유지함
        addressBook: newAddressBook, // 바뀐것을 기반으로 새로 만들어짐
      },
    };
  */
    /* 라이브러리 사용(상태의 불변성을 지킴)*/
    // npm i immer
    // user를 복사한 새로운 객체를 만들어서 콜백함수의 인자로 전달
    const newUser = produce(user, (draft) => {
      const address = draft.extra.addressBook.find((address) => address.id === Number(e.target.id)); // 클릭한 input의 id값과 id값이 맞는지 확인함
      address!.value = e.target.value;
    });

    // 회사 정보가 변경될 경우
    console.log("user", user === newUser); // 기대값 false, 실제 값: false
    console.log("user.exter", user.extra === newUser.extra); // 기대값 false, 실제 값: true
    console.log("user.extra.addressBook", user.extra.addressBook === newUser.extra.addressBook); // 기대값 false, 실제 값: true
    console.log("회사", user.extra.addressBook[0] === newUser.extra.addressBook[0]); // 기대값 false, 실제 값: true
    console.log("회사 주소", user.extra.addressBook[0].value === newUser.extra.addressBook[0].value); // 기대값 false, 실제 값: true

    console.log("집", user.extra.addressBook[1] === newUser.extra.addressBook[1]); // 기대값 true, 실제 값: true
    console.log("집 주소", user.extra.addressBook[1].value === newUser.extra.addressBook[1].value); // 기대값 true, 실제 값: true

    console.log("예전 회사 정보", user.extra.addressBook[0]);
    console.log("바뀐 회사 정보", newUser.extra.addressBook[0]);
    setUser(newUser);
  };

  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
      <p>npm i immer 사용</p>
      <p>
        이메일: {user.email}
        <br />
        이름: {user.name}
        <br />
        전화번호: {user.phone}
        <br />
      </p>
      <ul>
        {user.extra?.addressBook?.map((address) => (
          <li key={address.id}>
            {address.name}: {address.value}
          </li>
        ))}
      </ul>

      <p>
        <EditAddress addressBook={user.extra.addressBook} handleAddressChange={handleAddressChange} />
      </p>
    </>
  );
}

export default App;
