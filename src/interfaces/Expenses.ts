export interface ExpenseItemProps {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

export interface ExpenseFormItemProps {
  id?: string;
  enteredTitle: string;
  enteredAmount: string;
  enteredDate: Date | string;
}

export interface ExpensesListsProps {
  items: ExpenseItemProps[];
}

export interface ExpenseCardProps {
  className: string;
  children: JSX.Element | JSX.Element[];
}
