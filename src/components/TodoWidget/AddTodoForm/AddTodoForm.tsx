import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodoFormProps } from 'interfaces';
import { FormGroup, Button, TextField } from '@material-ui/core';

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const submitTodoItem = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
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
