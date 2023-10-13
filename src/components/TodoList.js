import React from 'react';

function TodoList({ todos }) {
return (
    <ul className="todo-list">
    {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
    ))}
    </ul>
);
}

export default TodoList;