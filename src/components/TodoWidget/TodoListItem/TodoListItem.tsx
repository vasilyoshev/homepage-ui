import { TodoListItemProps } from 'interfaces';
import React from 'react';
import styles from './TodoListItem.module.scss';

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label className={todo.complete ? styles['complete'] : ''}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  );
};
