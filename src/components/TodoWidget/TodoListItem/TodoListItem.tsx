import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoListItemProps } from 'interfaces';
import { removeTodo, completeTodo } from 'slices';
import { Checkbox, InputLabel, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TodoListItem.module.scss';

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
}) => {
  const dispatch = useDispatch();
  return (
    <InputLabel
      className={todo.completed ? styles.completed : ''}
    >
      <Checkbox
        checked={todo.completed}
        color="primary"
        edge="start"
        disableRipple
        onChange={() => dispatch(completeTodo(todo.id))}
      />
      <Typography
        className={styles.todoText}
        display="inline"
        color="primary">
        {todo.text}
      </Typography>
      <IconButton
        data-testid="removeTodoItem"
        aria-label="delete"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        <DeleteIcon
          fontSize="small"
        />
      </IconButton>
    </InputLabel>
  );
};
