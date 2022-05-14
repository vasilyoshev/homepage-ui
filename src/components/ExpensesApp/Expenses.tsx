import { ExpensesList } from 'components';
import { ExpensesListProp } from 'interfaces';
import { Card } from './Card';
import './Expenses.css';

export const Expenses: React.FC<ExpensesListProp> = ({ items }) => {
  return (
    <div>
      <Card className='expenses'>
        <ExpensesList items={items} />
      </Card>
    </div>
  );
};
