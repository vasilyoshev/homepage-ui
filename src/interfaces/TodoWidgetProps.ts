export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoListItemProps {
  todo: Todo;
}

