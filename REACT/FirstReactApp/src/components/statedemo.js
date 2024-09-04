import { useEffect, useState } from "react";

function Statedemo() {
    const[name,setName]=useState('Mindsprint');
    const changename=()=>{
        setName('Hello all')
    }
    return ( 
        <div>
            <h3>Name:{name}</h3>
            <button onClick={changename}>click</button>
        </div>
     );
}

export default Statedemo;