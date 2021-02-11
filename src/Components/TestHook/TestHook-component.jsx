import React from 'react';
import './TodoApp.css'
import { useState } from 'react';


const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
            {todo.text}
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
    );
};

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form >
    )
}

function TodoApp() {
    const [todos, setTodos] = useState([
        { text: "Learn about React", isCompleted: false },
        { text: "Meet friend for lunch", isCompleted: false },
        { text: "Build really cool todo app", isCompleted: false }
    ]);

    const addTodo = (text) => {
        const NewTodo = [...todos, { text }]
        setTodos(NewTodo)
    }
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos);
    }
    return (
        <div className=''>
            <div className='todo-list'>
                {todos.map((todo, index) =>
                    <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}></Todo>
                )}
                <TodoForm addTodo={addTodo}></TodoForm>
            </div>
        </div>
    );
}

export default TodoApp;
