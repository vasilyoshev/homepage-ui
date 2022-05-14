export interface ExpenseItemProps {
  id?: string;
  title: string;
  amount: number | string;
  date: Date;
}

export interface NewExpenseItemOnAddProps {
  onAddExpense: (args: ExpenseItemProps) => void;
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

export interface ExpensesListProp {
  items: Array<ExpenseItemProps>;
}

export interface ExpenseCardProps {
  className: string;
  children?: any;
}

export interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (args: string) => void;
}
