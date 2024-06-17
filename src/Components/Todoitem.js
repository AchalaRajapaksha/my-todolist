import React, { useState } from 'react'

export default function Todoitem({todo, index, todos, setTodos}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState("");


  const handleDelete = ()=>{
    const newTodos = todos.filter((item)=>{
      if (todo.id === item.id) {
        return false;} else {
          return true;
        }
      }
    );
    setTodos (newTodos);
  };


  const handleEdit = () => {
    setIsEdit(!isEdit);
    setEditTodoName(todo.name);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const newTodos = todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            name: editTodoName,
          };
        } else {
          return item;
        }
      });

      setTodos(newTodos);
      setIsEdit(false);
    }
  };

  const handleComplete = () => {
    const newTodos = todos.map((item) => {
      if (todo.id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };


  return (
    <div>
      <div>{index}.
      {isEdit ? (
          <input
            type="text"
            value={editTodoName}
            onChange={(e) => {
              setEditTodoName(e.target.value);
            }}
            onKeyDown={handleSubmit}
          />
        ) : (
          <div
            onClick={handleComplete}
            style={{
              textDecorationLine: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.name}
          </div>
        )}</div>

      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
