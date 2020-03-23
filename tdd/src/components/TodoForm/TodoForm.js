import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
  const { onChange, reset, value } = useInputState('');

  return (
    <form onSubmit={event => {
      event.preventDefault();
      saveTodo(value);
      reset();
    }}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        onChange={onChange}
        margin="normal"
        value={value}
      />
    </form>
  )
}

export default TodoForm;