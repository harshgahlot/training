class Todo{
    constructor(id, task,status){
        this.id=id;
        this.task=task;
        this.status=status;
    }
}
class Todolist{
    constructor(){
        this.todos=[];
    }
    addtodo(data){
        const num=Math.floor(Math.random()*100);
        const todo=new Todo(num,data,'pending'); 
        this.todos.push(todo);
        
    }
    removetodo(id){
        this.todos=this.todos.filter(item=>item.id!=id)
    }
    getall(){
        return this.todos;
    }
    update(name){
        this.todos=this.todos.map(item=>{
            if(item.task===name){
                item.status='completed';
            }
            return item;
        })

    }
}
const list=new Todolist();
list.addtodo('checkpaper');
list.addtodo('check assignment');
console.log(list.getall());
list.update('checkpaper');
console.log(list.getall());

