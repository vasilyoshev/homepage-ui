import React from 'react';
import { AddTodoForm, TodoList } from 'components';
import { Card, CardContent } from '@mui/material';

export const TodoWidget: React.FC = () => {
  return (
    <Card elevation={6}>
      <CardContent>
        <TodoList />
        <AddTodoForm />
      </CardContent>
    </Card>
  );
};
