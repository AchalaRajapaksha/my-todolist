import React from "react";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";

export default function Todoinput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
    const newTodo = {
      id: 1,
      name: todo,
      isCompleted: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />

      <button onClick={handleClick}>
        <PlusIcon />
      </button>
    </div>
  );
}
