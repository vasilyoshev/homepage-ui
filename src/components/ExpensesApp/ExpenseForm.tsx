import { ExpenseFormItemProps, NewExpenseItemSaveProps } from 'interfaces';
import { ChangeEvent, FormEvent, useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm: React.FC<NewExpenseItemSaveProps> = ({
  onSaveExpenseData
}) => {
  const [userInput, setUserInput] = useState<ExpenseFormItemProps>({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };
    onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
