import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { TodoWidget } from 'widgets';
import { selectIsTodoWidgetActive } from 'slices';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);

  return (
    <>
      <AddWidgetFab />
      <div className={styles.widgetsContainer}>
        <div>{isTodoWidgetActive && <TodoWidget />}</div>
      </div>
    </>
  );
};
