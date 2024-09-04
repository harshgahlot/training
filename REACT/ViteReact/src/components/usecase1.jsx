import { useEffect, useState } from "react";

function Effectex() {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState('');
    const increament=()=>{
        setCount(count+1);
    }
    const decreament=()=>{
        setCount(count-1);
    }
    useEffect(()=>{
        console.log('component mounted');
    },[])
    useEffect(()=>{
        console.log('count updated',count);
    },[count])
    useEffect(()=>{
        console.log('input updated',input);
    },[input])
    return ( 
        <div>
            <h3>usecase 1 component:{count}</h3>
            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
            <input type="text" onChange={(e)=>setInput(e.target.value)}></input>
        </div>
     );
}

export default Effectex;