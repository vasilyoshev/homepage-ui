import React from 'react';
import { TodoListProps } from 'interfaces';
import { TodoListItem } from 'widgets';

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};





