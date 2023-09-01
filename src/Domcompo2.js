import {useRef} from 'react';
import { useState } from 'react';

function DomCompo2(){
    const [color, setColor]=useState('');
    const inputRef=useRef(null);
        
    // const getInput=()=>{
    //     if(!inputRef.current) return;
    //     setColor(inputRef.current.value);
    //     inputRef.current.focus();
    //     console.log(inputRef.current.value);
    // };
    const changeColor=()=>{
        if(!inputRef.current) return;
        setColor(inputRef.current.value);
        inputRef.current.value='';
        inputRef.current.focus();
    };
    
    return(
        <div style={{
            backgroundColor: color
        }}>
            <input type='text' ref={inputRef}></input>
            <button onClick={changeColor}>색 적용</button>
        </div>
    )
}
export default DomCompo2;