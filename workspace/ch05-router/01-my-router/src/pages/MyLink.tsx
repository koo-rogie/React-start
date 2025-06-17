import React from "react";

interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function MyLink({ children, to }: MyLinkProps) {
  const hanleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본동작(페이지 이동) 취소
    e.preventDefault();

    // History API를 사용해서 주소 변경과 히스토리에 추가
    history.pushState(null, "", to);



  };
  return (
    <>
      <a href={to} onClick={hanleClick}>
        {children}
      </a>
    </>
  );
}
