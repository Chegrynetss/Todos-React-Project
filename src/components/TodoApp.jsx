import React, { useState } from 'react';
import  './styles/index.css';
function TodoApp() {
    const [todos, setTodos] = useState([]); // initialize state to an empty array
    const [inputValue, setInputValue] = useState(''); // initialize state to an empty string

    // handle the form submission when the user adds a new todo
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        const newTodo = {
            id: Date.now(), // generate a unique ID for the new todo
            text: inputValue,
            completed: false, // set the default status to "not completed"
        };
        setTodos([...todos, newTodo]); // add the new todo to the todos array
        setInputValue(''); // reset the input field to an empty string
    };

    // handle the input change when the user types a new todo
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // update the inputValue state with the new value
    };

    // handle the todo text edit
    const handleTodoEdit = (id, newText) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text: newText }; // update the text of the todo with the new value
            }
            return todo;
        });
        setTodos(updatedTodos); // update the todos array with the edited todo
    };

    // handle the todo status change
    const handleTodoStatusChange = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }; // toggle the status of the todo
            }
            return todo;
        });
        setTodos(updatedTodos); // update the todos array with the changed todo status
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit"> Add Todo</button>
            </form>
                <ul>
                {todos.map((todo) => (
                    <key {todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleTodoStatusChange(todo.id)}
                        />
                        <input
                            type="text"
                            value={todo.text}
                            onChange={(event) => handleTodoEdit(todo.id, event.target.value)}
                        />
                    </>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;


