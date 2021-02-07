import React from 'react';
import { AddWidgetTooltip } from 'components';
import { CalendarWidget } from 'widgets';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <>
      <AddWidgetTooltip />
      <CalendarWidget />
    </>
  );
};
