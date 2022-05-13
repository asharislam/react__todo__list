import { useState } from "react";

const TodoCheck = function(){
    const[todoTitle, setTodoTitle]=useState("");
    const[todoList, setTodoList]=useState([]);
    const[isEditable, setIsEditable]=useState(false);
    const[editableTodo, setEditableTodo]=useState(null)
    const createHandler = function(event){
        event.preventDefault();
        if(!todoTitle){
            alert("Please Enter Todo")
        }else{
            const newTodo ={
                title: todoTitle,
                id: Date.now(),
            }
            setTodoList([newTodo, ...todoList]);
        }
        setTodoTitle("");

    }
    const editHandler = function(id){
        const toBeEditedTodo = todoList.find(todo=>todo.id===id);
        setIsEditable(true);
        setEditableTodo(toBeEditedTodo);
        setTodoTitle(toBeEditedTodo.title);
    }
    const updateHandler = function(event){
        event.preventDefault();
        editableTodo.title = todoTitle;
        setTodoTitle("");
        setIsEditable(false);
        setEditableTodo(null);

    }
    const deleteHandler = function(id){
        const toBeDeletedTodo = todoList.filter(todo=>todo.id !==id);
        setTodoList(toBeDeletedTodo);
    }
    return(
        <div className="container">
            <h2>This is Todo Check</h2>
            <form action="">
                <input value={todoTitle} type="text" onChange={(event)=>setTodoTitle(event.target.value)} name="todochack" placeholder="Enter Todo" />
                <button onClick={(event)=>isEditable===true?updateHandler(event):createHandler(event)} >
                    {isEditable===true?"Update Todo":"Add Todo"}
                </button>
            </form>
            <div className="todoListItem">
                <ul>
                    {todoList.map(todo=>(
                        <li key={todo.id}>
                            <span>{todo.title+" "}</span>
                            <button onClick={(event)=>editHandler(todo.id)}>Edit</button>
                            <button onClick={(event)=>deleteHandler(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default TodoCheck;