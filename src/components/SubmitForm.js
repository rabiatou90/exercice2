import React, { useState } from 'react';

function SubmitForm({ addTodo }) {
const [newTodo, setNewTodo] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
    addTodo(newTodo);
    setNewTodo('');
    }
};

return (
    <form onSubmit={handleSubmit} className="submit-form">
    <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
    />
    <button type="submit">Add</button>
    </form>
);
}

export default SubmitForm;