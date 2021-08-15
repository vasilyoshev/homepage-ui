import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Container } from '@material-ui/core';
import { AddCircleOutlineRounded } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addTodo } from 'slices';

export const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

  const submitTodoItem = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <Container maxWidth="sm">
      <form noValidate>
        <TextField
          variant="outlined"
          margin='normal'
          required
          fullWidth
          type='text'
          color="primary"
          label="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          onClick={submitTodoItem}
          startIcon={<AddCircleOutlineRounded />}
        >
        Add Todo
        </Button>
      </form>
    </Container>
  );
};
