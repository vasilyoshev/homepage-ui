import React from 'react';
import { AddWidgetTooltip } from 'components';
// import { CalendarWidget } from 'widgets';
import ToDo from '../../../src/widgets/ToDoWidget/ToDo';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <>
      <AddWidgetTooltip />
      {/* <CalendarWidget /> */}
      <ToDo />
    </>
  );
};
