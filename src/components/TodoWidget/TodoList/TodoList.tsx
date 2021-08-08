import React from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { TodoListItem } from 'components';

export const TodoList: React.FC = () => {
  const todos = useSelector(
    (state: RootState) => state.todos,
  );
  return (
    <>
      {todos?.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
};
