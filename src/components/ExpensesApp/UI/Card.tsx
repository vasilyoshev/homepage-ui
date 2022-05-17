import './Card.css';
import { ExpenseCardProps } from 'interfaces';

export const Card: React.FC<ExpenseCardProps> = ({ className, children }) => {
  const classes = 'card ' + className;

  return <div className={classes}>{children}</div>;
};
