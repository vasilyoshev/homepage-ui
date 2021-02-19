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
  
export interface TodoListAddNewTodoProps {
  addTodo: (newTodo: string) => void;
}
