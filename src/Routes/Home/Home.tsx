import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { TodoWidget, CryptoCurrencyTrackerWidget } from 'widgets';
import { selectIsTodoWidgetActive, selectIsCryptoCurrencyWidgetActive } from 'slices';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const isCryptoCurrencyWidgetActive = useSelector(selectIsCryptoCurrencyWidgetActive);

  return (
    <>
      <AddWidgetFab />
      <div className={styles.widgetsContainer}>
        <div>{isCryptoCurrencyWidgetActive && <CryptoCurrencyTrackerWidget />}</div>
        <div>{isTodoWidgetActive && <TodoWidget />}</div>
      </div>
    </>
  );
};
