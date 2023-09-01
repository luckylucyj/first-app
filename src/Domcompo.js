import {useRef} from 'react';
function DomCompo(){
    // const 변수명=useREf(null);
    //<~~~ ref={변수명}>
    const inputRef=useRef(null);
    const getInput=()=>{
        //Dom에서 input를 선택해 값을 가져오는 역할-am 11:10
        const input=document.getElementById('input');
        console.log('input value : ', input.value);
    };
    const getInput2=()=>{
        if(!inputRef.current) return;
        //inputREf.current={input type='text' }
        console.log('input value2:', inputRef.current.value);
        // console.log('input value2:', inputRef.current?.value);
        inputRef.current.focus();
    };
    getInput2();
    
    return(
        <div>
            <input type='text' id='input' ref={inputRef}></input>
            <button onClick={getInput}>버튼</button>
            <button onClick={getInput2}>버튼2</button>
        </div>
        // -am 11:03
    )
}
export default DomCompo;