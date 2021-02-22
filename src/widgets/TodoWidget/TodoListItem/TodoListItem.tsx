import { TodoListItemProps } from 'interfaces';
import React from 'react';
import todoListItem  from 'stylesheets/widgets/TodoListItem.module.scss';
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label className={todo.complete ? todoListItem.complete : ''}>
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
