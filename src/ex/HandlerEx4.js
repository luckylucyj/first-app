import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  // const clickTest = (event) => {
  //   console.log("target : ", event.target);
  //   console.log("currentTarget : ", event.currentTarget);
  // };

  return (
    <>
    <h2>비동기와 동기 차이</h2>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount((count) => {
            return count + 1;
          }); // count + 1 => 0 + 1
          setCount((count) => count + 1); // count + 1 => 0 + 1
        }}
      >
        +2
      </button>
      {/* <button onClick={clickTest}>
        이것은
        <span>버튼</span>
      </button> */}
    </>
  );
}
export default Test;