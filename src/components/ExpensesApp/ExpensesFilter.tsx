import { ExpensesFilterProps } from 'interfaces';
import { ChangeEvent } from 'react';
import './ExpensesFilter.css';

export const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
  selected,
  onChangeFilter
}) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};
