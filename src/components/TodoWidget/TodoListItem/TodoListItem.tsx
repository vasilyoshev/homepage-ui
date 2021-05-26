import React from 'react';
import { TodoListItemProps } from 'interfaces';
import { Checkbox, InputLabel, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TodoListItem.module.scss';

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <InputLabel
      className={todo.complete ? styles.complete : ''}
    >
      <Checkbox
        checked={todo.complete}
        color="primary"
        edge="start"
        disableRipple
        onChange={() => toggleComplete(todo)}
      />
      <Typography
        className={styles.todoText}
        display="inline"
        color="primary">
        {todo.text}
      </Typography>
      <IconButton
        data-testid="removeTodoItem"
        aria-label="delete">
          onClick={() => removeTodo(todo.text)}
        <DeleteIcon
          fontSize="small"
        />
      </IconButton>
    </InputLabel>
  );
};
