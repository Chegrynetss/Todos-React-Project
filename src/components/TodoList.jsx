import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, onEdit, onToggle, onRemove }) => {
    const handleRemove = (id) => {
        onRemove(id);
    };

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onToggle={onToggle} onRemove={handleRemove} />
            ))}
        </ul>
    );
};

export default TodoList;
