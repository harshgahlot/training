import { useEffect, useState } from "react";
import Comment from "./comment";
function Post() {
    const [list,setList]=useState([]);
    const fetchdata=async()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/posts');
        const json=await resp.json();
        setList(json);
    }
    useEffect(()=>{
        fetchdata();
    },[])
    return ( 
        <div>
            {
                list.map(post=>(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Comment postid={post.id} />
                    </div>
                ))
            }
        </div>
     );
}

export default Post;
