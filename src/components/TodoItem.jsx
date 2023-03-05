import React from 'react';

const TodoItem = ({ todo, onEdit, onToggle, onRemove }) => {
    const handleRemove = () => {
        onRemove(todo.id);
    };

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <input type="text" value={todo.text} readOnly={true} onClick={() => onEdit(todo.id)} />
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;
