import { ExpenseItemProps, NewExpenseItemOnAddProps } from 'interfaces';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense: React.FC<NewExpenseItemOnAddProps> = ({
  onAddExpense
}) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
