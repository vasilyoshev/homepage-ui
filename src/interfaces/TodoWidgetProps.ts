export interface Todo {
  text: string;
  complete: boolean;
}

export interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: (selectedTodo: Todo) => void;
}
  
export interface TodoListItemProps {
  todo: Todo;
  toggleComplete: (selectedTodo: Todo) => void;
}
  
export interface TodoListAddNewTodo {
  addTodo: (newTodo: string) => void;
}
