export interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export interface AddTodoFormProps {
  addTodo: AddTodo;
}

export interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export interface Todo {
  text: string;
  complete: boolean;
}

export interface ToggleComplete {
  (selectedTodo: Todo): void;
}

export interface AddTodo {
  (newTodo: string): void;
}
