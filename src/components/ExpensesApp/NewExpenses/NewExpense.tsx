import { ExpenseItemProps, NewExpenseItemOnAddProps } from 'interfaces';
import { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense: React.FC<NewExpenseItemOnAddProps> = ({
  onAddExpense
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
