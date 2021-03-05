import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodoFormProps } from 'interfaces';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

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
        value={newTodo}
        color="primary"
        margin='normal'
        variant="outlined"
        size="small"
        onChange={handleInputChange}
      />
      <Button
        size="medium"
        variant="contained"
        color="primary"
        type="submit"
        onClick={submitTodoItem}
      >
        Add Todo
      </Button>
    </FormGroup>
  );
};
