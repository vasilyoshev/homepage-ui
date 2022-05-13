export interface ExpenseItemProps {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

export interface ExpensesListsProps {
  items: ExpenseItemProps[];
}

export interface ExpenseCardProps {
  className: string;
  children: JSX.Element | JSX.Element[];
}
