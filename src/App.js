import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import Todolist from "./components/todolist";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {

    const filterHandler = () => { 
      switch(filter) {
        case "completed": 
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case "uncompleted": 
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default: 
          setFilteredTodos(todos);
          break;
      }
    }

    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => { 
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else  { 
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Tedy's ToDoList</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setFilter={setFilter}
      />
      <Todolist 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      /> 
    </div>
  );
}

export default App;
