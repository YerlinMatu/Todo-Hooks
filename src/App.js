import React from 'react';
import './App.scss';

// @components
import { Typography } from '@material-ui/core';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import useTodoState from './components/useTodoState';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="container">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={(todoText) => {
        const trimmedText = todoText.trim();
        trimmedText && addTodo(trimmedText);
      }}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
