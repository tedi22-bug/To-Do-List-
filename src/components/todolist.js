import React from "react";
import Todo from "./ToDo";

const Todolist = ( { todos, setTodos, filteredTodos } ) => {
    console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map( (todo) => (
                    <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;