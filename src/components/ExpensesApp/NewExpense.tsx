import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense: React.FC = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};
