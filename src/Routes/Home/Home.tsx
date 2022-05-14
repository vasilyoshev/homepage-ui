import { Expenses, NewExpense } from 'components';
import { ExpenseItemProps } from 'interfaces';
import { useState } from 'react';

const initialExpenses: Array<ExpenseItemProps> = [
  {
    id: 'e1',
    title: 'Apartment Rent',
    amount: 650.0,
    date: new Date(2022, 1, 14)
  },
  {
    id: 'e2',
    title: 'Multisport',
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 1, 20)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 2, 12)
  }
];

export const Home: React.FC = () => {
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
