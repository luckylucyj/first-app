// import { useEffect, useState } from "react";
// export default function PracticeTimer() {
// //   let today = new Date();

// //   let hours = today.getHours(); // 시
// //   let minutes = today.getMinutes(); // 분
// //   let seconds = today.getSeconds();
// //   const [date, setDate] = useState(`${hours}:${minutes}:${seconds}`);
// //   const[count, setCount]=useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       console.log(`${hours}:${minutes}:${seconds}`);
// //       setDate(`${hours}:${minutes}:${seconds}`);
// //     }, 1000);

// //     return () => {
// //       clearInterval(timer);
// //     };
// //   }, []);
// //   return <>{date}
// //   <button></button></>;
//   // return(
//   //     <div>
//   //         { `${setDate}` }
//   //     </div>
//   // )
//   const [count, setCount]=useState(0);
//   useEffect(()=>{
//     const timer=setInterval(() => {
//         setCount(count+1);
//     }, 1000);
//   },[]);
//   return <>Timer{count}</>
// }


// import { useEffect, useState } from "react";

// export default function PracticeTimer() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [count]);

//   return (
//     <>
//       <h1>{count}</h1>
//     </>
//   );
// }

import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function PracticeTimer() {
  const count = useRef(0);
  const [render, setRender] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      count.current += 1;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{count.current}</h1>
      <button
        onClick={() => {
          setRender(render + 1);
        }}
      >
        시간
      </button>
    </>
  );
}