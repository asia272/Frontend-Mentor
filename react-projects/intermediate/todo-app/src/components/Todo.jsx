import React, { useContext, useEffect, useState } from "react";
import "./Todo.css"
import { TodoContext } from "../context/TodoContext";
import bg_desktop_light from "../assets/images/bg-desktop-light.jpg"
import bg_desktop_dark from "../assets/images/bg-desktop-dark.jpg"
import checkIcon from "../assets/images/icon-check.svg";
import crossIcon from "../assets/images/icon-cross.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";


const Todo = () => {
    const { todos, addTodo, deleteTodo, toggleTodo, setTodos, active, theme, themeToggle } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("")


    const [displayTodos, setDisplayTodos] = useState([]);

    useEffect(() => {
        setDisplayTodos(todos);
    }, [todos]);
    useEffect(() => {
        let root = document.documentElement;
        if (theme) {
            root.classList.add("light-theme")
            root.classList.remove("dark-theme")
        } else {
            root.classList.add("dark-theme")
            root.classList.remove("light-theme")
        }

    }, [theme])

    let allTodos = () => {
        setDisplayTodos(todos);
    }
    let activeTodos = () => {
        let activeTodos = todos.filter((todo) => !todo.completed);
        setDisplayTodos(activeTodos)
    }
    let completedTodos = () => {
        let completed = todos.filter((todo) => todo.completed);
        setDisplayTodos(completed)
    }
    let clearCompleted = () => {
        let clearCompletetTodos = todos.filter((todo) => !todo.completed);
        setTodos(clearCompletetTodos)
        setDisplayTodos(todos)
    }

    return (
        <>
            <div className="top-img" >
                <img src={theme ? bg_desktop_light : bg_desktop_dark} alt="bg-img" />
            </div>
            {/* Todo container */}
            <section className="todo-container">
                <div className="todo-head">
                    <div className="heading">
                        <h1>Todo</h1>
                    </div>
                    <div className="theme-toggling"
                        onClick={themeToggle}>
                        <img src={theme ? moonIcon : sunIcon}
                            alt="icon" />
                    </div>
                </div>
                <form onSubmit={e =>
                (e.preventDefault(),
                    setNewTodo(""),
                    addTodo(newTodo))}>

                    <div className="circle">

                    </div>
                    <input type="text"
                        placeholder="Create new todo..."
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)} />
                </form>
                <div className="display-todos">
                    {/* Example Display */}
                    <ul>
                        {displayTodos.map(todo => (
                            <>
                                <li key={todo.id}>
                                    <div className="todo"
                                        onClick={() => toggleTodo(todo.id)}>
                                        <span
                                            className={`circle ${todo.completed ? 'completed-todo' : ''}`}>
                                            {todo.completed && <img src={checkIcon} alt="checkIcon" />}
                                        </span>
                                        <span >
                                            {todo.todoText}
                                        </span>
                                    </div>

                                    <button onClick={() => deleteTodo(todo.id)}>
                                        <img src={crossIcon} alt="cross-Icon" />
                                    </button>
                                </li>
                                <hr />
                            </>
                        ))}
                    </ul>
                    <div className="todo-footer">
                        <span> {active.length} item left</span>
                        <div className="center">
                            <button onClick={allTodos}>All</button>
                            <button onClick={activeTodos}>Active</button>
                            <button onClick={completedTodos}>Completed</button>
                        </div>

                        <div>
                            <button onClick={clearCompleted}>
                                Clear Completed
                            </button>
                        </div>
                    </div>
                </div>

            </section >
        </>


    )
}

export default Todo

