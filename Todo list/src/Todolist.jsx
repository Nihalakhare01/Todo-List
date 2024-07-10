import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function Todolist() {
    let [todos, setTodo] = useState([{task: "sample task", id: uuidv4() }]);
    let [newtodo, setNewTodo] = useState("");

    let addnewTask = () => {
        setTodo([...todos, {task : newtodo, id: uuidv4()}]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    } 

    let deleteTodo = (id) => {
       setTodo(todos.filter((todo) => todo.id != id));
    }


    let uppercaseall =() => {
        setTodo(todos.map((todo) => {

            if(todo.id == id){
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                    }
            }else{
                return todo;
            }
        })
        )
    }

    let uppercaseone =() => {
        setTodo(todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
                }
            })
        )
    }

    let lowercaseall =() => {
        setTodo(todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toLowerCase(),
                }
            })
        )
    }

    return(
        <>
            <input type="text" 
                name=""
                id="" 
                placeholder="add a task" 
                value={newtodo}
                onChange={updateTodoValue}
            />
    
            <br />
            <button onClick={addnewTask}>Add Task</button>
             
            <br /><br /><br />

            <hr />  

            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key ={todo.id} >
                             <span>{todo.task}</span>
                                &nbsp;&nbsp; &nbsp; &nbsp;
                             <button onClick={() => deleteTodo(todo.id)}>delete</button> &nbsp; &nbsp; &nbsp;
                             <button onClick={() => uppercaseone(todo.id)}>Uppercase one</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={uppercaseall}>Uppercase All</button>
            &nbsp; &nbsp; &nbsp; 
            <button onClick={lowercaseall}>Lowercase All</button>
        </>
    )
}