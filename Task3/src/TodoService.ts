
// module file for crud opreation
// module file for crud opreation
import type { TaskTypes } from "./todoitem";

const LOCAL_STORAGE_KEY = 'todos';

 const TodoService = {

    // get todos
    getTodos : () : TaskTypes[]=>{
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [] ;
    },
// adding todo
addTodos : (text:string) : TaskTypes =>{
    const todos =  TodoService.getTodos()
    const newTodo : TaskTypes = {
        id : todos.length + 1,
        text ,
        completed : false
    };
    const updateTodos = {...todos ,newTodo}
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateTodos))
    return newTodo
},
// update the todo
updateTodo : (todo : TaskTypes) : TaskTypes => {
    const todos = TodoService.getTodos();
    const updateTodos   = todos.map(t=> (t.id === todo.id ? todo : t)) 
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateTodos))
    return todo
},
// delete the tdodo
deleteTodo : (id:number) : void =>{
    const todos = TodoService.getTodos();
    const updatedTodos =  todos.filter((todo)=> (todo.id !== id))
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updatedTodos))
 }
 }

 export default TodoService