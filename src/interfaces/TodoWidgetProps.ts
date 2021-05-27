export interface Todo {
  text: string;
  complete: boolean;
}

export interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: (selectedTodo: Todo) => void;
  removeTodo: (text: string) => void;
}

export interface TodoListItemProps {
  todo: Todo;
  toggleComplete: (selectedTodo: Todo) => void;
  removeTodo: (text: string) => void;
}

export interface AddTodoFormProps {
  addTodo: (newTodo: string) => void;
}
