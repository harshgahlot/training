import { useEffect, useState } from "react";

function Real() {
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date())
        },1000)
        return (()=>{
            clearInterval(interval);
        })
    })
    return ( 
        <div>
            <h3>
                Raeltime Clock: {time.toLocaleTimeString()}
            </h3>
        </div>
     );
}

export default Real;