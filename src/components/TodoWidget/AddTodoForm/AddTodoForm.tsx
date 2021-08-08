import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormGroup, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addTodo } from 'slices';

export const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const submitTodoItem = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!newTodo.trim()) {
      return;
    }
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <FormGroup>
      <TextField
        type='text'
        label="add new task"
        value={newTodo}
        color="primary"
        margin='normal'
        variant="outlined"
        size="small"
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        size="medium"
        variant="contained"
        color="primary"
        onClick={submitTodoItem}
      >
        Add Todo
      </Button>
    </FormGroup>
  );
};
