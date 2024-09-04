let todos=[];//initialize empty array

function addtodo(todo){
    todos.push(todo);
    console.log(todo, "added");
}
function removetodo(id){
    let flag=-1;
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            flag =i;
            break;
        }
    }
    if(flag>=0){
        todos.splice(flag,1);//delete the index which is found 
    }else{
        console.log("no element found to delete");
    }
}
function getalltodos(){
    return todos;
}
function completetodo(id){
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todos[i].completed=true;
            console.log("todo updated");
        }
    }
}