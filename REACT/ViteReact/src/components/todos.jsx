import { useEffect, useState } from "react";

function Todo() {
    const [todos, setTodos]=useState([]);
    const [task, setTask]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([...todos,{id:Date.now(),task,completed:false}]);
    }
    const updatetask=(id)=>{
        setTodos(todos.map(item=>{
            if(item.id==id){
                item.completed=!item.completed;
            }
            return item;
        }))
    }
    const deletetask=(id)=>{
        setTodos(todos.filter(item=>item.id!==id));
    }
    
    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-cntrol mt-3" placeholder="Enter your task"
                name="task" onChange={(e)=>setTask(e.target.value)} value={task}/>
                <button type="submit" className="btn btn-primary mt-3">Add task</button>
            </form>
            <h3>Todo</h3>
            <ul className="list-group">
                {
                    todos.map(item=>(
                        <li className="list-group-item" key={item.id}
                        style={{textDecoration:`${item.completed?'line-through':''}`}}>
                            {item.task}{item.completed?'completed':'pending'}
                            <button onClick={()=>updatetask(item.id)}>update</button>
                            <button onClick={()=>deletetask(item.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}

export default Todo;
