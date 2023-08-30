// import { useState } from "react";
// function HandlerEx3() {
//   // const [스테이트 이름, 스테이트 변경 함수]= useState(초기값);
//   const [show, setShow] = useState('보여라');
//   const [visible, setVisible]=useState('block');

//   return (
//     <>
//       <button onClick={() => setBlack(["빨간색 글씨", "red"])}>{show}</button>
//       <h3 onClick={()=> style={{display:setVisible('none')}}} >안녕하세요</h3>
//     </>
//   );
// }

// export default HandlerEx3;

import { useState } from "react";

function HandlerEx3(){
  const [text, setText] = useState('검정색 글씨');
  const [color, setColor]=useState('black');
  const [opacity, setOpacity] = useState(1);
  return (
    <>
    <h1 style={{color:color, opacity:opacity}}>{text}</h1>
    {/* <button onClick={()=>{setOpacity(opacity==1? 0: 1;)}}>글자</button> */}
    <button
        onClick={() => {
          const newOpacity = opacity == 1 ? 0 : 1;
          setOpacity(newOpacity);
        }}
      >
        {opacity == 1 ? "사라져라" : "보여라"}
      </button>
    </>
  )
}
export default HandlerEx3;
/* -pm 12:50 */