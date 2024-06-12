import React from 'react'

export default function Todoitem({ todo}) {
  return (
    <div>
      <div>{todo.name}</div>
    </div>
  );
}
