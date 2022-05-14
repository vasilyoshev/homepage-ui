export interface ExpenseItemProps {
  id?: string;
  title: string;
  amount: number | string;
  date: Date;
}

export interface NewExpenseItemSaveProps {
  onSaveExpenseData: (args: ExpenseItemProps) => void;
}

export interface ExpenseFormItemProps {
  id?: string;
  enteredTitle: string;
  enteredAmount: string;
  enteredDate: string;
}

export interface ExpensesListsProps {
  items: ExpenseItemProps[];
}

export interface ExpenseCardProps {
  className: string;
  children: JSX.Element | JSX.Element[];
}
