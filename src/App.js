import "./App.css";
// import "./Test1";
// import "./ex/HandlerEx";
// import "./ex/HandlerEx2";
// import "./ex/HandlerEx3";
// import "./ex/HandlerEx4";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import DomCompo from "./Domcompo";
import DomCompo2 from "./Domcompo2";
import DomCompo3 from "./Domcompo3";
import RefVarState from "./RefVarState";
import ConditionalOne from "./ConditionalOne";
import ConditionalTwo from "./ConditionalTwo";
import { useState } from "react";
import EffectComponent from "./EffectComponent";
import EffectComponent1 from "./EffectComponent1";
import TimerComponent from "./TimerComponent";
import PracticeTimer from "./PracticeTimer";

function App() {
  // React.Fragment실제로 요소의 역할을 하지 않지만 랜더링 되게? 특정 태그를 추가하지 않고 자식들만 보이게-꺽쇠로 쓸 수 있다-am 10:14
  const [show, setShow] = useState(true);
  const [fruit, setFruit] = useState("apple");
  const [background, setBackground] = useState("#000");
  const [color, setColor] = useState("#fff");
  const [content, setContent] = useState("안녕하세요");
  const [show1, setShow1] = useState(true);

  return (
    <>
      {/* {show && <TimerComponent />}
      <button onClick={() => setshow(!show)}>버튼</button> */}
      {/* <DomCompo></DomCompo>
      <DomCompo2></DomCompo2>
      <DomCompo3></DomCompo3> */}
      <RefVarState></RefVarState>
      {/* {show?(<ConditionalOne txt={'1번'}></ConditionalOne>):(<ConditionalTwo txt={'2번'}></ConditionalTwo>)} */}
      {/* <ConditionalOne setcontent={setContent}></ConditionalOne>
    <ConditionalTwo setcontent={setContent}></ConditionalTwo> */}
      {/* <EffectComponent></EffectComponent>
      <EffectComponent1></EffectComponent1> */}
      {/* <a href="https://naver.com">a 태그입니다.</a>
      <button>버튼</button> */}
      {/* -pm 2:45 예제 과일 바꾸기 */}
      {/* 
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select setBackground={setBackground} setColor={setColor} setFruit={setFruit}/>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setContent={setContent} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result data={{fruit, background, color, content}}/>
      </div> */}
      {/* {show1 && <PracticeTimer />}
      <button onClick={() => setShow1(!show1)}>{!show1 ? "보이기" : "숨기기"}</button> */}
      <button onClick={() => setShow(!show)}>{!show ? "보이기" : "숨기기"}</button>
      {show && <PracticeTimer />}
    </>
  );
}

export default App;
