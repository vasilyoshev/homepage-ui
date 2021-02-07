import React from 'react';
import ToDoList from './ToDoList';

const ToDo: React.FC = () => {
  const todos = [{id: '1', text: 'Feed the cat'}];
  return <div className='ToDo'>
    <ToDoList items={todos} />
  </div>;
};

export default ToDo;