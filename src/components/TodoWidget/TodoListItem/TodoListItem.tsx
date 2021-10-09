import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoListItemProps } from 'interfaces';
import { removeTodo, completeTodo } from 'slices';
import { ListItemSecondaryAction, ListItem, ListItemText, IconButton, ListItemIcon, Checkbox } from '@material-ui/core';
import { DeleteOutlineRounded } from '@material-ui/icons';
import styles from './TodoListItem.module.scss';

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <ListItem dense className={styles.listItem}>
      <ListItemIcon>
        <Checkbox
          checked={todo.completed}
          color="primary"
          edge="start"
          disableRipple
          onChange={() => dispatch(completeTodo(todo.id))}
        />
      </ListItemIcon>
      <ListItemText
        className={todo.completed ? styles.completed : ''}
        primary={todo.text}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(removeTodo(todo.id))}>
          <DeleteOutlineRounded />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
