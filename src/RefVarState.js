import {useRef, useState} from 'react';

export default function RefVarState(){
    const [render, setRender]=useState(0);
    const [countState, setCountState]=useState(0);
    const conutRef=useRef(0);
    let countVar=0;

    const countUpState=()=>{
        setCountState(countState+1);
        console.log('state:'+ countState);
    };
    const countUpVar=()=>{
        countVar+=1;
        console.log('Variable:'+ countVar);
    };
    const countUpRef=()=>{
        conutRef.current+=1;
        setCountState(countState+1);
        console.log('Ref:'+ countUpRef.current);
    };
    const reRender=()=>{
        setRender(render+1);
    };
    return(
        <div className='div-ref'>
            <h3>varible:{countVar}</h3>
            <h3>state:{countState}</h3>
            <h3>ref:{conutRef.current}</h3>
            <button onClick={countUpState}>State up!</button>
            <button onClick={countUpRef}>Ref up!</button>
            <button onClick={countUpVar}>Variable up!</button>
            <button onClick={reRender}>렌더링!</button>
        </div>
    )
}