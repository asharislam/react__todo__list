import { useState } from "react";

const Todos = function(){

    const [todosTitle, setTodosTitle] = useState(" ")

    const [ todosList, setTodosList] = useState([]);

    // this is for Edit and delete section
    const [isEditable, setIsEditable] = useState(false);
    const [editableTodo, setEditableTodo] = useState(null);


    // Add todo Handler button
    const createHandler = function(event){
        event.preventDefault();

        const newTodos = {
            id: Date.now(),
            title: todosTitle,
        }
        setTodosList([newTodos, ...todosList]);
        setTodosTitle("");
        }

    // Edit button Handler 
    const editHandler = (id) =>{
        const tobeEditedTodo = todosList.find(todos =>todos.id === id);
        // console.log(tobeEditedTodo)
        setIsEditable(true);
        setEditableTodo(tobeEditedTodo);
        setTodosTitle(tobeEditedTodo.title);
        }

    
    const updateHandler = (event) =>{
        event.preventDefault();
        editableTodo.title = todosTitle;
        setTodosTitle("");
        setIsEditable(false);
        setEditableTodo(null);
    }

    const deleteHandler = (id) =>{
        // const toBeDeletedTodo = todosList.find(todos => todos.id === id);
        const newTodoDelete = todosList.filter(todos =>todos.id !== id)
        setTodosList(newTodoDelete);

    }
    
    


    
    return(
        <div className="container">
            <h2>Todos File</h2>
            <form action="">

                <input value={todosTitle} type="text"  onChange= {(event) => setTodosTitle(event.target.value)} name="todos" placeholder="Please Enter Your Todos." id="" />

                <button onClick={(event)=>isEditable === true ? updateHandler(event) : createHandler(event)}>
                    {isEditable === true? "Update Todo" : "Add Todo"}
                </button>
                
                
            </form>
            <ol>
                {todosList.map(todos=>(
                    <li>
                        <span>{todos.title+" "}</span>

                        <button onClick={(event)=>editHandler(todos.id)}>Edit</button>
                        
                        <button onClick={(event) => deleteHandler(todos.id)}>Delete</button>
                    </li>
                ))}
            </ol>



        </div>
    )
}
export default Todos;