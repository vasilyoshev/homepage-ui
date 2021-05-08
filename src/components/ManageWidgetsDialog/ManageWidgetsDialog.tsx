import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimerIcon from '@material-ui/icons/Timer';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive, selectIsCryptoCurrencyWidgetActive, selectIsTimerWidgetActive, selectIsWeatherWidgetActive, toggleWidget } from 'slices';
import styles from './ManageWidgetsDialog.module.scss';

type ManageWidgetsDialogType = {
  isOpen: boolean;
  onClose: () => void;
};

export const ManageWidgetsDialog: React.FC<ManageWidgetsDialogType> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const isCryptoCurrencyWidgetActive = useSelector(selectIsCryptoCurrencyWidgetActive);
  const isTimerWidgetActive = useSelector(selectIsTimerWidgetActive);
  const isWeatherWidgetActive = useSelector(selectIsWeatherWidgetActive);

  const toggleWidgetByName = (widgetName: string): void => {
    dispatch(toggleWidget(widgetName));
  };

  return (
    <Dialog onClose={onClose} open={isOpen} classes={{ paper: styles.addWidgetsDialogPaper }}>
      <DialogTitle disableTypography className={styles.addWidgetsDialogTitle}>
        <Typography variant="h5">Manage Widgets</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Card className={styles.widgetPreviewCard} onClick={() => toggleWidgetByName('calendar')}>
          <CardActionArea classes={{ root: styles.addWidgetsActionAreaRoot }}>
            <CalendarTodayIcon color={isCalendarWidgetActive ? 'primary' : 'secondary'} className={styles.widgetIcon} />
          </CardActionArea>
        </Card>
        <Card className={styles.widgetPreviewCard} onClick={() => toggleWidgetByName('todo')}>
          <CardActionArea classes={{ root: styles.addWidgetsActionAreaRoot }}>
            <FormatListNumberedIcon color={isTodoWidgetActive ? 'primary' : 'secondary'} className={styles.widgetIcon} />
          </CardActionArea>
        </Card>
        <Card className={styles.widgetPreviewCard} onClick={() => toggleWidgetByName('crypto')}>
          <CardActionArea classes={{ root: styles.addWidgetsActionAreaRoot }}>
            <DashboardIcon color={isCryptoCurrencyWidgetActive ? 'primary' : 'secondary'} className={styles.widgetIcon} />
          </CardActionArea>
        </Card>
        <Card className={styles.widgetPreviewCard} onClick={() => toggleWidgetByName('timer')}>
          <CardActionArea classes={{ root: styles.addWidgetsActionAreaRoot }}>
            <TimerIcon color={isTimerWidgetActive ? 'primary' : 'secondary'} className={styles.widgetIcon} />
          </CardActionArea>
        </Card>

        <Card className={styles.widgetPreviewCard} onClick={() => toggleWidgetByName('weather')}>
          <CardActionArea classes={{ root: styles.addWidgetsActionAreaRoot }}>
            <AcUnitIcon color={isWeatherWidgetActive ? 'primary' : 'secondary'} className={styles.widgetIcon} />
          </CardActionArea>
        </Card>

      </DialogContent>
    </Dialog>
  );
};
