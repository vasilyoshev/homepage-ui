import { ExpenseItemProps } from 'interfaces';
import { ExpenseDate } from 'components';
import { Card } from './Card';
import './ExpenseItem.css';

export const ExpenseItem: React.FC<ExpenseItemProps> = ({
  title,
  amount,
  date
}) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </Card>
    </li>
  );
};
