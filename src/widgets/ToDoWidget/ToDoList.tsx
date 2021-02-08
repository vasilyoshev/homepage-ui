import React from 'react';

type TodoItemProps = {
    items: Array<{id: string, text: string}>;
}

const TodoList: React.FC<TodoItemProps> = ({ items }) => {
  return <ul>
    {items.map(todoItem => (
      <li key={todoItem.id}>{todoItem.text}</li>
    ))}
  </ul>;
};

export default TodoList;
