import React from 'react';
import { TodoListProps } from 'interfaces';
import { TodoListItem } from 'components';
import List from '@material-ui/core/List';

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
};
