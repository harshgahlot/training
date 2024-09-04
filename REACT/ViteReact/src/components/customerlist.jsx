import { useEffect, useState } from "react";


function Customerlist() {
    const [list,setList]=useState([]);
    const fetchdata=async()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/users');
        const json=await resp.json();
        setList(json);
    }
    useEffect(()=>{
        fetchdata();
    },[])
    return ( 
        <div>
            <table>
                <thead><tr><th>ID</th><th>NAME</th></tr></thead>
                <tbody>
                    {
                        list.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Customerlist;
