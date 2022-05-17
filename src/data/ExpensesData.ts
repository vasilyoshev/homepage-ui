import { ExpenseItemProps } from 'interfaces';

export const initialExpenses: Array<ExpenseItemProps> = [
  {
    id: 'e1',
    title: 'Apartment Rent',
    amount: 650.0,
    date: new Date(2022, 1, 14)
  },
  {
    id: 'e2',
    title: 'Multisport',
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 1, 20)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e5',
    title: 'Apartment Rent',
    amount: 650.0,
    date: new Date(2020, 1, 14)
  },
  {
    id: 'e6',
    title: 'Apartment Rent',
    amount: 650.0,
    date: new Date(2021, 1, 14)
  }
];
