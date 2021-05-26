import React from 'react';
import { TodoListProps } from 'interfaces';
import { TodoListItem } from 'components';

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </>
  );
};
