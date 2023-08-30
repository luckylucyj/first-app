import "./App.css";
import "./Test1";
import "./ex/HandlerEx";
import "./ex/HandlerEx2";
import "./ex/HandlerEx3";
import "./ex/HandlerEx4";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import {useState} from 'react';

function App() {
  // React.Fragment실제로 요소의 역할을 하지 않지만 랜더링 되게? 특정 태그를 추가하지 않고 자식들만 보이게-꺽쇠로 쓸 수 있다-am 10:14

  const [fruit, setFruit]=useState('apple');
  const [background, setBackground]=useState('#000');
  const [color, setColor] = useState('#fff');
  const [content, setContent]=useState('안녕하세요');

  return (
    <>
      <a href="https://naver.com">a 태그입니다.</a>
      <button>버튼</button>
      {/* -pm 2:45 예제 과일 바꾸기 */}

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
      </div>
    </>
  );
}

export default App;
