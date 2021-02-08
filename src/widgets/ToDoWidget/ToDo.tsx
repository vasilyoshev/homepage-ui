import React from 'react';
import TodoList from './TodoList';

const TodoWidget: React.FC = () => {
  const todos = [{id: '1', text: 'Feed the cat'}];
  return <div className='todo'>
    <TodoList items={todos} />
  </div>;
};

export default TodoWidget;