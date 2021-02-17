import { TodoListItemProps } from 'interfaces';
import React from 'react';
import './TodoListItem.scss';

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : ''}>
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



