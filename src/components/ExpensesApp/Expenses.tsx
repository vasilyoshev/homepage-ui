import { ExpensesFilter, ExpensesList } from 'components';
import { ExpensesListProp } from 'interfaces';
import { useState } from 'react';
import { Card } from './UI/Card';
import './Expenses.css';

export const Expenses: React.FC<ExpensesListProp> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear: string) =>
    setFilteredYear(selectedYear);

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesList items={filteredExpenses} />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </Card>
    </div>
  );
};
