// import { useState } from "react";
// function HandlerEx2() {
//   // const [스테이트 이름, 스테이트 변경 함수]= useState(초기값);
//   const [black, setBlack] = useState(["검정색 글씨", "black"]);

import { useState } from "react";

//   return (
//     <>
//       <h3 style={{ color: black[1] }}>{black[0]}</h3>
//       <button onClick={() => setBlack(["빨간색 글씨", "red"])}>빨간색</button>
//       <button onClick={() => setBlack(["파란색 글씨", "blue"])}>파란색</button>
//     </>
//   );
// }

// export default HandlerEx2;

function HandlerEx2(){
  const [text, setText] = useState('검정색 글씨');
  const [color, setColor]=useState('black');

  return (
    <>
    <h1 style={{color:color}}>{text}</h1>
    <button onClick={()=>{setColor('red'); setText('빨간색 글씨')}}>빨간색</button>
    <button onClick={()=>{setColor('blue'); setText('파란색 글씨')}}>파란색</button>
    </>
  )
}
export default HandlerEx2;