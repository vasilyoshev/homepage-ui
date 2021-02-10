import React from 'react';
import { TodoList } from 'components';

export const TodoWidget: React.FC = () => {
  const todos = [{id: '1', text: 'Feed the cat'}];
  return <TodoList items={todos} />;
};

