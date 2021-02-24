import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive, toggleWidget } from 'slices';
import styles from './ManageWidgetsDialog.module.scss';

type ManageWidgetsDialogType = {
  isOpen: boolean;
  onClose: () => void;
};

export const ManageWidgetsDialog: React.FC<ManageWidgetsDialogType> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);

  const toggleWidgetByName = (widgetName: string): void => {
    dispatch(toggleWidget(widgetName));
  };

  return (
    <Dialog onClose={onClose} open={isOpen} classes={{ paper: styles['add-widgets-dialog-paper'] }}>
      <DialogTitle disableTypography className={styles['add-widgets-dialog-title']}>
        <Typography variant="h5">Manage Widgets</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={styles['dialog-content']}>
        <Card className={styles['widget-preview-card']} onClick={() => toggleWidgetByName('calendar')}>
          <CardActionArea classes={{ root: styles['add-widgets-action-area-root'] }}>
            <CalendarTodayIcon color={isCalendarWidgetActive ? 'primary' : 'secondary'} className={styles['widget-icon']} />
          </CardActionArea>
        </Card>
        <Card className={styles['widget-preview-card']} onClick={() => toggleWidgetByName('todo')}>
          <CardActionArea classes={{ root: styles['add-widgets-action-area-root'] }}>
            <FormatListNumberedIcon color={isTodoWidgetActive ? 'primary' : 'secondary'} className={styles['widget-icon']} />
          </CardActionArea>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
