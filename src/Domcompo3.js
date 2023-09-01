import {useRef} from 'react';

function DomCompo3(){
    // const [cal, setCal]=useState(`${getNum}${buho}${getNum2}`);
    // const inputRef=useRef(null);
        
    // // const getInput=()=>{
    // //     if(!inputRef.current) return;
    // //     setColor(inputRef.current.value);
    // //     inputRef.current.focus();
    // //     console.log(inputRef.current.value);
    // // };
    // const getNum=Math.floor(Math.random()*10+1);
    // const getNum2=Math.floor(Math.random()*10+1);
    // const buho=['+','-','*'];

    // const getTotal=()=>{
    //     if(!inputRef.current===document.querySelector('.num').innerText.value) {
    //         alert('정답입니다.');
    //     }else{
    //         alert('오답입니다');
    //     };
    //     setCal(inputRef.current.value);
    //     inputRef.current.value='';
    //     inputRef.current.focus();
        
    // };
    const opList = ['+','-','*'];
    const inputRef = useRef(null);
    const num1 = Math.round(Math.random()*10);
    const opIndex = Math.round(Math.random()*2);
    const op = opList[opIndex];
    const num2 = Math.round(Math.random()*10);
    
    const calculate=()=>{
        console.log(inputRef.current.value);
        if(inputRef.current.value==result) alert('정답');
        else alert('오답');
        inputRef.current.value='';
        inputRef.current.focus();
    }
const calculateResult=()=>{
    //eval()-> 권장하는 친구는 아님-브라우저마다 다르게 동작됨, 동일하게 동작되어야 하는데
    //eval(문자열) -> 그 문자열을 계산해준다-pm 12:47
    return eval(num1+op+num2);
    // if(op==='+') return num1+num2;
    // else if(op==='-') return num1-num2;
    // else if(op==='*') return num1*num2;
    // return 0;
};
const result=calculateResult();

    return(
        // <div style={{
           
        // }}>
        //     <h2 style={{
        //         color: 'blue'
        //     }}>실습</h2>
        //     <div className='num'>{getNum}+{getNum2}</div>
        //     <input type='text' ref={inputRef}></input>
        //     <button onClick={getTotal}>정답 제출</button>
        // </div>
        <div>
            <span>
                {num1}{op}{num2}
            </span>
            <br></br>
            <input ref={inputRef}></input>
            <button onClick={calculate}>제출</button>
        </div>
    )
}
export default DomCompo3;