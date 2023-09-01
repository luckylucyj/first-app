import { useEffect, useRef, useState } from "react";

export default function TimerComponent() {
  const count = useRef(0);
  const [render, setRender] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      count.current += 1;
    }, 1000);
    //setInterval 함수를 이용하면 반복이 되는 객체를 전달-pm 3:22
    //clearSetInerval(객체)반복을 해제한다.
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>{count.current}</h1>
      <button
        onClick={() => {
          setRender(render+1);
        }}
      >
        시간
      </button>
    </>
  );
}
