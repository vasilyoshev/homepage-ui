import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="text"
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
        startIcon={<AddCircleOutlineIcon />}
      >
        Add Todo
      </Button>
    </form>
  );
};
