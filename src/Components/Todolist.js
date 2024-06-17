import React, { useState } from 'react'
import Todoinput from './Todoinput'
import Todoitem from './Todoitem'
import "./Todolist.css";

export default function Todolist() {
    const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list-container">
          <h2>My todos</h2>
          <Todoinput todos={todos} setTodos={setTodos} />
          <div className="todo-items-wrapper">
              
              {todos.map((item,index) => {
                  return <Todoitem key={item.id} todo={item} index={index+1} todos={todos} setTodos={setTodos} />
              
              })}
       
      </div>
    </div>
  );
}

