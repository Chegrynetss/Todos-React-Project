import React, { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import  './styles/index.css';
const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const handleAdd = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const handleEdit = (id, text) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        text,
                    };
                }
                return todo;
            })
        );
    };

    const handleToggle = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    const handleRemove = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleDeleteCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };

    const completedTodos = todos.filter((todo) => todo.completed);


    return (
        <div className ="app-container">
            <h1> ToDo App </h1>
            <TodoForm onAdd={handleAdd} />
            <TodoList todos={todos} onEdit={handleEdit} onToggle={handleToggle} onRemove={handleRemove} />
            {completedTodos.length > 0 && (
                <button className="delete-btn" onClick={handleDeleteCompleted}> Delete Completed </button>
            )}
        </div>
    );
};

export default TodoApp;



