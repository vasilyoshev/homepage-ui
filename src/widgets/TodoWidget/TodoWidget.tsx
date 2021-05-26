import React, { useState } from 'react';
import { AddTodoForm, TodoList } from 'components';
import { Todo } from 'interfaces';
import { Card, CardContent } from '@material-ui/core';
import styles from './TodoWidget.module.scss';

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
  const removeTodo = (text: string): void => {
    setTodos(todos.filter((t) => t.text !== text));
  };
  return (
    <Card className={styles.todoWidget}>
      <CardContent>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        <AddTodoForm addTodo={addTodo} />
      </CardContent>
    </Card>
  );
};
