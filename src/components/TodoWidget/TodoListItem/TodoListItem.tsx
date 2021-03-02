import { TodoListItemProps } from 'interfaces';
import React from 'react';
import styles from './TodoListItem.module.scss';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <InputLabel
      onChange={() => toggleComplete(todo)}
      className={todo.complete ? styles.complete : ''}
    >
      <Checkbox
        color="primary"
        checked={todo.complete}
        edge="start"
        disableRipple
      />
      <Typography display="inline" color="primary">
        {todo.text}
      </Typography>
    </InputLabel>
  );
};
