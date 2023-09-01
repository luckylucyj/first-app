import { useEffect, useState } from "react";
function EffectComponent (){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log('Run useEffect');
    },[]);//생성될 때 (mount 될때)-한 번 생성이라는 이벤트가 생기니까 한번은 콘솔로그가 찍힘-pm 3:01
    useEffect(()=>{
        console.log('Change count');
    },[count]);//배열에 보낸 값이 변경될 때 마다 =갱신될 때 마다 =update될 때
    useEffect(()=>{
        return()=>{
            console.log('Remove component');
            // 화면에서 컴포넌트가 사라질 때-unmount될 때
        };
    },[]);
    return <> EffectComponent
    <br></br>
    {count}
    <button onClick={()=>{
        setCount(count+1);
    }}>
        +1
    </button>
    </>
};

export default EffectComponent;