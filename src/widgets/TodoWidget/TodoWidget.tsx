import React from 'react';
import { AddTodoForm, TodoList } from 'components';
import { Card, CardContent } from '@material-ui/core';

export const TodoWidget: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <TodoList />
        <AddTodoForm />
      </CardContent>
    </Card>
  );
};
