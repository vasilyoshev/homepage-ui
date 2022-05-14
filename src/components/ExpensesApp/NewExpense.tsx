import { ExpenseItemProps } from 'interfaces';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense: React.FC = () => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
