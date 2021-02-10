import React from 'react';

type TodoListProps = {
    items: Array<{id: string, text: string}>;
}

export const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return <ul>
    {items.map(todoItem => (
      <li key={todoItem.id}>{todoItem.text}</li>
    ))}
  </ul>;
};


