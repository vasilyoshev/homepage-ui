import React, { useState } from 'react';
import { AddTodoForm, TodoList } from 'widgets';
import { Todo } from 'interfaces';
export const TodoWidget: React.FC = () => {
  const initialTodos: Array<Todo> = [
    {
      text: 'Walk the dog',
      complete: true,
    },
    {
      text: 'Make app',
      complete: false,
    },
  ];
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const toggleComplete = (selectedTodo: Todo): void => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const addTodo = (newTodo: string): void => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
  return (
    <>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};
