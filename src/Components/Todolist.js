import React, { useState } from 'react'
import Todoinput from './Todoinput'
import Todoitem from './Todoitem'

export default function Todolist() {
    const [todos, setTodos] = useState([]);

  return (
      <div>
          <h2>My todos</h2>
          <Todoinput todos={todos} setTodos={setTodos} />
          <div>
              
              {todos.map((item) => {
                  return <Todoitem key={item.id} todo={item} />
              
              })}
       
      </div>
    </div>
  );
}

