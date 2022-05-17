import { Expenses, NewExpense } from 'components';
import { initialExpenses } from 'data';
import { ExpenseItemProps } from 'interfaces';
import { useState } from 'react';

export const ExpensesContainer: React.FC = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense: ExpenseItemProps) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
