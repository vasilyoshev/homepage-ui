import { Todo, ToggleComplete, AddTodo } from 'types';

export interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export interface AddTodoFormProps {
    addTodo: AddTodo;
  }

export  interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
  }
