import React, { createContext, useContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [active, setActive] = useState([]);

  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      console.error("Invalid JSON in localStorage for 'todos'", error);
      return [];
    }
  });

const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : false;
});

const themeToggle = () => {
  setTheme(prev => !prev);
};

useEffect(() => {
  localStorage.setItem("theme", JSON.stringify(theme));
}, [theme]);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const activeTodos = todos.filter(todo => !todo.completed);
    setActive(activeTodos);
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), todoText: text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        toggleTodo,
        active,
        theme,
        setTheme,
        themeToggle
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
