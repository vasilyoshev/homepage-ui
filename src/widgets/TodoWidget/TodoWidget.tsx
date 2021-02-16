import React, { useState } from 'react';
import { AddTodoForm, TodoList } from 'widgets';
import { AddTodo, Todo, ToggleComplete } from 'interfaces';

export const TodoWidget: React.FC = () => {
  
  const initialTodos: Array<Todo> = [
    {
      text: 'Walk the dog',
      complete: true
    },
    {
      text: 'Make app',
      complete: false
    }
  ];

  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};
