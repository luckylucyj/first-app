// import { useState } from "react";
// function HandlerEx() {
//   // const [스테이트 이름, 스테이트 변경 함수]= useState(초기값);
//   const [world, setWorld] = useState("hello world!");
//   return <>

//   <button onClick={()=>setWorld('goodbye world!')}>{world}</button>
//   </>;
// }

// export default HandlerEx;

// import {Component} from 'react';
// class practice extends Component{
//   state={
//     text: 'Hello World',
//   };
//   render(){
//     return<>{this.state.text}
//     <br></br>
//     <button onClick={()=>this.setState({text:'goodbye world'})}>버튼</button>
//     </>;
//   }
// }
import { useState } from "react";
function HandlerEx(){
  const [state, setState]= useState({text: 'hello world'});
  return(
    <>
    {state.text}
    <br></br>
    <button onClick={()=> setState ({text: 'goodbye World'})}>버튼</button>
    </>
  );

}
export default HandlerEx;

