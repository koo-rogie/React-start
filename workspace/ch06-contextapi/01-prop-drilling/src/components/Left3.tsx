import { useEffect } from "react";

function Left3({ conut }: { conut: number }) {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{conut}</span>
    </div>
  );
}

export default Left3;
