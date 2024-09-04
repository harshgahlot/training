import { useEffect, useState } from "react";


function Comment({postid}) {
    const [list,setList]=useState([]);
    const fetchdata=async()=>{
        const resp=await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`);
        const json=await resp.json();
        setList(json);
    }
    useEffect(()=>{
        fetchdata();
    },[])
    return ( 
        <div>
            {
                list.map(comment=>(
                    <div key={comment.id}>
                        <p>Name: {comment.email} Comment:{comment.name}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default Comment;