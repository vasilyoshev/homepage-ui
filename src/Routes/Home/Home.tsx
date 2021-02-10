import React from 'react';
import { AddWidgetTooltip } from 'components';
import { TodoWidget } from 'widgets';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <>
      <AddWidgetTooltip />
      <TodoWidget />
    </>
  );
};
