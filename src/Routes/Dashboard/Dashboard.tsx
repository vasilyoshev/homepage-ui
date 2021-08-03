import React from 'react';
import { useAppSelector } from 'store';

export const Dashboard: React.FC = () => {
  const { username } = useAppSelector((state) => state.user);
  return (
    <div>
      <h3>Hello {username}</h3>
    </div>
  );
};
