import React from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { TodoListItem } from 'components';
import { List } from '@material-ui/core';

export const TodoList: React.FC = () => {
  const todos = useSelector(
    (state: RootState) => state.todos,
  );

  return (
    <List>
      {todos?.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </List>
  );
};
