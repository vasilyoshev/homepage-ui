import { ExpensesListProp } from 'interfaces';
import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList: React.FC<ExpensesListProp> = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
